import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import db from "../tempDB.json";

export default function Shops() {
    const category = useParams().type;
    
const getShops = () => {
    switch(category) {
        case 'restauracje':
            return db.sklepy.restauracje; 
        case 'alkohole':
            return db.sklepy.alkohole; 
        case 'spozywcze':
            return db.sklepy.spozywcze;   
        case 'apteki':
            return db.sklepy.apteki;      
        default:
            return [];
    }
};

    const getCategoryName = () => {
        switch(category) {
            case 'restauracje':
                return 'Restauracje';
            case 'alkohole':
                return 'Sklepy Alkoholowe';
            case 'spozywcze':
                return 'Artykuły Spożywcze';
            case 'apteki':
                return 'Apteki';
            default:
                return '';
        }
    };

    return (
        <main className="pt-36 min-h-screen bg-third p-10">
            <h1 className="text-4xl text-white text-center mb-10">{getCategoryName()}</h1>
            <div className="grid grid-cols-3 gap-5">
                {getShops().map((shop, index) => (
                    <div key={index} className="bg-white rounded-md p-4 flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <img src={shop.logo} alt={shop.nazwa} className="h-32 w-32 object-contain"/>
                            <div>
                                <h2 className="text-2xl text-main font-bold">{shop.nazwa}</h2>
                                <p>Godziny otwarcia: {shop.godziny_otwarcia}</p>
                            </div>
                        </div>
                        
                        <div className="border-t border-gray-200 pt-4">
                            <h3 className="text-xl mb-2">Menu:</h3>
                            <div className="flex flex-col gap-2">
                                {shop.produkty.map((produkt, idx) => (
                                    <div key={idx} className="flex justify-between items-center">
                                        <span>{produkt.nazwa}</span>
                                        <span className="font-bold">{produkt.cena} zł</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Link to={"./"+index} className="text-xl px-4 py-2 text-white bg-main rounded-sm w-full mt-auto">
                            Zamów
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    );
}