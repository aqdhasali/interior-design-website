export default function ThirdContainer(){
    return(
        <div className="flex flex-col m-10 gap-20">

            <div className="flex">
                <div>
                    <img className="rounded w-screen " src="m4.svg"></img>
                </div>

                <div className="flex flex-col gap-10">
                    <h1  className="text-right text-4xl font-bold">Designed by the finest designers.</h1>
                    <p className="text-right italic"> Our interiors are a testament to creativity, elegance, and attention to detail. Every space we create reflects a perfect blend of functionality and aesthetics, tailored to your unique vision and lifestyle. </p>
                </div>
            </div>

            <div className="flex gap-5">
                <div className="p-7 gap-5 bg-slate-100/10 border border-white rounded tracking-tighter flex flex-col text-justify ">
                    <h1 className="text-l font-bold text-center">Reasonable Price</h1>
                    <p>We believe that luxury and style shouldn’t come at a high cost. Our services are competitively priced, ensuring you get the best value without compromising on quality.</p>
                </div>
                
                <div className="p-7 gap-5 bg-slate-100/10 border border-white rounded tracking-tightere flex flex-col text-justify ">
                    <h1 className="text-l font-bold text-center">Unique and Handcrafted Design</h1>
                    <p>Each design is thoughtfully crafted to be one-of-a-kind, blending creativity and craftsmanship to create spaces that stand out with personal charm and character.</p>
                </div>
                
                <div className="p-7 gap-5 bg-slate-100/10 border border-white rounded tracking-tighter flex flex-col text-justify ">
                    <h1 className="text-l font-bold text-center">Hard working team</h1>
                    <p>Our team is committed to bringing your vision to life with dedication and precision. We work tirelessly to deliver exceptional results, ensuring every detail is perfect.</p>
                </div>

            </div>


            


        </div>
    )
}