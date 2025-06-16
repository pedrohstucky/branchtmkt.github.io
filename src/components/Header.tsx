import React, {useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import IMAGES from '../../public/images/Images';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent' }`}>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16 lg:h-20'>
                    <div className='flex items-center w-32 sm:w-40 lg:w-48'>
                        <img 
                            src={isScrolled ? IMAGES.logo2 : IMAGES.logo1} 
                            alt="Brancht Logo" 
                            className="w-full h-auto object-contain transition-all duration-300"
                        />
                    </div>
                    <nav className='hidden md:flex items-center space-x-6 lg:space-x-8'>
                        {['sobre', 'servicos', 'depoimentos', 'contato'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className={`capitalize font-semibold text-sm lg:text-base transition-all duration-300 hover:text-brancht-green ${
                                    isScrolled ? 'text-brancht-dark' : 'text-white'
                                }`}>
                                    {item === 'servicos' ? 'Serviços': item}
                            </button>
                        ))}
                    </nav>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                        className={`md:hidden p-2 rounded-md transition-colors duration-300 ${
                            isScrolled ? 'text-brancht-dark' : 'text-white'
                        }`}>
                            {isMobileMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
                    </button>
                </div>
                {isMobileMenuOpen && (
                    <div className='md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50'>
                        <nav className='px-4 py-4 space-y-3'>
                            {['sobre', 'servicos', 'depoimentos', 'contato'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className='block w-full text-left capitalize text-brancht-dark font-semibold py-2 hover:text-brancht-green transition-colors duration-300'>
                                        {item === 'servicos' ? 'Serviços': item}
                                    </button>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header
