export default function FifthContainer(){
    return(
        <div className="min-h-screen mt-20 m-10 flex flex-col lg:flex-row gap-20">

            <div className="flex flex-col gap-10">
                <div>
                    <h1 className="text-4xl font-bold">How we work</h1>
                    <p className="font-medium">Here's an insight of our process.</p>
                </div>
                

                <div>
                    <img className="w-screen" src="m6.svg"></img>
                </div>
                
                
            </div>

            <div className="grid g lg:grid-cols-2 gap-10">
                <div className="justify-center items-center p-5 flex gap-5 bg-slate-100/10 border border-white rounded">
                    <div>
                        <h2 className="text-8xl font-bold">1</h2>
                    </div>

                    <div className="tracking-tighter">
                        <h2 className="text-xl font-bold">We Visit Your Place</h2>
                        <p className="">We begin by visiting your space to understand its layout, your needs, and vision, ensuring a personalized design approach.</p>
                    </div>
                </div>
                
                <div className="justify-center items-center p-5 flex gap-5 bg-slate-100/10 border border-white rounded">
                    <div>
                        <h2 className="text-8xl font-bold">2</h2>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold">Generate computerized design</h2>
                        <p>Next, we create a detailed, computerized design plan that gives you a clear visual of how your space will look once completed.</p>
                    </div>
                </div>
                
                <div className="justify-center items-center p-5 flex gap-10 bg-slate-100/10 border border-white rounded">
                    <div>
                        <h2 className="text-8xl font-bold">3</h2>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold">Start with Actual Design and Implementation</h2>
                        <p>With the plan finalized, we start the hands-on process, carefully crafting and implementing every detail of your design.</p>
                    </div>
                </div>
                
                <div className="justify-center items-center p-5 flex gap-10 bg-slate-100/10 border border-white rounded">
                    <div>
                        <h2 className="text-8xl font-bold">4</h2>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold">Complete Your Design by the Deadline</h2>
                        <p>We ensure your project is completed on time, delivering a beautifully designed space without delays.</p>
                    </div>
                </div>






            </div>
            

        </div>
    )
}