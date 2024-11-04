import React from "react";
import Link from "next/link";
import {Inter} from "next/font/google";

const inter = Inter({
    weight: ['400', '700','900'],  // Specify the font weights
    subsets: ['cyrillic'],      // Specify the subsets
  });

  
export default function Header(){
    return (
        <div>
            <nav className="w-full">
                <div className="m-auto p-auto">
                    <div className={` ${inter.className} tracking-tight shadow-lg flex justify-center items-center h-16`}>
                        <ul className="flex space-x-5">
                            <li>
                                <Link href={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Product</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Contact</Link>
                            </li>
                            <li>
                                <Link href={"/"}>About us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}