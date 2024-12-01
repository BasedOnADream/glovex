import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from './CartContext';
import db from "./tempDB.json";

export default function Nav()
{
    const {register, handleSubmit} = useForm();
    const [loginUI, setLoginUI] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const onSubmit = (data) => {
        const user = db.uzytkownicy.find(
            u => u.email === data.email && u.haslo === data.password
        );
    
        if (user) {
            const sessionData = {
                nazwa: user.nazwa,
                email: user.email,
                miasto: user.miasto,
                adres: user.adres
            };
            
            localStorage.setItem('userSession', JSON.stringify(sessionData));
            setCurrentUser(sessionData);
            setIsLoggedIn(true);
            setLoginUI(false);
            document.body.style.overflowY = "";
        } else {
            alert("Nieprawidłowy email lub hasło");
        }
    };

    const { cartItems, updateCart } = useContext(CartContext);

    const removeFromCart = (productId) => {
        const updatedCart = cartItems.filter(item => item.id !== productId);
        updateCart(updatedCart);
    };

    useEffect(() => {
        const session = localStorage.getItem('userSession');
        if (session) {
            setIsLoggedIn(true);
            setCurrentUser(JSON.parse(session));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('userSession');
        setIsLoggedIn(false);
        setCurrentUser(null);
    };

    const getTotalPrice = () => {
        return cartItems.reduce((sum, item) => 
            sum + (parseFloat(item.cena) * item.quantity), 0
        ).toFixed(2);
    };

    return(
        <>
            <div className="z-40 w-full h-full fixed bg-black bg-opacity-70 top-0 left-0" style={{"visibility": loginUI ? "visible" : "hidden"}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="border-1 border-slate-400 p-5 rounded-sm absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-96 flex bg-white flex-col items-center gap-5">
                        <button className="absolute top-1 right-1 text-2xl" onClick={() =>{setLoginUI(false); document.body.style.overflowY = ""}}>✕</button>
                        <img src={process.env.PUBLIC_URL + "/images/logo.png"} className=" w-48" alt="Glovex"/>
                        <div className="w-full">
                            <label htmlFor="email" className="w-full">Email</label>
                            <input id="email" className="w-full border-1 border-slate-400 rounded-sm focus:outline-none focus:border-gray-500 text-xl p-1" {...register("email", {required: true, maxLenght: 99, pattern:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/})}/>
                        </div>
                        <div className="w-full">
                            <label htmlFor="pas" className="w-full">Hasło</label>
                            <input id="pas" type="password" className="w-full border-1 border-slate-400 rounded-sm focus:outline-none focus:border-slate-500 text-xl p-1" {...register("password", {required: true, maxLenght: 20, minLenght: 8})}/>
                        </div>
                        <button type="submit" className="font-bold rounded-sm text-xl py-2 w-full bg-main text-white">Zaloguj się</button>
                        <div className="flex items-center w-full">
                            <div className="border-1 h-0.5 border-slate-400 w-1/2"/>
                            <p className="text-slate-500 mx-2 font-bold">Lub</p>
                            <div className="border-1 h-0.5 border-slate-400 w-1/2"/>
                        </div>
                        <a className="text-main text-xl font-bold cursor-pointer">Zajerestruj się</a>
                    </div>
                    </form>
            </div>
            <nav className="z-10 flex flex-row  h-28 justify-between px-5 items-center border-main bg-white fixed w-full">
                <Link to="/"><img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="Glovex" className="h-20"/></Link>
                <div className="text-2xl flex gap-20">
                    <Link to="/sklepy/restauracje" className="border-b-2 border-slate-400 hover:text-main hover:border-main animate">Restaraucje</Link>
                    <Link to="/sklepy/alkohole" className="border-b-2 border-slate-400 hover:text-main hover:border-main animate">Sklepy Alkoholowe</Link>
                    <Link to="/sklepy/spozywcze" className="border-b-2 border-slate-400 hover:text-main hover:border-main animate">Artykuły Spożywcze </Link>
                    <Link to="/sklepy/apteki" className="border-b-2 border-slate-400 hover:text-main hover:border-main animate">Apteki</Link>
                </div>
                <div className="flex justify-center items-center">
                    <button onClick={() =>{document.querySelector("#koszyk").style.visibility = document.querySelector("#koszyk").style.visibility  == "" ? "hidden" : "" }} className="mr-5 border-2 border-slate-400 p-3 rounded-full"><img src="https://cdn-icons-png.flaticon.com/32/1413/1413908.png" alt="koszyk"/></button>
                    {isLoggedIn ? (
                        <div className="flex items-center gap-4">
                            <Link to="/konto" className="text-xl hover:text-main">
                                {currentUser?.nazwa}
                            </Link>
                            <button onClick={handleLogout} 
                                    className="text-2xl border-2 px-4 border-slate-400 p-2 hover:bg-main hover:border-main hover:text-white cursor-pointer animate">
                                Wyloguj się
                            </button>
                        </div>
                    ) : (
                        <button className="text-2xl border-2 px-4 border-slate-400 p-2 hover:bg-main hover:border-main hover:text-white cursor-pointer animate" onClick={() => {
                            setLoginUI(true);
                            document.body.style.overflowY = "hidden";
                        }} >
                            Logowanie
                        </button>
                    )
                }
                </div>
            </nav>
            <div id="koszyk" className="fixed right-16 top-28 rounded-sm p-4 w-96 bg-white z-30 shadow-lg" style={{visibility:"hidden"}}>
            <h3 className="text-2xl text-center border-b-2 border-slate-400 pb-2 mb-4">Koszyk</h3>
            
            {cartItems.length === 0 ? (
                <p className="text-center text-gray-500 my-4">Koszyk jest pusty</p>
            ) : (
                <>
                    <div className="max-h-96 overflow-y-auto">
                        {cartItems.map((item, index) => (
                            <div key={index} className="flex items-center justify-between py-2 border-b border-slate-200">
                                <div className="flex items-center gap-2">
                                    <img 
                                        src={item.zdjecie} 
                                        alt={item.nazwa} 
                                        className="w-16 h-16 object-cover rounded-sm"
                                    />
                                    <div>
                                        <p className="font-semibold">{item.nazwa}</p>
                                        <p className="text-sm text-gray-600">
                                            {item.quantity} x {item.cena} zł
                                        </p>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-500 hover:text-red-700 px-2"
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>
                    
                    <div className="border-t-2 border-slate-400 mt-4 pt-4">
                        <div className="flex justify-between items-center mb-4">
                            <span className="font-bold text-xl">Suma:</span>
                            <span className="font-bold text-xl text-main">
                                {getTotalPrice()} zł
                            </span>
                        </div>
                        <button className="text-xl px-4 py-2 text-white bg-main hover:bg-opacity-90 rounded-sm w-full">
                            Zamów
                        </button>
                    </div>
                </>
            )}
        </div>
        </>
    );
}