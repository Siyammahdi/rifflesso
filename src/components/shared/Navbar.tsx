// components/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className=" px-6 py-4 border-b border-neutral-200">
            <div className='max-w-6xl mx-auto flex items-center justify-between'>
                {/* Logo Section */}
                <div className="text-4xl font-serif">Riflesso</div>

                {/* Menu Section */}
                <div className="flex space-x-10 text-lg font-normal text-neutral-600">
                    <a href="#" className="hover:text-black transition-colors">OVERVIEW</a>
                    <a href="#" className="hover:text-black transition-colors">STYLE GUIDE</a>
                    <a href="#" className="hover:text-black transition-colors">BUY RIFLESSO</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
