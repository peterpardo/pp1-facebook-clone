"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import {
  FaArrowCircleRight,
  FaEllipsisH,
  FaRegComment,
  FaRegShareSquare,
  FaRegThumbsUp,
  FaTimes,
} from "react-icons/fa";

let dummyPost =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae blanditiis doloribus adipisci, quibusdam dolor omnis velit commodi tempora pariatur quas dolore illum voluptates quia distinctio iste provident ut dolorem natus harum eius nam rem sapiente recusandae facilis! Aperiam, recusandae nisi!";

const Post = () => {
  const { data: session } = useSession();
  const [isShowFullPost, setIsShowFullPost] = useState(false);
  const [post, setPost] = useState("");
  const [comment, setComment] = useState("");

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

  const handleChangeComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
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
      <div>
        {/* Add comment section */}
        <div className="flex items-start gap-x-2">
          {/* image */}
          <div className="w-8 rounded-full cursor-pointer overflow-hidden">
            <Image
              src={session?.user.image as string}
              alt="user image"
              width={40}
              height={40}
              className="w-full"
            />
          </div>

          {/* textbox */}
          <div className="flex flex-col items-center justify-between px-2 py-2 rounded-2xl bg-gray-100 w-full">
            {/* TOOD: add hidden property when textarea not in focus
                Also add row={1} in textarea when not in focus
             */}
            <textarea
              placeholder="Write a comment..."
              className="outline-none bg-transparent w-full resize-none px-2"
              value={comment}
              onChange={handleChangeComment}
            />

            <div className="p-2 rounded-full cursor-pointer hover:bg-gray-200 self-end">
              <FaArrowCircleRight
                className={`${
                  comment ? "text-[color:var(--fb-blue)]" : "text-gray-400"
                } text-xl`}
              />
            </div>
          </div>
        </div>
        {/* Other comments section */}
      </div>
    </div>
  );
};
export default Post;
