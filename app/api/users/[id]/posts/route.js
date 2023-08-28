import Listing from "@models/listing";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const listings = await Listing.find({ creator: params.id }).populate("creator")

        return new Response(JSON.stringify(listings), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch product listings created by user/company", { status: 500 })
    }
} 