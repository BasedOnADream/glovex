import {Link} from 'react-router-dom';

export default function NotFound() {
    return (
        <main className="pt-36 min-h-screen bg-third p-10">
            <div className="max-w-4xl mx-auto text-center">
                <div className="bg-white rounded-md p-8">
                    <h1 className="text-8xl font-bold text-main mb-4">404</h1>
                    <h2 className="text-4xl mb-8">Strona nie została znaleziona</h2>
                    <Link to="/" className="text-xl px-6 py-3 bg-main text-white rounded-sm">
                        Wróć do strony głównej
                    </Link>
                </div>
            </div>
        </main>
    );
}