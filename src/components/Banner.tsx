export default function Banner() {
    return(
        <div className="container mt-32">
            <div className="grid lg:grid-cols-2 gap-8 pr-[15px]">

                <div className="h-[200px] md:h-[260px] bg-[url(../../public/banner1.jpg)] bg-cover bg-center rounded-xl p-8 md:p-16"></div>
                <div className="h-[200px] md:h-[260px] bg-[url(../../public/banner2.jpg)] bg-cover bg-center rounded-xl p-8 md:p-16"></div>
            </div>
        </div>
    )
}