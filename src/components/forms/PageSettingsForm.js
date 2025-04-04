'use client'
import { faPalette, faImage, faSave, faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import RadioTogglers from "../formItems/radioTogglers";
import Image from "next/image";
import SubmitButton from "../buttons/SubmitButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import savePageSetting from "@/actions/pageSetting";
import { toast } from "react-hot-toast";
import { useState } from "react";
import SectionBox from "../layout/SectionBox";

export default function PageSettingsForm({ page, user }) {

    const [bgType, setBgType] = useState(page.bgType)
    const [bgColor, setBgColor] = useState(page.bgColor)
    const [bgImage, setBgImage] = useState(page.bgImage)
    const [avatar,setAvatar] = useState(user?.image)

    async function saveBaseSettings(formData) {
        const result = await savePageSetting(formData)
        if (result) {
            toast.success('Saved')
        }

    }

    async function upload(ev, callbackFn) {
        const file = ev.target.files?.[0];
        if (file) {

            const uploadPromise = new Promise((resolve, reject) => {
                const data = new FormData();
                data.set('file', file)
                fetch('/api/upload', {
                    method: 'POST',
                    body: data
                }).then(response => {
                    if (response.ok) {
                        response.json().then(link => {
                            callbackFn(link);
                            resolve(link);

                        })
                    } else {
                        reject();
                    }


                });
            });

            await toast.promise(uploadPromise, {
                loading: 'Uploading',
                success: 'Uploaded!!',
                error: 'Failed to upload'
            })
        }
    }

    async function handleCoverChange(ev) {
        await upload(ev, link => {
            setBgImage(link)
        })
    }

    async function handleAvatarChange(ev) {
        await upload(ev, link => {
            setAvatar(link)
        })
    }
    return (
        <div >
            <SectionBox>
            <form action={saveBaseSettings}>
                <div
                    className="py-4 -m-4 min-h-[300px] flex justify-center items-center bg-cover bg-center"
                    style={
                        bgType === 'color'
                            ? { backgroundColor: bgColor }
                            : { backgroundImage: `url(${bgImage})` }}
                >
                    <div>
                        <RadioTogglers
                            defaultValue={page.bgType}
                            options={[
                                { value: 'color', icon: faPalette, label: 'Color' },
                                { value: 'image', icon: faImage, label: 'Image' }
                            ]}
                            onChange={val => setBgType(val)}
                        />
                        {bgType === 'color' && (
                            <div className="bg-gray-200 shadow text-gray-700 p-2 mt-2">

                                <div className="mt-2 gap-2 flex justify-center">
                                    <span>Background Color</span>
                                    <input type="color" onChange={ev => setBgColor(ev.target.value)} name="bgColor" defaultValue={page.bgColor} />
                                </div>
                            </div>
                        )}
                        {bgType === 'image' && (
                            <div className="flex justify-center">
                                <label
                                    className="bg-white shadow px-4 py-2 mt-2 cursor-pointer"
                                    type="button">
                                    <input type="hidden" name="bgImage" value={bgImage} />
                                    <input type="file" name="image" className="hidden" onChange={handleCoverChange} />
                                    <div className="flex gap-2 items-center">
                                        <FontAwesomeIcon icon={faCloudArrowUp} className="text-gray-700" />
                                        <span>Change Image</span>
                                    </div>
                                </label>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex justify-center -mb-12">
                    <div className="relative -top-8 w-[128px] h-[128px]">
                        <div className="overflow-hidden h-full rounded-full border-4 border-white shadow shadow-black/50">
                        <Image
                            src={avatar}
                            className="w-full h-full object-cover"
                            alt={"avatar"}
                            width={128} height={128}
                        />
                        </div>
                        
                        <label
                            htmlFor="avatar"
                            className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow shadow-black/50 aspect-square flex items-center cursor-pointer">
                            <FontAwesomeIcon icon={faCloudArrowUp} size={'xl'} />
                        </label>
                        <input type="file" id="avatar" className="hidden" onChange={handleAvatarChange} />
                        <input type="hidden" name="avatar" value={avatar} />

                    </div>

                </div>
                <div className="p-0">
                    <label className="input-label" htmlFor="nameIn">Display Name</label>
                    <input
                        type="text"
                        id="nameIn"
                        name="displayName"
                        defaultValue={page.displayName}
                        placeholder="John Doe" />
                    <label className="input-label" htmlFor="locationIn">Location</label>
                    <input
                        type="text"
                        id="locationIn"
                        name="location"
                        defaultValue={page.location}
                        placeholder="Dilli" />
                    <label className="input-label" htmlFor="bioIn">Bio</label>
                    <textarea
                        name="bio"
                        defaultValue={page.bio}
                        id="bioIn"
                        placeholder="Something about yourself" />
                </div>
                <div className="max-w-[200px] mx-auto p-2">
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
           
        </div>
    )
}