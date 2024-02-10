import Tiptap from "@/components/Tiptap";
import { SideNav } from "@/components/ui/SideNav";
import { HomeIcon, BookText } from "lucide-react";
import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen justify-between">
      <SideNav
        navList={[
          {
            label: (
              <Image
                src={"StationLogo.svg"}
                alt="Station logo"
                width={24}
                height={15}
              />
            ),
            href: "/",
          },
          { label: <HomeIcon className="text-neutral-700" />, href: "/" },
          { label: <BookText className="text-neutral-700" />, href: "/" },
        ]}
      />
      <Tiptap />
    </main>
  );
}
