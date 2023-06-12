import Image, { StaticImageData } from "next/image";

type DropdownItemType = {
  name: string;
  userType: string;
  image: string | StaticImageData;
};

const DropdownItem = ({ name, userType, image }: DropdownItemType) => {
  return (
    <li className="flex items-center hover:bg-gray-200 cursor-pointer rounded-md p-2">
      {/* Image */}
      <div className="w-10 rounded-full overflow-hidden mr-3">
        <Image src={image} alt="user image" className="w-full" />
      </div>

      {/* User info */}
      <div className="flex flex-col">
        <h3 className="font-semibold">{name}</h3>
        <span className="text-gray-500 text-xs">{userType}</span>
      </div>
    </li>
  );
};
export default DropdownItem;
