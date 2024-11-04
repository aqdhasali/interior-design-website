export default function FourthContainer(){
    return(
        <div className="mt-20 m-10 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-bold">What makes stand out?</h1>
                <p className="font-medium">These qualities set us apart from others in the industry, offering an unmatched blend of creativity, quality, and client-focused service.</p>
            </div>

            <div className="flex gap-10">
                <div className="flex flex-col gap-10 bg-slate-100/10 border border-white rounded p-5 text-center">
                    <h1 className="text-xl font-bold tracking-tighter">Personalized Approach</h1>
                    <p className="text-justify tracking-tighter leading-5">We don't follow a one-size-fits-all model. Every design is uniquely tailored to reflect your individual taste and needs</p>

                    <div className="flex flex-col justify-center items-center">
                        <img className="w-64" src="m5.jpeg"></img>
                    </div>

                    
                </div>

                <div className="flex flex-col items-center justify-center gap-5  bg-slate-100/10 border border-white rounded p-5">
                    <h1 className="text-xl font-bold tracking-tighter text-center">Attention to Detail</h1>
                    <p className="text-justify tracking-tighter leading-5">From the initial concept to the final touches, we pay meticulous attention to every detail to achieve perfection</p>

                    <div className="flex flex-col justify-center items-center">
                        <img className="w-64" src="m5.jpeg"></img>
                    </div>
                    
                </div>

                <div className="flex flex-col gap-10 bg-slate-100/10 border border-white rounded p-5">
                    <h1 className="text-xl font-bold tracking-tighter text-center">Seamless Collaboration</h1>
                    <p className="text-justify tracking-tighter leading-5">We maintain clear and constant communication with our clients, making sure your ideas are fully realized.</p>

                    <div className="flex flex-col justify-center items-center">
                        <img className="w-64" src="m5.jpeg"></img>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}