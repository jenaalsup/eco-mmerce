import Listing from "@models/listing";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
    try {
        await connectToDB()

        const listings = await Listing.find({}).populate('creator')

        return new Response(JSON.stringify(listings), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all product listings", { status: 500 })
    }
} 