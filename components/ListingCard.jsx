"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const ListingCard = ({ post, handleEdit, handleDelete, handleTagClick }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState("");

  const handleProfileClick = () => {
    console.log(post);

    if (post.creator._id === session?.user.id) return router.push("/profile");

    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  };

  const handleCopy = () => {
    setCopied(post.listing);
    navigator.clipboard.writeText(post.listing);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className='listing_card' style={{ borderRadius: '12px', border: '1px solid #12683E', padding: '15px', margin: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer' onClick={handleProfileClick} style={{ alignSelf: 'flex-start', fontSize: 'smaller' }}>
      <Image
        src={post.creator.image}
        alt='user_image'
        width={30}
        height={30}
        className='rounded-full object-contain'
      />
      <div className='flex flex-col'>
        <h3 className='font-satoshi font-semibold text-gray-900'>
          {post.creator.username}
        </h3>
        <p className='font-inter text-sm text-gray-500'>
          {post.creator.email}
        </p>
      </div>
    </div>
  
    {post.imageBase64 && (
      <img
        src={`data:image/png;base64,${post.imageBase64}`}
        alt='listing_image'
        style={{ width: '80%', objectFit: 'cover', margin: '10px auto' }} // Added inline style here
      />
    )}
  
  <div style={{ width: '100%', position: 'relative', textAlign: 'left' }}> 
      <p className='my-4 font-satoshi text-sm text-gray-700'>{post.listing}</p>
      {post.price && (
        <p className='font-satoshi text-sm' style={{ fontSize: 'smaller', color: 'darkgreen' }}>
          Price: {post.price}
        </p>
      )}
  
      {post.link && (
        <a href={post.link} target='_blank' rel='noopener noreferrer' style={{ fontSize: 'smaller', color: 'gray' }}>
          Visit Product Link
        </a>
      )}

      <div className='copy_btn' onClick={handleCopy} style={{ position: 'absolute', top: 0, right: 0 }}>
        <Image
          src={
            copied === post.listing
              ? "/assets/icons/tick.svg"
              : "/assets/icons/copy.svg"
          }
          alt={copied === post.listing ? "tick_icon" : "copy_icon"}
          width={12}
          height={12}
        />
      </div>
    </div>

      {session?.user.id === post.creator._id && pathName === "/profile" && (
        <div className='mt-5 flex-center gap-4 border-t border-gray-100 pt-3'>
          <p
            className='font-inter text-sm green_gradient cursor-pointer'
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className='font-inter text-sm orange_gradient cursor-pointer'
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default ListingCard;