'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SectionBox from "../layout/SectionBox"
import { faLink, faPlus, faSave, faTrash } from "@fortawesome/free-solid-svg-icons"
import SubmitButton from "../buttons/SubmitButton"
import { useState, useEffect } from "react"
import { savePageLinks } from "@/actions/pageSetting"
import toast from "react-hot-toast"
import uniqid from 'uniqid';

export default function PageLinksForm({ user, page }) {
    // Convert incoming links to ensure they all have unique keys
    const [links, setLinks] = useState(() => {
        const pageLinks = page.links || [];
        return pageLinks.map(link => ({
            ...link,
            key: link.key || uniqid() // Ensure each link has a unique key
        }));
    });
    
    async function save() {
        await savePageLinks(links)
        toast.success('Links Saved')
    }
    
    function addNewLink() {
        const uuid = uniqid();
        setLinks(prev => [...prev, { key: uuid, title: '', subtitle: '', icon: '', url: "" }]);
    }

    function handleLinkChange(key, prop, ev) {
        const value = ev.target.value;
        setLinks(prev => {
            return prev.map(link => 
                link.key === key ? { ...link, [prop]: value } : link
            );
        });
    }

    function removeLink(linkKeyToRemove) {
        setLinks(prev => prev.filter(l => l.key !== linkKeyToRemove));
    }

    return (
        <SectionBox>
            <form action={save}>
                <h2 className="text-2xl font-bold mb-4">Links</h2>
                <button
                    onClick={addNewLink}
                    type="button"
                    className="text-blue-500 text-lg flex gap-2 items-center cursor-pointer ">
                    <FontAwesomeIcon
                        className="bg-blue-500 text-white rounded-full p-1 aspect-square w-4 h-4"
                        icon={faPlus} />
                    <span>Add New</span>
                </button>

                <div className="">
                    {links.map(l => (
                        <div key={l.key} className="mt-8 md:flex gap-2 items-center">
                            <div className="text-center">
                                <div className="bg-gray-300 p-4 rounded-full inline-block">
                                    <FontAwesomeIcon icon={faLink} className="w-4 h-4" />
                                </div>
                            </div>

                            <div className="grow">
                                <input
                                    value={l.title || ''}
                                    onChange={ev => handleLinkChange(l.key, 'title', ev)}
                                    type="text"
                                    placeholder="title" />
                                <input
                                    value={l.subtitle || ''}
                                    onChange={ev => handleLinkChange(l.key, 'subtitle', ev)}
                                    type="text"
                                    placeholder="subtitle (optional)" />
                                <input
                                    value={l.url || ''}
                                    onChange={ev => handleLinkChange(l.key, 'url', ev)}
                                    type="text"
                                    placeholder="url" />
                            </div>
                            <div>
                                <button
                                    type="button"
                                    onClick={() => removeLink(l.key)}
                                    className="py-2 px-4 bg-gray-300 cursor-pointer">
                                    <FontAwesomeIcon icon={faTrash} className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="max-w-[200px] mx-auto p-2">
                    <SubmitButton>
                        <FontAwesomeIcon
                            icon={faSave}
                            className="w-4 h-4"
                            fixedWidth={true}
                        />
                        <span>Save</span>
                    </SubmitButton>
                </div>
            </form>
        </SectionBox>
    )
}