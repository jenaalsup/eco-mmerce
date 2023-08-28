import Listing from "@models/listing";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userId, listing, tag } = await request.json();

    try {
        await connectToDB();
        const newListing = new Listing({ creator: userId, listing, tag });

        await newListing.save();
        return new Response(JSON.stringify(newListing), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new product listing", { status: 500 });
    }
}