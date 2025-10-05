'use client'; 

import Link from "next/link";


export default function NavLink({ href, children, className, ...props }) {
    return (
        <Link href={href} className={className} {...props}>
            {children}
        </Link>
    );
}
