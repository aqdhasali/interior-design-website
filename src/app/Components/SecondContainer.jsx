import React from "react";

export default function SecondContainer(){
    return(
    <div className="m-10 flex gap-28">
        <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-5">
                <h1 className="text-4xl font-bold">The Art of Interior Design</h1>
                <p className="breakwords text-s italic w-96">
                    Good interior design is not just about aesthetics; it is about creating spaces that inspire, comfort, and reflect the essence of those who inhabit them.
                </p>
            </div>
            

            <div className="flex gap-10">
                <div className="flex flex-col gap-2 text-center">
                    <span className="text-4xl font-bold">300+</span>
                    <span>Satisfied Clients</span>
                </div>
                
                <div className="flex flex-col gap-2 text-center">
                    <span className="text-4xl font-bold">500+</span>
                    <span>Completed Projects</span>
                </div>
            </div>

            <div className="flex flex-col h-40 w-80 bg-slate-100/10 border border-white rounded">
                <p className="tracking-tight p-5 text-s">
                    A truly successful design is one that not only captivates the eye but also fulfills the needs and desires of the customer, turning visions into reality.
                </p>

                <span className="pl-2 italic">-us</span>
            </div>
        </div>

        <div className="flex gap-10">
            <div className="flex flex-col gap-2">
                <p className="text-center">aesthetic art with led wall lights</p>
                <img className="rounded w-64" src="m1.jpeg"></img>


                
                <img className="rounded max-w-xl" src="m3.svg"></img>
                <p className="text-center">living room complete setup</p>
            </div>

            <div className="m-10">
                <img className="rounded w-96" src="m2.jpeg"></img>
                <p className="text-center">turkish wood dining set chair</p>
            </div>

        </div>
    </div>
    
    )
}