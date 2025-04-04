'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function ClickedPage({ link, page }) {
    const trackClick = async (e) => {
        e.preventDefault();
        ("Clicked:", link.url);

        try {
            const res = await fetch(`/api/click`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    url: link.url,
                    page: page.uri,
                }),
            });

            const data = await res.json();
        } catch (error) {
            console.error("Error tracking click:", error);
        }


        window.open(link.url, '_blank');
    };

    return (
        <div
            className="bg-blue-900 p-4 flex hover:bg-blue-800 transition-colors rounded-lg mb-4 h-24 cursor-pointer"
            onClick={trackClick}
        >
            <div className="min-w-12 w-12 h-12 bg-blue-700 flex items-center justify-center rounded-lg mr-4 flex-shrink-0">
                <FontAwesomeIcon icon={faLink} className="w-6 h-6" />
            </div>
            <div className="flex flex-col justify-center overflow-hidden">
                <h3 className="font-medium text-lg text-white truncate">{link.title}</h3>
                <p className="text-white/70 line-clamp-2 text-sm">{link.subtitle}</p>
            </div>
        </div>
    );
}
