'use server'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import dbConnect from "@/libs/mongoose";
import { Page } from "@/models/Page";
import { getServerSession } from "next-auth";
import { User } from "@/models/User";

export default async function savePageSetting(formData){
    
    await dbConnect()
    const session  = await getServerSession(authOptions)
    if(session){

        const dataKeys = ['displayName','location','bio','bgType','bgColor','bgImage']
        const dataToUpdate = {}
        for( const key of dataKeys){
            if(formData.has(key)){
                dataToUpdate[key] = formData.get(key)
            }
        }
        
        await Page.updateOne(
            {owner:session?.user?.email},
            dataToUpdate
        )

        if(formData.has('avatar')){
            await User.updateOne(
                {email:session?.user?.email},
                {image:formData.get('avatar')}
            )
        }
        return true
    }

    return false
}

export async function savePageButtons(formData){
    
    await dbConnect()
    const session  = await getServerSession(authOptions)

    if(session){
        const buttonsValues = {}
        formData.forEach((value,key)=>{
            buttonsValues[key] = value
        })
        const dataToUpdate = {buttons:buttonsValues}

        await Page.updateOne(
            {owner:session?.user?.email},
            dataToUpdate
        )
    
        return true
    }
    return false
}

export async function savePageLinks(links){
    await dbConnect()
    const session = await getServerSession(authOptions)
    if(session){
        
        await Page.updateOne(
            {owner:session?.user?.email},
            {links}
        )
        return true

    }
    return false
}