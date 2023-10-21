"use client";

import clsx from "clsx";
import Link from "next/link";

interface MobileItemsProps {
    href: string;
    icon: any;
    active?: boolean;
    onClick?: () => void;
}

export default function MobileItems({
    href,
    icon: Icon,
    active,
    onClick
}: MobileItemsProps) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={clsx("group flex gap-3 text-sm leading-6 font-semibold w-full justify-center p-4 text-gray-500 hover:text-black hover:bg-gray-100",
            active && "bg-gray-100 text-black"
            )}
        >
            <Icon className="h-6 w-6" />
        </Link>
    )
}
