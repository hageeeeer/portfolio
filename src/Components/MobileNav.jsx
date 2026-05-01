import React, { useState } from 'react';

export default function MobileNav({ activeSection, onNavClick }) {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'services', label: 'Services' },
        { id: 'portfolio', label: 'Portfolio' },
        { id: 'contact', label: 'Contact' }
    ];

    const handleNavClick = (sectionId) => {
        onNavClick(sectionId);
        setIsOpen(false);
    };

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="xl:hidden fixed top-5 right-5 z-50 bg-main/20 backdrop-blur-sm border border-main/30 rounded-lg p-3 text-main hover:bg-main/30 transition-colors"
                aria-label="Toggle navigation menu"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {isOpen ? (
                        <path
                            d="M18 6L6 18M6 6L18 18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    ) : (
                        <path
                            d="M3 12H21M3 6H21M3 18H21"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    )}
                </svg>
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="xl:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
                    <div className="fixed top-0 right-0 h-full w-80 bg-gray-900/95 backdrop-blur-md border-l border-main/30 p-6">
                        <div className="flex flex-col gap-4 mt-16">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavClick(item.id)}
                                    className={`text-left p-4 rounded-lg transition-all duration-300 ${
                                        activeSection === item.id
                                            ? 'bg-main/20 text-main border border-main/30'
                                            : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                                    }`}
                                >
                                    <span className="text-lg font-medium">{item.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

