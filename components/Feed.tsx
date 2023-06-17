import { useSession } from "next-auth/react";
import Image from "next/image";

const Feed = () => {
  const { data: session } = useSession();

  return (
    <section className="flex flex-col justify-center mx-auto max-w-[680px] w-full p-2 gap-y-3">
      <div className="flex flex-col gap-y-3 bg-white rounded-md p-4 drop-shadow-md w-full">
        <div className="flex gap-x-3">
          {/* image */}
          <div className="w-10 rounded-full cursor-pointer overflow-hidden">
            <Image
              src={session?.user.image as string}
              alt="user image"
              width={40}
              height={40}
              className="w-full"
            />
          </div>
          {/* text */}
          <div className="flex items-center rounded-3xl bg-gray-100 py-1 px-4 flex-1 cursor-pointer hover:bg-gray-200">
            <span className="text-gray-500">{`What's on your mind, ${session?.user.name}?`}</span>
          </div>
        </div>

        <hr/>

        <div className="flex justify-around items-center gap-x-2">
          <div className="text-sm flex items-center justify-center rounded-md hover:bg-gray-100 gap-x-2 cursor-pointer px-5 py-1 flex-1">
            <div>
              {/* image */}
              <Image src='/icons/video-player.png' width={30} height={30} alt='video icon'/>
            </div>
            <div>
              <span>Live Video</span>
            </div>
          </div>
          <div className="text-sm flex items-center justify-center rounded-md hover:bg-gray-100 gap-x-2 cursor-pointer px-5 py-1 flex-1">
            <div>
              {/* image */}
              <Image src='/icons/picture.png' width={30} height={30} alt='video icon'/>
            </div>
            <div>
              <span>Photo/video</span>
            </div>
          </div>
          <div className="text-sm flex items-center justify-center rounded-md hover:bg-gray-100 gap-x-2 cursor-pointer px-5 py-1 flex-1">
            <div>
              {/* image */}
              <Image src='/icons/happy.png' width={30} height={30} alt='video icon'/>
            </div>
            <div>
              <span>Feeling/activity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Feed;
