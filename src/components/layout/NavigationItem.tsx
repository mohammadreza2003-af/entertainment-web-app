import { navItem } from "@/types";
import Link from "next/link";

type NavigationItemProps = {
  item: navItem;
  activeItem: string | null;
};
export default function NavigationItem({
  item,
  activeItem,
}: NavigationItemProps) {
  return (
    <Link href={item.url}>
      <div className="w-6 h-6">
        <item.icon
          className={`w-full h-full  hover:text-red-500 transition duration-200 ease-in ${
            activeItem === item.url ? "text-white" : "text-gray-500"
          }`}
        />
      </div>
    </Link>
  );
}
