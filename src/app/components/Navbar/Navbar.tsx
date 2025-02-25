import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const Navbar = () => {
    return (
        <div className="h-20 px-4 md:px-8 lg:px-6 xl:32 2xl:px-64 relative">
            {/* Mobile  */}
            <div className="h-full flex items-center justify-between md:hidden">
                <Link href="/">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
                        HS
                    </div>

                </Link>
                <Menu />
            </div>
            {/* bigger screens */}

            <div className="hidden md:flex items-center justify-between gap-8 h-full">
                {/* left */}
                <div className="w-1/3">
                    <Link href="/" className="flex items-center gap-3">
                        <Image src="/logo.png" alt="" height={75} width={75} className="cursor-pointer" />
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"> HS </div>
                    </Link>
                </div>
                {/* right */}
                <div className="w-2/3 flex items-center justify-between gap-8">
                    <SearchBar />
                    <NavIcons />
                </div>

            </div>
        </div>
    );
};

export default Navbar;