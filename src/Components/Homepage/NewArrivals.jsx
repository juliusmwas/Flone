


export default function NewArrivals(){

    const items =[

            {
                id: 1,
                title: 'Cotton Shirts',
                img: '/public/new arrivals images/shirt1.jpeg',
                price: 'KES 1,500',
            },

            {
                id: 1,
                title: 'Jordan Sneakers',
                img: '/public/new arrivals images/Jordan.jpeg',
                price: 'KES 3,500',
            },
            {
                id: 1,
                title: 'Minimalist Denim Jacket',
                img: '/public/new arrivals images/Chaqueta de mezclilla rasgada para hombre, chaqueta negra para rapero para salir, reunirse, ir al trabajo, calle, otoño.jpeg',
                price: 'KES 5,800',
            },
            {
                id: 1,
                title: 'Textured Knit Polo',
                img: '/public/new arrivals images/قميص بولو كاجوال قصير الأكمام بألوان متباينة للرجال.jpeg',
                price: 'KES 3,500',
            },
    ];

    return(
        <section id="newarrivals" className="bg-gray-400">
            <div>
                <div className="grid justify-items-center lg:p-5">
                    <h1 className="text-2xl lg:text-4xl font-bold lg:pb-8  mt-3 lg:m-0 lg:mt-0 lg:p-2">NEW ARRIVALS</h1>
                    <p className="text-xs pb-3 lg:text-xl mt-3 lg:m-0 lg:mt-0 lg:p-2">Discover the latest pieces designed for modern simplicity.</p>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 p-3 ">
                    {items.map((item) => (
                        <div key={item.id} className="relative group h-full bg-gray-300 rounded-2xl p-2 overflow-hidden">
                            <div className="relative aspect-square bg-gray-300  p-1 overflow-hidden">
                                <img
                                src={item.img}    
                                className=" object-cover rounded-2xl "
                            />
                            </div>
                            
                            <div className="w-full p-3 ">
                                <h3 className=" text-sm lg:text-xl font-semibold">{item.title}</h3>
                                <p className=" text-xs lg:text-sm mt-1">{item.price}</p>
                            </div>

                            <div className="grid grid-cols-1 p-3">
                                <button className="bg-emerald-900 text-xs w-full rounded-lg p-2 text-white font-medium cursor-pointer">Add to Cart</button>
                            </div>
                        </div>
                    ))}    
                </div>
                 
                <div className="grid justify-items-center p-2">
                    <p className=" cursor-pointer text-sm font-medium"><a href="#">View More...</a></p>
                </div>

            </div>
        </section>
    );
}