"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CartModal from "./CartModal";

const NavIcons = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const router = useRouter();
    // Temporary
    const isLoggedIn = false

    const handleProfile = () => {
        setIsProfileOpen((prev) => !prev)
        if (!isLoggedIn) {
            router.push("/login")
        }

    }

    return (
        <div className="flex items-center gap-4 xl:gap-6 relative">
            <Image src="/profile.png" alt="" height={40} width={40} className="cursor-pointer" onClick={handleProfile} />
            {
                isProfileOpen && (
                    <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-xl font-bold z-50">
                        <Link href="/profile">Profile</Link>
                        <div className="mt-2 cursor-pointer">Logout</div>

                    </div>
                )
            }
            <Image src="/notification.jpg" alt="" height={40} width={40} className="cursor-pointer" />
            <Image src="/cart.jpg" alt="" height={40} width={40} className="cursor-pointer" onClick={() => setIsCartOpen((prev) => !prev)} />
            {
                isCartOpen && <CartModal/>
            }
        </div>
    );
};

export default NavIcons;