import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Chart from "@/components/Chart";
import SectionBox from "@/components/layout/SectionBox";
import dbConnect from "@/libs/mongoose";
import { Event } from "@/models/Event";
import { Page } from "@/models/Page";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { parseISO, isToday } from 'date-fns';
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default async function AnalyticsPage() {
  await dbConnect()
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect('/');
  }
  const page = await Page.findOne({ owner: session.user.email });
  if (!page) {
    return <div>Please create a page first</div>; 
}

const uri = page.uri;  

  const groupedViews = await Event.aggregate([
    {
      $match: {
        type: 'view',
        uri: uri,
      }
    },
    {
      $group: {
        _id: {
          $dateToString: {
            date: "$createdAt",
            format: "%Y-%m-%d"
          },
        },
        count: {
          "$count": {},
        }
      },
    },
    {
      $sort: { _id: 1 }
    }
  ]);

  const clicks = await Event.find({
    page: page.uri,
    type: 'click',
  });
  

  function isToday(date) {
    const now = new Date();
    const utcDate = new Date(date);

    return now.toDateString() === utcDate.toDateString();
  }

  return (
    <div>
      <SectionBox>
        <h2 className="text-xl mb-6 text-center">Views</h2>
        <Chart data={groupedViews.map(o => ({
          'date': o._id,
          'views': o.count,
        }))} />
      </SectionBox>
      <SectionBox>
        <h2 className="text-xl mb-6 text-center">Clicks</h2>
        {page.links.map(link => (
          <div key={link.title} className="md:flex gap-4 items-center border-t border-gray-200 py-4">
            <div className="text-blue-500 pl-4">
              <FontAwesomeIcon icon={faLink} />
            </div>
            <div className="grow">
              <h3>{link.title || 'no title'}</h3>
              <p className="text-gray-700 text-sm">{link.subtitle || 'no description'}</p>
              <a className="text-xs text-blue-400" target="_blank" href="link.url">{link.url}</a>
            </div>
            <div className="text-center">
              <div className="border rounded-md p-2 mt-1 md:mt-0">
                <div className="text-3xl">
                  {
                    clicks.filter(c => {
                      const clickDate = new Date(c.createdAt);
                      const today = new Date();

                      return c.uri === link.url &&
                        clickDate.getUTCFullYear() === today.getUTCFullYear() &&
                        clickDate.getUTCMonth() === today.getUTCMonth() &&
                        clickDate.getUTCDate() === today.getUTCDate();
                    }).length
                  }
                </div>
                <div className="text-gray-400 text-xs uppercase font-bold">clicks today</div>
              </div>
            </div>
            <div className="text-center">
              <div className="border rounded-md p-2 mt-1 md:mt-0">
                <div className="text-3xl">
                  {clicks.filter(c => c.uri === link.url).length}
                </div>
                <div className="text-gray-400 text-xs uppercase font-bold">clicks total</div>
              </div>
            </div>
          </div>
        ))}
      </SectionBox>
    </div>
  );
}