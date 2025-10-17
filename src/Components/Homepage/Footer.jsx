import { LuSendHorizontal } from "react-icons/lu";

export default function Footer() {
    return (
        <div className="bg-emerald-900">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 justify-items-center p-10 text-gray-200">
                {/* Brand Info */}
                <div className="text-center lg:text-left">
                    <h1 className="font-bold text-3xl">Flone.</h1>
                    <p className="text-sm text-gray-400 mt-2">
                        Elevating men’s essentials with a perfect balance of style and confidence.
                    </p>
                </div>

                {/* Shop Links */}
                <div className="text-center lg:text-left">
                    <h3 className="font-bold text-lg mb-2">SHOP</h3>
                    <ul className="text-sm text-gray-400 space-y-1 cursor-pointer">
                        <li><a href="#newarrivals">New Arrivals</a></li>
                        <li><a href="">All Products</a></li>
                        <li><a href="">Sale Items</a></li>
                        <li><a href="">About</a></li>
                    </ul>
                </div>

                {/* Support Links */}
                <div className="text-center lg:text-left">
                    <h3 className="font-bold text-lg mb-2">SUPPORT</h3>
                    <ul className="text-sm text-gray-400 space-y-1 cursor-pointer">
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Returns</a></li>
                        <li><a href="">Offers</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="w-full max-w-sm">
                    <h3 className="font-bold text-lg">Newsletter</h3>
                    <p className="text-sm text-gray-400 pb-2 pt-2">
                        Be the first to know about the latest updates, new arrivals, sales & promos!
                    </p>

                    {/* Input + Send button container */}
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="flex items-center bg-white rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-emerald-500 transition"
                    >
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-grow px-3 py-2 text-gray-800 outline-none text-sm"
                        />
                        <button
                            type="submit"
                            className="bg-emerald-700 hover:bg-emerald-800 text-white p-2 flex items-center justify-center"
                        >
                            <LuSendHorizontal size={20} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
