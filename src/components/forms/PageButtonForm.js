'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionBox from "../layout/SectionBox";
import {
    faDiscord,
    faFacebook,
    faGithub, faInstagram, faTelegram,
    faTiktok,
    faWhatsapp,
    faYoutube,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMobile, faPlus, faSave, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SubmitButton from "../buttons/SubmitButton";
import { savePageButtons } from "@/actions/pageSetting";
import toast from "react-hot-toast";

export const allButtons = [
    { key: 'email', 'label': 'e-mail', icon: faEnvelope, placeholder: 'test@example.com' },
    { key: 'mobile', 'label': 'mobile', icon: faMobile, placeholder: '+91 1231231231' },
    { key: 'instagram', 'label': 'instagram', icon: faInstagram, placeholder: 'https://instagram.com/profile/...' },
    { key: 'linkedin', 'label': 'linkedin', icon: faLinkedin },
    { key: 'facebook', 'label': 'facebook', icon: faFacebook },
    { key: 'discord', 'label': 'discord', icon: faDiscord },
    { key: 'tiktok', 'label': 'tiktok', icon: faTiktok },
    { key: 'youtube', 'label': 'youtube', icon: faYoutube },
    { key: 'whatsapp', 'label': 'whatsapp', icon: faWhatsapp },
    { key: 'github', 'label': 'github', icon: faGithub },
    { key: 'telegram', 'label': 'telegram', icon: faTelegram },
];


export default function PageButtonForm({ user, page }) {
    

    const pageSavedButtonsKey = Object.keys(page.buttons || {});

    const pageSavedButtonsInfo = pageSavedButtonsKey.map(key => allButtons.find(b => b.key === key))
    const [activeButtons, setActiveButtons] = useState(pageSavedButtonsInfo);


    function addButtonToProfile(button) {
        setActiveButtons(prevButtons => {
            return [...prevButtons, button]
        })
    }

    async function saveButtons(formData) {
        await savePageButtons(formData)
        toast.success('Saved!')
    }


    function removeButton({ key: keyToRemove }) {
        setActiveButtons(prevButtons => {
            return prevButtons
                .filter(button => button.key !== keyToRemove);
        });
    }

    const availabeButtons = allButtons.filter(b1 => !activeButtons.find(b2 => b1.key === b2.key))

    return (
        <SectionBox>
            <form action={saveButtons}>
                <h2 className="text-2xl font-bold mb-4">Buttons</h2>

                {activeButtons.map(b => (
                    <div key={b.key} className="mb-4 md:flex ietms-center">
                        <div className="w-56 flex h-full p-2 gap-2 items-center text-gray-800">
                            <FontAwesomeIcon icon={b.icon} className="w-4 h-4" />
                            <span className="first-letter:uppercase">{b.label}:</span>
                        </div>
                        <div className="grow flex">
                            <input
                                name={b.key}
                                type="text"
                                defaultValue={page.buttons?.[b.key] || ''}
                                placeholder={b.placeholder}
                                style={{ marginBottom: '0' }}
                            />
                            <button
                                onClick={() => removeButton(b)}
                                type="button"
                                className="py-2 px-4  bg-gray-300 cursor-pointer">
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                    </div>
                ))}
                <div className="flex flex-wrap gap-2 mt-4 border-y p-4 justify-center sm:justify-start">
                    {availabeButtons.map((b) => (
                        <button
                            type="button"
                            key={b.key}
                            onClick={() => addButtonToProfile(b)}
                            className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-200 rounded-md text-sm w-full sm:w-auto sm:min-w-[140px] text-gray-700 hover:bg-gray-300 transition"
                        >
                            <FontAwesomeIcon icon={b.icon} />
                            <span className="first-letter:uppercase">{b.label}</span>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    ))}
                </div>
                <div className="max-w-[200px] mx-auto p-2 ">
                    <SubmitButton>
                        <FontAwesomeIcon
                            icon={faSave}
                            className={"h-6 w-6 flex items-center gap-2"}
                            fixedWidth={true}
                        />
                        <span>Save</span>
                    </SubmitButton>

                </div>
            </form>

        </SectionBox>
    )
}