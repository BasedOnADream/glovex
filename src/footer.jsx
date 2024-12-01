export default function Footer() 
{
    return (
        <footer className="w-full bg-white text-main flex flex-col items-center gap-2 p-2 text-center">
            <p>Wszystkie nazwy osób, marek, firm i innych podmiotów, jak również wszelkie związane z nimi wydarzenia, opisane w niniejszym projekcie, są całkowicie fikcyjne. <br/>Jakiekolwiek podobieństwo do rzeczywistych osób, marek, firm lub innych podmiotów jest przypadkowe i nie ma żadnego związku z rzeczywistością. <br/>Projekt ten został stworzony wyłącznie w celach naukowych i edukacyjnych, bez intencji przedstawienia rzeczywistych osób, marek czy firm.</p>
            <p className="font-bold">© {new Date().getFullYear()} Glovex</p>
        </footer>
    )
}