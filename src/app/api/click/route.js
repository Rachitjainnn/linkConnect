import dbConnect from '@/libs/mongoose';
import { Event } from '@/models/Event';

export async function POST(req) {
    await dbConnect();

    try {
        const { url, page } = await req.json();

        await Event.create({ type: 'click', uri: url, page });

        return Response.json({ success: true });
    } catch (error) {
        console.error('Error tracking click:', error);
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
}
