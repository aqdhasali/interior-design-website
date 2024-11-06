"use client";

import {Instrument_Sans, Roboto} from "next/font/google";
import { gsap } from "gsap";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";


const instrumentSans = Instrument_Sans({
    weight:["400","500","700"],
    subsets:["latin"]
})

gsap.registerPlugin(useGSAP)


export default function Home(){
    const title = useRef()
    
    useGSAP(() => {
        gsap.from(title.current, {
            duration:2.5,
            ease: "power3.out",
            scale:0.2,
        });
    });

    return(
        <div className="min-h-screen m-5  relative rounded overflow-hidden ">
            <div className="absolute inset-0 bg-home bg-cover bg-no-repeat opacity-35"></div>
            <div className="flex m-10 gap-10">
                <div className="">
                    <img className="w-20 lg:w-32 animate-spin-slow"src="circle.svg"></img>
                </div>
                <div className="">
                    <img className="w-20 lg:w-32 animate-spin-slow"src="circle.svg"></img>
                </div>
                <div className="">
                    <img className="w-20 lg:w-32 animate-spin-slow"src="circle.svg"></img>
                </div>
            </div>
            
    
            <div className="absolute left-0 m-10 bottom-14">
                <span className={`${instrumentSans.className}`}> Your New Home For</span>
                <h1 className={`title ${instrumentSans.className} text-left tracking-tight text-8xl lg:text-9xl`} ref={title}>Interior Design.</h1>
            </div>

        </div>
    )
}