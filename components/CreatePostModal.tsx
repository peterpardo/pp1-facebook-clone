"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { FaCaretDown, FaUserFriends } from "react-icons/fa";

const CreatePostModal = () => {
  const { data: session } = useSession();
  const [input, setInput] = useState("");

  return (
    <div className="fixed inset-0 z-20">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-gray-100 opacity-50"
        onClick={() => console.log("Backdrop")}
      ></div>

      {/* Modal */}
      <div className="flex items-center justify-center h-full">
        <div className="bg-white rounded-md drop-shadow-md min-w-[500px]">
          {/* title */}
          <div className="text-center font-bold border-b-2 py-4">
            Create Post
          </div>

          {/* User with info */}
          <div className="flex items-center gap-x-2 mx-4 py-3">
            <div className="w-10 rounded-full cursor-pointer overflow-hidden">
              <Image
                src={session?.user.image as string}
                alt="user image"
                width={40}
                height={40}
                className="w-full"
              />
            </div>
            <div className="text-xs">
              <div className="font-semibold">{session?.user.name}</div>
              <div className="flex items-center gap-x-2 bg-gray-200 rounded-md p-1 mt-1 cursor-pointer">
                <FaUserFriends />
                <span className="font-semibold">Friends</span>
                <FaCaretDown />
              </div>
            </div>
          </div>

          {/* textarea */}
          <textarea
            className="w-full px-4 outline-none h-36 resize-none"
            placeholder={`What's on your mind, ${session?.user.name}?`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          {/* button */}
          <div className="px-4 py-3">
            <button
              className={`${
                input
                  ? "bg-[color:var(--fb-blue)] text-white"
                  : "bg-gray-200 text-gray-300"
              } font-bold text-center rounded-md py-2 w-full`}
              disabled={!input}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreatePostModal;
