import react, { useState } from "react"
import dom from "react-dom/client"
import {  createBrowserRouter, RouterProvider } from "react-router";
import db from "./tempDB.json"
import Footer from "./footer.jsx"
import Nav from "./nav.jsx"
import Main from "./main.jsx"
import Shops from "./subpages/shops.jsx"
import Menu from "./subpages/menu.jsx"
import { CartProvider } from './CartContext';
import "./index.css"
import Account from "./subpages/account.jsx";
import NotFound from "./notFound.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <CartProvider><Nav/><Main/><Footer/></CartProvider>
    },
    {
        path: "/sklepy/:type",
        element: <CartProvider><Nav/><Shops/><Footer/></CartProvider>
    },
    {
        path: "/sklepy/:type/:id",
        element: <CartProvider><Nav/><Menu/><Footer/></CartProvider>
    },
    {
        path: "/konto",
        element: <CartProvider><Nav/><Account/><Footer/></CartProvider>
    },
    {
    path: "*",
    element: <CartProvider><Nav/><NotFound/><Footer/></CartProvider>
    }   
]);

const root = dom.createRoot(document.getElementById("root"));
root.render(<react.StrictMode>< RouterProvider router={router}/></react.StrictMode>);