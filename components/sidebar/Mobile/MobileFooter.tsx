"use client";

import { useConversation } from "@/hooks/useConversation";
import { useRoutes } from "@/hooks/useRoutes";
import MobileItems from "./MobileItems"

export default function MobileFooter() {
  const routes = useRoutes();
  const { isOpen } = useConversation();

  if(isOpen) {
    return null;
  }

  return (
    <div className="fixed justify-between w-full bottom-0 z-40 flex items-center bg-white border-r-[1px] lg:hidden">
      {
        routes?.map((item) => (
          <MobileItems 
            key={item?.label}
            href={item?.href}
            icon={item?.icon}
            active={item?.active}
            onClick={item?.onClick}
          />
        ))
      }
    </div>
  )
}
