"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreateListing = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ listing: "", tag: "", imageBase64: "", link: "", price: "" });

  const createListing = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/listing/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          listing: post.listing,
          userId: session?.user.id,
          tag: post.tag,
          imageBase64: post.imageBase64,
          link: post.link,
          price: post.price,
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

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(',')[1]);
      reader.onerror = (error) => reject(error);
    });
  }

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64String = await convertToBase64(file);
      setPost({ ...post, imageBase64: base64String });
    }
  }

  return (
    <Form
      type='Create'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createListing}
    >
      <input type="file" onChange={handleFileChange} />
    </Form>
  );
};

export default CreateListing;
``
