import HeroForm from "@/components/forms/HeroForm";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { Page } from "@/models/Page";
import dbConnect from "@/libs/mongoose";

export default async function Home() {

  await dbConnect()
  const session = await getServerSession(authOptions);
  const page = await Page.findOne({owner:session.user.email})
  
  return (
    <>
      {session ? (
        <div className="px-4 md:px-6 py-12">
  <h1 className="text-3xl font-bold mb-4">Welcome back, {session.user.name || "there"} 👋</h1>
  <p className="text-gray-600 mb-6">Here's a quick look at your LinkConnect profile.</p>

  <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
    <h2 className="text-xl font-semibold mb-2">Your LinkConnect Page</h2>
    <div className="mb-4">
      <p className="text-gray-700">Your public link:</p>
      <div className="flex items-center gap-2 mt-2">
        <span className="text-blue-600 underline">{`https://rachit-linkconnect.vercel.app/${page.uri}`}</span>
        <button className="px-2 py-1 text-sm border rounded hover:bg-gray-100">Copy</button>
      </div>
    </div>
    <div className="flex gap-4 mt-4">
      <a
        href={`/${page.uri}`}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        View Page
      </a>
      <a
        href="/account"
        className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
      >
        Edit Profile
      </a>
    </div>
  </div>

</div>

      ) : (
        <main className="px-4 md:px-6 flex items-center justify-center">
          <section className="pt-16 md:pt-24 lg:pt-32">
            <div className="max-w-md mx-auto mb-6 md:mb-8 text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                Your one link <br className="hidden sm:block" />for everything
              </h1>
              <h2 className="text-gray-500 text-lg sm:text-xl mt-4 md:mt-6">
                Share your links, profiles, contact info and more on one page
              </h2>
            </div>

            <div className="max-w-md mx-auto">
              <HeroForm user={session?.user} />
            </div>
          </section>
        </main>

      )}
    </>
  );
}