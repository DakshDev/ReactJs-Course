export default function Nav(){
    return (
        <menu className="bg-black px-8 py-4 flex justify-between items-center">
           <h1>LOGO</h1>
           <nav className="flex justify-center gap-4">
            <span>Home</span>
            <span>About</span>
            <span>Service</span>
            <span>Contact</span>
           </nav>
        </menu>
    )
}