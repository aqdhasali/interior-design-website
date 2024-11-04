import {Instrument_Sans, Roboto} from "next/font/google";

const instrumentSans = Instrument_Sans({
    weight:["400","500","700"],
    subsets:["latin"]
})
export default function Home(){
    return(
        <div className="m-10 relative h-screen">
            <div className="absolute left-0 bottom-20">
                <span className={`${instrumentSans.className}`}> Your New Home For</span>
                <h1 className={`${instrumentSans.className} text-left tracking-tight text-9xl`}>Interior Design.</h1>
            </div>
        </div>
    )
}