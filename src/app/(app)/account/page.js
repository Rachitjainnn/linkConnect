import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import UsernameForm from "@/components/forms/UsernameForm"
import { Page } from "@/models/Page"
import dbConnect from "@/libs/mongoose"
import PageSettingsForm from "@/components/forms/PageSettingsForm"
import PageButtonForm from "@/components/forms/PageButtonForm"
import PageLinksForm from "@/components/forms/PageLinksForm"

export default async function AccountPage({ searchParams }) {
    await dbConnect()
    const session = await getServerSession(authOptions)
    const finalSession = JSON.parse(JSON.stringify(session))
    const username = searchParams?.username
    if (!session) {
        redirect('/')
    }
    const page = await Page.findOne({ owner: session?.user?.email })
    const finalPage = JSON.parse(JSON.stringify(page))
    

    if (page) {
        return(
            <>
                <PageSettingsForm page={finalPage} user={finalSession?.user}/>
                <PageButtonForm page={finalPage} user={finalSession?.user}/>
                <PageLinksForm page={finalPage} user={finalSession?.user}/>
            </>
        )
    }
    return (
        <div>
            <UsernameForm username={username}  />
        </div>
    )
}