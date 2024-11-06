export default function Keela(){
    return(
        <div className="bg-darkgreen w-auto flex flex-col items-center justift-center gap-20 ">
            <div className="mt-10">
                <h1 className="tracking-widest text-2xl font-bold">ACE INTERIORS</h1>
                <p>Feel Free to Connect With Us</p>
            </div>

            <div className="mb-10 flex flex-col lg:flex-row gap-5 lg:gap-20">
                <div className="flex items-center  text-sm w-44 p-1 bg-slate-100/5 border border-slate-400 rounded-xl">
                    <h1>aceinteriors@gmail.com</h1>
                </div>

                <div className="flex item-center justify-center text-sm w-44 p-1 bg-slate-100/5 border border-slate-400 rounded-xl">
                    <h1>+917778899</h1>
                </div>

                <div className="flex item-center justify-center text-sm w-44 p-1 bg-slate-100/5 border border-slate-400 rounded-xl">
                    <h1>Colombo, Sri Lanka</h1>
                </div>
            </div>
        </div>
    )
}