import { useState } from "react";
import { NavLink } from "react-router";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-gray-950 z-40 px-6 md:px-12 lg:px-24 py-4 flex justify-between items-center shadow-md">
            <NavLink to="#home" className="text-2xl font-bold tracking-tighter">
                Bjorn<span className="text-purple-500"> Heuten</span>
            </NavLink>

            <nav className="hidden md:flex space-x-8">
                {["home", "projects", "skills", "contact"].map((item) => (
                    <NavLink
                        key={item}
                        to={`#${item}`}
                        className="capitalize text-xl tracking-wider hover:text-purple-400 transition-colors"
                    >
                        {item}
                    </NavLink>
                ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <div className="h-6 w-6 bg-gray-800"></div>
                <span className="sr-only">Toggle menu</span>
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6">
                    {/* make an close button */}
                    <button
                        className="absolute top-4 right-4"
                        onClick={() => setMenuOpen(false)}
                    >
                        <div className="h-6 w-6 bg-gray-800"></div>
                        <span className="sr-only">Close menu</span>
                    </button>
                    {['home', 'projects', 'skills', 'contact'].map((item) => (
                        <NavLink
                            key={item}
                            to={`#${item}`}
                            className="capitalize text-2xl text-white hover:text-purple-400 transition-colors"
                            onClick={() => setMenuOpen(false)}
                        >
                            {item}
                        </NavLink>
                    ))}
                </div>
            )}
        </header>
    );
}