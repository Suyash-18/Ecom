export default function Hero() {
    return(
        <div className="bg-[#E3EDF6] mt-4" >
            <div className="container grid md:grid-cols-2 py-8">
                <div className="flex items-center">
                    <div className="max-w-[450px] space-y-4">
                        <p className="text-topHeadingSecondary">
                            Starting At <span className="font-bold">$999.00</span>
                        </p>
                        <h2 className="text-topHeadPrimary font-bold text-4xl md:text-5xl">The best note book collection 2025</h2>
                        <h3 className="text-2xl font-['Oregano, cursive']">
                            Exclusive Offer <span className="text-red-600">-10%</span>off this week
                        </h3>
                        <a href="#" className="inline-block bg-white rounded-md px-6 py-3 hover:bg-accent hover:text-white">Shop Now</a>
                    </div>
                </div>
                <div >
                    <img src="../../public/book.png" className="w-[300px] ml-auto" alt="hero img" />
                </div>
            </div>
        </div>
    );
}