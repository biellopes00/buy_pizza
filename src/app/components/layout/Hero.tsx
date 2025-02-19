import Image from "next/image";
import RightArrow from "../icons/RightArrow";

export default function Hero(){
    return(
        <section className="hero md:mt-4">
            <div className="py-8 md:py-12">
            <h1 className="text-4xl font-semibold">
                Everything<br/>
                is better<br/>
                with a&nbsp;
                <span className="text-bg-light-green">
                    Pizza
                </span>
            </h1>
            <p className="my-6 text-gray-600 text-lg">Pizza is the missing piece that makes every day complete,
                a simple yet delicious joy in life
            </p>
            <div className="flex gap-4">
                <button
                    className=
                        "bg-bg-light-green flex items-center gap-2 uppercase font-extrabold text-white px-4 py-2 rounded-full">
                    Order now
                    <RightArrow />
                </button>
                <button className="flex gap-2 py-2 text-gray-800 font-extrabold">
                    Learn more
                    <RightArrow />
                </button>
            </div>
            </div>
           
            <div className="relative hidden md:block">
            <Image src={"/pizza.png"} layout={'fill'}
            alt="" objectFit={'contain'}
            />
            </div>
        </section>
    )
}