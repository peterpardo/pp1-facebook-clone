"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaEllipsisH, FaRegComment, FaRegShareSquare, FaRegThumbsUp, FaTimes } from "react-icons/fa";

let dummyPost =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae blanditiis doloribus adipisci, quibusdam dolor omnis velit commodi tempora pariatur quas dolore illum voluptates quia distinctio iste provident ut dolorem natus harum eius nam rem sapiente recusandae facilis! Aperiam, recusandae nisi!";

const Post = () => {
  const { data: session } = useSession();
  const [isShowFullPost, setIsShowFullPost] = useState(false);
  const [post, setPost] = useState("");

  useEffect(() => {
    if (isShowFullPost) {
      setIsShowFullPost(false);
    }
    if (dummyPost.length > 300) {
      const formattedPost = `${dummyPost.substring(0, 200)}...`;
      setPost(formattedPost);
    } else {
      setPost(dummyPost);
    }
  }, []);

  const handleShowFullPost = () => {
    setIsShowFullPost(true);
    setPost(dummyPost);
  };

  return (
    <div className="flex flex-col gap-y-3 bg-white rounded-md p-4 drop-shadow-md w-full">
      {/* header */}
      <div className="flex items-center gap-x-2">
        {/* user image */}
        <div className="w-10 rounded-full cursor-pointer overflow-hidden">
          <Image
            src={session?.user.image as string}
            alt="user image"
            width={40}
            height={40}
            className="w-full"
          />
        </div>

        <div className="flex flex-col gap-x-2">
          {/* name */}
          <div className="font-bold">{session?.user.name}</div>
          {/* time posted */}
          <div className="text-sm text-gray-400">1hr</div>
        </div>

        <div className="flex items-center ml-auto">
          {/* kebab icon */}
          <div className="p-2 rounded-full cursor-pointer hover:bg-gray-100">
            <FaEllipsisH className="text-gray-400" />
          </div>
          {/* close icon */}
          <div className="p-2 rounded-full cursor-pointer hover:bg-gray-100">
            <FaTimes className="text-gray-400" />
          </div>
        </div>
      </div>

      {/* post */}
      <p>
        {post}
        {dummyPost.length > 300 && !isShowFullPost && (
          <span
            className="font-bold cursor-pointer"
            onClick={handleShowFullPost}
          >
            See more
          </span>
        )}
      </p>

      {/* action buttons */}
      <div className="flex justify-between items-center border-y-[1px] py-1">
        <div className="flex justify-center items-center gap-x-2 text-center flex-1 cursor-pointer py-1 hover:bg-gray-100 rounded-md">
          <FaRegThumbsUp />
          <span>Like</span>
        </div>
        <div className="flex justify-center items-center gap-x-2 text-center flex-1 cursor-pointer py-1 hover:bg-gray-100 rounded-md">
          <FaRegComment />
          <span>Comment</span>
        </div>
        <div className="flex justify-center items-center gap-x-2 text-center flex-1 cursor-pointer py-1 hover:bg-gray-100 rounded-md">
          <FaRegShareSquare />
          <span>Share</span>
        </div>
      </div>

      {/* comments */}
    </div>
  );
};
export default Post;
