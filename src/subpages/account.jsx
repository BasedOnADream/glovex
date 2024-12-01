import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Account() {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const session = localStorage.getItem('userSession');
        if (!session) {
            navigate('/');
            return;
        }
        setUserData(JSON.parse(session));
    }, [navigate]);

    if (!userData) {
        return null;
    }

    return (
        <main className="pt-36 min-h-screen bg-third p-10">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-md p-8">
                    <h1 className="text-4xl font-bold text-main mb-8">Twoje Konto</h1>
                    
                    <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Dane osobowe</h2>
                                <div className="space-y-3">
                                    <div>
                                        <label className="text-gray-600">Imię i nazwisko</label>
                                        <p className="text-xl">{userData.nazwa}</p>
                                    </div>
                                    <div>
                                        <label className="text-gray-600">Email</label>
                                        <p className="text-xl">{userData.email}</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Adres dostawy</h2>
                                <div className="space-y-3">
                                    <div>
                                        <label className="text-gray-600">Miasto</label>
                                        <p className="text-xl">{userData.miasto}</p>
                                    </div>
                                    <div>
                                        <label className="text-gray-600">Adres</label>
                                        <p className="text-xl">{userData.adres}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Historia zamówień</h2>
                            <div className="bg-gray-50 p-4 rounded-md">
                                <p className="text-gray-500 text-center">Brak historii zamówień</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-200">
                        <h2 className="text-2xl font-semibold mb-4">Ustawienia konta</h2>
                        <div className="flex gap-4">
                            <button className="px-4 py-2 text-white bg-main rounded-sm">
                                Zmień hasło
                            </button>
                            <button className="px-4 py-2 text-white bg-third rounded-sm">
                                Usuń konto
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}