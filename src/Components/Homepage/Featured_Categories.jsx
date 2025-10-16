


export default function Featured_Categories(){
    const cards = [
            {
                id: 1,
                title: 'T-SHIRTS',
                img: '/images/tshirt.jpeg',
                desc: 'The Foundation. Style starts here.',
            },
            {
                id: 2,
                title: 'SHIRTS',
                img: '/images/shirt.jpeg',
                desc: 'Crisp, tailored, essential.',
            },
            {
                id: 3,
                title: 'JACKETS',
                img: '/images/jacket.jpeg',
                desc: 'Outerwear built for the elements.',
            },
            {
                id: 4,
                title: 'SHOES',
                img: '/images/shoes.jpeg',
                desc: 'Step up your game with premium footwear.',
            },
            {
                id: 5,
                title: 'ACCESSORIES',
                img: '/images/watch.jpeg',
                desc: 'The finishing touches that define your style.',
            },
            {
                id: 6,
                title: 'JEANS',
                img: '/images/jeans.jpeg',
                desc: 'Find your perfect fit and wash.',
            },
            ];

    return(
        <section id="featured-categories" className=" w-full h-full p-2 overflow-hidden">
            <div>
                <div className="grid justify-items-center  lg:pt-8">
                    <h1 className="text-2xl lg:text-4xl font-bold pb-8  mt-3 lg:m-0 lg:mt-0 lg:p-2 text-emerald-900">Featured Categories</h1>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:p-25">
                    {cards.map((item) => (
                        <div key={item.id} className="relative group h-50 lg:h-100 rounded-2xl overflow-hidden cursor-pointer">
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute bottom-0 w-full p-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-200 transition-all duration-500">
                            <h3 className="text-white text-sm lg:text-xl font-semibold">{item.title}</h3>
                            <p className="text-gray-200 text-xs lg:text-sm mt-1">{item.desc}</p>
                        </div>
                        </div>
                    ))}
                    </div>


            </div>
        </section>
    );
}