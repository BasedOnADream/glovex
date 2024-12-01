import { useParams } from "react-router-dom";
import { useState } from "react";
import db from "../tempDB.json";
import { useContext } from 'react';
import { CartContext } from '../CartContext';


export default function Menu() {
    const category = useParams().type;
    const shopName = useParams().id;
    console.log(category,shopName);
    const [searchTerm, setSearchTerm] = useState("");
    const { cartItems, updateCart } = useContext(CartContext);


    const getShop = () => {
        return db.sklepy[category][shopName]
    };

    const filteredProducts = () => {
        const shop = getShop();
        if (!shop) return [];
        
        return shop.produkty.filter(product => 
            product.nazwa.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    const addToCart = (product) => {
        const cartItem = {
            id: `${category}-${product.nazwa}`,
            nazwa: product.nazwa,
            cena: product.cena,
            zdjecie: product.zdjecie,
            quantity: 1,
            sklep: shopName,
            kategoria: category
        };

        const existingItemIndex = cartItems.findIndex(item => item.id === cartItem.id);
        
        let newCart;
        if (existingItemIndex !== -1) {
            newCart = [...cartItems];
            newCart[existingItemIndex].quantity += 1;
        } else {
            newCart = [...cartItems, cartItem];
        }
        
        updateCart(newCart);
    };

    return (
        <main className="pt-36 min-h-screen bg-third p-10">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                    <img src={getShop()?.logo} alt={getShop()?.nazwa} className="h-32 w-32 object-contain bg-white p-2 rounded-md"/>
                    <div className="text-white">
                        <h1 className="text-4xl font-bold">{getShop()?.nazwa}</h1>
                        <p className="text-xl">Godziny otwarcia: {getShop()?.godziny_otwarcia}</p>
                    </div>
                </div>

                <div className="bg-white rounded-md p-4 mb-8">
                    <input 
                        type="text"
                        placeholder="Wyszukaj produkt..."
                        className="w-full p-3 border-2 border-slate-300 rounded-md text-xl focus:outline-none focus:border-main"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="grid grid-cols-4 gap-6">
                    {filteredProducts().map((product, index) => (
                        <div key={index} className="bg-white rounded-md overflow-hidden">
                            <img 
                                src={product.zdjecie} 
                                alt={product.nazwa} 
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">{product.nazwa}</h3>
                                <div className="flex justify-between items-center">
                                    <span className="text-lg">{product.waga || product.rozmiar || product.ilosc}</span>
                                    <span className="text-xl font-bold text-main">{product.cena} zł</span>
                                </div>
                                <button onClick={() =>addToCart(product)} className="w-full mt-4 bg-main text-white py-2 rounded-sm">
                                    Dodaj do koszyka
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}