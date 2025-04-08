import dbConnect from "@/libs/mongoose";
import { Event } from "@/models/Event";
import { Page } from "@/models/Page";
import { User } from "@/models/User";
import {
    faDiscord,
    faFacebook,
    faGithub,
    faInstagram,
    faLinkedin,
    faTelegram,
    faTiktok,
    faWhatsapp,
    faYoutube
} from "@fortawesome/free-brands-svg-icons";
import {
    faEnvelope,
    faLink,
    faLocationDot,
    faMobile,
    faPhone
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image';
import Link from "next/link";
import ClickedPage from "@/components/ClickedPage";

export const buttonsIcons = {
    email: faEnvelope,
    mobile: faPhone,
    instagram: faInstagram,
    linkedin: faLinkedin,
    facebook: faFacebook,
    discord: faDiscord,
    tiktok: faTiktok,
    youtube: faYoutube,
    whatsapp: faWhatsapp,
    github: faGithub,
    telegram: faTelegram,
};

function buttonLink(key, value) {
    if (key === 'mobile') {
        return 'tel:' + value;
    }
    if (key === 'email') {
        return 'mailto:' + value;
    }
    return value;
}

export default async function UserPage({ params }) {
    const uri = params.uri;
    await dbConnect();

    const pageDoc = await Page.findOne({ uri });
    if (!pageDoc) return { notFound: true };

    const page = JSON.parse(JSON.stringify(pageDoc));
    page.buttons = page.buttons || {}; // ✅ fallback to empty object

    const user = JSON.parse(JSON.stringify(await User.findOne({ email: page.owner })));

    await Event.create({ uri: uri, page: uri, type: 'view' });

    return (
        <div className="bg-blue-950 text-white min-h-screen">
            <div
                className="h-36 bg-gray-400 bg-cover bg-center"
                style={
                    page.bgType === 'color'
                        ? { backgroundColor: page.bgColor }
                        : { backgroundImage: `url(${page.bgImage})` }
                }
            />
            <div className="aspect-square w-36 h-36 mx-auto relative -top-16 -mb-12">
                <Image
                    className="rounded-full w-full h-full object-cover"
                    src={user.image}
                    width={256}
                    height={256}
                    alt="avatar"
                />
            </div>

            <h2 className="text-2xl text-center mb-1">{page.displayName}</h2>
            <h3 className="text-md flex gap-2 justify-center items-center text-white/70">
                <FontAwesomeIcon className="h-4" icon={faLocationDot} />
                {page.location}
            </h3>
            <div className="max-w-xs mx-auto text-center my-2">
                <p>{page.bio}</p>
            </div>

            {/* ✅ Safe rendering of buttons */}
            <div className="flex gap-2 justify-center mt-4 pb-4">
                {Object.keys(page.buttons).map((buttonKey) => (
                    <Link
                        key={buttonKey}
                        target="_blank"
                        href={buttonLink(buttonKey, page.buttons[buttonKey])}
                        className="rounded-full bg-white text-blue-950 p-2 flex items-center justify-center"
                    >
                        <FontAwesomeIcon className="w-5 h-5" icon={buttonsIcons[buttonKey]} />
                    </Link>
                ))}
            </div>

            <div className="max-w-2xl h-56 mx-auto grid md:grid-cols-2 gap-6 p-4 px-8">
                {page?.links?.map((link) => (
                    <ClickedPage key={link.url} link={link} page={page} />
                ))}
            </div>
        </div>
    );
}
