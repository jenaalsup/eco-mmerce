"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const UpdateListing = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const listingId = searchParams.get("id");

  const [post, setPost] = useState({ listing: "", tag: "", });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getListingDetails = async () => {
      const response = await fetch(`/api/listing/${listingId}`);
      const data = await response.json();

      setPost({
        listing: data.listing,
        tag: data.tag,
      });
    };

    if (listingId) getListingDetails();
  }, [listingId]);

  const updateListing = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!listingId) return alert("Missing ListingId!");

    try {
      const response = await fetch(`/api/listing/${listingId}`, {
        method: "PATCH",
        body: JSON.stringify({
          listing: post.listing,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type='Update'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updateListing}
    />
  );
};

export default UpdateListing;