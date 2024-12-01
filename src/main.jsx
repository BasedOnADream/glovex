import db from "./tempDB.json"
import {Link} from "react-router-dom"

export default function Main()
{
    return (
        <>
        <main className="pt-28">
            <section>
                <div className="h-800 w-full">
                    <div className="h-800 w-full bg-cover" style={{backgroundImage: "url('https://www.kindafrugal.com/wp-content/uploads/2024/04/Family-eating-Pizza-in-restaurant.jpg')"}}>
                        <div className="flex flex-col justify-end gap-5 bg-black bg-opacity-70 p-20 rounded-t-md relative top-full -translate-y-full">
                                <div><h2 className="text-3xl text-main">Twoje ulubione jedzenie pod ręką</h2></div>
                                <div><p className="text-2xl text-white ">Glovex pozwala zamawiać jedzenie z wielu restauracji i sklepów w mieście, co daje możliwość wyboru różnorodnych dań dla całej rodziny. Można szybko i łatwo zamówić ulubione potrawy bez konieczności opuszczania domu.</p></div>
                                <div><Link to="/sklepy/restauracje" className="text-2xl px-4 p-2  text-white bg-main cursor-pointer animate rounded-sm">Zobacz Restaraucje</Link></div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="h-800 w-full bg-third p-20">
                    <h2 className="text-white text-4xl text-center mb-10">Najpopularniejsze sklepy</h2>
                    <div className="flex flex-row gap-5 text-white">
                        <div className="w-1/4 flex flex-col gap-5">
                            <h3 className="text-center text-2xl">Alkoholowe</h3>
                            <div className="bg-white rounded-md w-full text-black flex p-1">
                                <img className="h-32 w-32 mr-2" src={db.sklepy.alkohole[0].logo} alt="logo" />
                                <div className="flex flex-col w-full">
                                    <h4 className="text-2xl text-main font-bold">{db.sklepy.alkohole[0].nazwa}</h4>
                                    <p>Godziny otwarcia: {db.sklepy.alkohole[0].godziny_otwarcia}</p>
                                    <Link to={"/sklepy/alkohole/0"} className="text-xl px-2 p-2 text-center text-white bg-main cursor-pointer animate rounded-sm mt-4 w-4/5">Zamów</Link>
                                </div>
                            </div>
                            <div className="bg-white rounded-md w-full text-black flex p-1">
                                <img className="h-32 w-32 mr-2" src={db.sklepy.alkohole[1].logo} alt="logo" />
                                <div className="flex flex-col w-full">
                                    <h4 className="text-2xl text-main font-bold">{db.sklepy.alkohole[1].nazwa}</h4>
                                    <p>Godziny otwarcia: {db.sklepy.alkohole[1].godziny_otwarcia}</p>
                                    <Link to={"/sklepy/alkohole/1"}  className="text-xl px-2 p-2 text-center text-white bg-main cursor-pointer animate rounded-sm mt-4 w-4/5">Zamów</Link>
                                </div>
                            </div>
                            <div className="bg-white rounded-md w-full text-black flex p-1">
                                <img className="h-32 w-32 mr-2" src={db.sklepy.alkohole[2].logo} alt="logo" />
                                <div className="flex flex-col w-full">
                                    <h4 className="text-2xl text-main font-bold">{db.sklepy.alkohole[2].nazwa}</h4>
                                    <p>Godziny otwarcia: {db.sklepy.alkohole[2].godziny_otwarcia}</p>
                                    <Link to={"/sklepy/alkohole/2"}  className="text-xl px-2 p-2 text-center text-white bg-main cursor-pointer animate rounded-sm mt-4 w-4/5">Zamów</Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/4 flex flex-col gap-5">
                            <h3 className="text-center text-2xl">Spożywcze</h3>
                            <div className="bg-white rounded-md w-full text-black flex p-1">
                                <img className="h-32 w-32 mr-2" src={db.sklepy.spozywcze[2].logo} alt="logo" />
                                <div className="flex flex-col w-full">
                                    <h4 className="text-2xl text-main font-bold">{db.sklepy.spozywcze[2].nazwa}</h4>
                                    <p>Godziny otwarcia: {db.sklepy.spozywcze[2].godziny_otwarcia}</p>
                                    <Link to={"/sklepy/spozywcze/0"}  className="text-xl px-2 p-2 text-center text-white bg-main cursor-pointer animate rounded-sm mt-4 w-4/5">Zamów</Link>
                                </div>
                            </div>
                            <div className="bg-white rounded-md w-full text-black flex p-1">
                                <img className="h-32 w-32 mr-2" src={db.sklepy.spozywcze[1].logo} alt="logo" />
                                <div className="flex flex-col w-full">
                                    <h4 className="text-2xl text-main font-bold">{db.sklepy.spozywcze[1].nazwa}</h4>
                                    <p>Godziny otwarcia: {db.sklepy.spozywcze[1].godziny_otwarcia}</p>
                                    <Link to={"/sklepy/spozywcze/1"}  className="text-xl px-2 p-2 text-center text-white bg-main cursor-pointer animate rounded-sm mt-4 w-4/5">Zamów</Link>
                                </div>
                            </div>
                            <div className="bg-white rounded-md w-full text-black flex p-1">
                                <img className="h-32 w-32 mr-2" src={db.sklepy.spozywcze[0].logo} alt="logo" />
                                <div className="flex flex-col w-full">
                                    <h4 className="text-2xl text-main font-bold">{db.sklepy.spozywcze[0].nazwa}</h4>
                                    <p>Godziny otwarcia: {db.sklepy.spozywcze[0].godziny_otwarcia}</p>
                                    <Link to={"/sklepy/spozywcze/2"}  className="text-xl px-2 p-2 text-center text-white bg-main cursor-pointer animate rounded-sm mt-4 w-4/5">Zamów</Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/4 flex flex-col gap-5">
                            <h3 className="text-center text-2xl">Apteki</h3>
                            <div className="bg-white rounded-md w-full text-black flex p-1">
                                <img className="h-32 w-32 mr-2" src={db.sklepy.apteki[1].logo} alt="logo" />
                                <div className="flex flex-col w-full">
                                    <h4 className="text-2xl text-main font-bold">{db.sklepy.apteki[1].nazwa}</h4>
                                    <p>Godziny otwarcia: {db.sklepy.apteki[1].godziny_otwarcia}</p>
                                    <Link to={"/sklepy/apteki/0"}  className="text-xl px-2 p-2 text-center text-white bg-main cursor-pointer animate rounded-sm mt-4 w-4/5">Zamów</Link>
                                </div>
                            </div>
                            <div className="bg-white rounded-md w-full text-black flex p-1">
                                <img className="h-32 w-32 mr-2" src={db.sklepy.apteki[2].logo} alt="logo" />
                                <div className="flex flex-col w-full">
                                    <h4 className="text-2xl text-main font-bold">{db.sklepy.apteki[2].nazwa}</h4>
                                    <p>Godziny otwarcia: {db.sklepy.apteki[2].godziny_otwarcia}</p>
                                    <Link to={"/sklepy/apteki/1"} className="text-xl px-2 p-2 text-center text-white bg-main cursor-pointer animate rounded-sm mt-4 w-4/5">Zamów</Link>
                                </div>
                            </div>
                            <div className="bg-white rounded-md w-full text-black flex p-1">
                                <img className="h-32 w-32 mr-2" src={db.sklepy.apteki[0].logo} alt="logo" />
                                <div className="flex flex-col w-full">
                                    <h4 className="text-2xl text-main font-bold">{db.sklepy.apteki[0].nazwa}</h4>
                                    <p>Godziny otwarcia: {db.sklepy.apteki[0].godziny_otwarcia}</p>
                                    <Link to={"/sklepy/apteki/2"} className="text-xl px-2 p-2 text-center text-white bg-main cursor-pointer animate rounded-sm mt-4 w-4/5">Zamów</Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/4 flex flex-col gap-5">
                            <h3 className="text-center text-2xl">Restaraucje</h3>
                            <div className="bg-white rounded-md w-full text-black flex p-1">
                                <img className="h-32 w-32 mr-2" src={db.sklepy.restauracje[0].logo} alt="logo" />
                                <div className="flex flex-col w-full">
                                    <h4 className="text-2xl text-main font-bold">{db.sklepy.restauracje[0].nazwa}</h4>
                                    <p>Godziny otwarcia: {db.sklepy.restauracje[0].godziny_otwarcia}</p>
                                    <Link to={"/sklepy/restauracje/0"} className="text-xl px-2 p-2 text-center text-white bg-main cursor-pointer animate rounded-sm mt-4 w-4/5">Zamów</Link>
                                </div>
                            </div>
                            <div className="bg-white rounded-md w-full text-black flex p-1">
                                <img className="h-32 w-32 mr-2" src={db.sklepy.restauracje[1].logo} alt="logo" />
                                <div className="flex flex-col w-full">
                                    <h4 className="text-2xl text-main font-bold">{db.sklepy.restauracje[1].nazwa}</h4>
                                    <p>Godziny otwarcia: {db.sklepy.restauracje[1].godziny_otwarcia}</p>
                                    <Link to={"/sklepy/restauracje/1"} className="text-xl px-2 p-2 text-center text-white bg-main cursor-pointer animate rounded-sm mt-4 w-4/5">Zamów</Link>
                                </div>
                            </div>
                            <div className="bg-white rounded-md w-full text-black flex p-1">
                                <img className="h-32 w-32 mr-2" src={db.sklepy.restauracje[2].logo} alt="logo" />
                                <div className="flex flex-col w-full">
                                    <h4 className="text-2xl text-main font-bold">{db.sklepy.restauracje[2].nazwa}</h4>
                                    <p>Godziny otwarcia: {db.sklepy.restauracje[2].godziny_otwarcia}</p>
                                    <Link to={"/sklepy/restauracje/2"} className="text-xl px-2 p-2 text-center text-white bg-main cursor-pointer animate rounded-sm mt-4 w-4/5">Zamów</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}