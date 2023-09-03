import Listing from "@models/listing";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB();

        const listing = await Listing.findById(params.id).populate("creator");
        if (!listing) return new Response("Product Listing Not Found", { status: 404 });

        return new Response(JSON.stringify(listing), { status: 200 });

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
};

export const PATCH = async (request, { params }) => {
    const { listing, tag, imageBase64, link, price } = await request.json();

    try {
        await connectToDB();

        // Find the existing product listing by ID
        const existingListing = await Listing.findById(params.id);

        if (!existingListing) {
            return new Response("Listing not found", { status: 404 });
        }

        // Update the product listing with new data
        existingListing.listing = listing;
        existingListing.tag = tag;
        existingListing.imageBase64 = imageBase64;
        existingListing.link = link;
        existingListing.price = price;

        await existingListing.save();

        return new Response("Successfully updated the Product Listings", { status: 200 });
    } catch (error) {
        return new Response("Error Updating Product Listing", { status: 500 });
    }
};

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();
        await Listing.findByIdAndRemove(params.id);

        return new Response("Product Listing deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Error deleting Product Listing", { status: 500 });
    }
};
