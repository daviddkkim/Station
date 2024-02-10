import { SideNav } from "@/components/ui/SideNav";
import { SquarePen } from "lucide-react";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <SideNav
        navList={[
          {
            label: (
              <span className="flex items-center gap-2">
                <SquarePen className="text-yellow-900" /> New note
              </span>
            ),
            href: "/notes/new",
            buttonType: "sm",
            buttonVariant: "default",
          },
          {
            label: <div>Some Note</div>,
            href: "/notes/123123",
            buttonType: "sm",
          },
        ]}
      />
      {children}
    </div>
  );
}
