import * as React from "react";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
export interface SideNavProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  navList: {
    label: React.ReactNode;
    href: string;
  }[];
}

const SideNav = React.forwardRef<HTMLElement, SideNavProps>(
  ({ navList, className, ...props }, ref) => {
    return (
      <nav
        {...props}
        className={cn(
          className,
          "border-r-1 h-full min-h-screen w-fit border bg-neutral-100 px-2 py-1",
        )}
      >
        <ul>
          {navList.map((navItem, i) => {
            return (
              <li key={i}>
                <Link href={navItem.href}>
                  <Button size={"icon"} variant={"ghost"}>
                    {navItem.label}
                  </Button>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  },
);
SideNav.displayName = "SideNav";

export { SideNav };
