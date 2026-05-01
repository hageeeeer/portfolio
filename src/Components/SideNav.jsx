
import React from 'react';

export default function SideNav({ activeSection, onNavClick }) {
    const navItems = [
        { id: 'home', label: 'Home', icon: 'home' },
        { id: 'about', label: 'About', icon: 'user' },
        { id: 'services', label: 'Services', icon: 'briefcase' },
        { id: 'portfolio', label: 'Portfolio', icon: 'folder' },
        { id: 'contact', label: 'Contact', icon: 'mail' }
    ];

    const getIcon = (iconType) => {
        const icons = {
            home: (
                <svg width={15} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="rgb(40, 233, 140)" d="M240 6.1c9.1-8.2 22.9-8.2 32 0l232 208c9.9 8.8 10.7 24 1.8 33.9s-24 10.7-33.9 1.8l-8-7.2 0 205.3c0 35.3-28.7 64-64 64l-288 0c-35.3 0-64-28.7-64-64l0-205.3-8 7.2c-9.9 8.8-25 8-33.9-1.8s-8-25 1.8-33.9L240 6.1zm16 50.1L96 199.7 96 448c0 8.8 7.2 16 16 16l48 0 0-104c0-39.8 32.2-72 72-72l48 0c39.8 0 72 32.2 72 72l0 104 48 0c8.8 0 16-7.2 16-16l0-248.3-160-143.4zM208 464l96 0 0-104c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24l0 104z" />
                </svg>
            ),
            user: (
                <svg width={15} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="rgb(40, 233, 140)" d="M144 128a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zm208 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zM48 480c0-70.7 57.3-128 128-128l96 0c70.7 0 128 57.3 128 128l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8c0-97.2-78.8-176-176-176l-96 0C78.8 304 0 382.8 0 480l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8z" />
                </svg>
            ),
            briefcase: (
                <svg width={15} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path fill="rgb(40, 233, 140)" d="M176 48L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-240-88 0c-39.8 0-72-32.2-72-72l0-88zM316.1 160L224 67.9 224 136c0 13.3 10.7 24 24 24l68.1 0zM0 64C0 28.7 28.7 0 64 0L197.5 0c17 0 33.3 6.7 45.3 18.7L365.3 141.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z" />
                </svg>
            ),
            folder: (
                <svg width={15} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="rgb(40, 233, 140)" d="M0 88C0 74.7 10.7 64 24 64l400 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 112C10.7 112 0 101.3 0 88zM64 256c0-13.3 10.7-24 24-24l400 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L88 280c-13.3 0-24-10.7-24-24zM448 424c0 13.3-10.7 24-24 24L24 448c-13.3 0-24-10.7-24-24s10.7-24 24-24l400 0c13.3 0 24 10.7 24 24z" />
                </svg>
            ),
            mail: (
                <svg width={15} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="rgb(40, 233, 140)" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
            )
        };
        return icons[iconType] || icons.home;
    };

    return (
        <ul className="xl:block hidden border border-brdr-color rounded-4xl p-5 list-unstyled fixed top-50 right-10 mx-auto my-5 z-50">
            {navItems.map((item) => (
                <li 
                    key={item.id}
                    className={`flex items-center gap-3 cursor-pointer my-5 transition-all duration-300 hover:scale-110 ${
                        activeSection === item.id ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                    }`}
                    onClick={() => onNavClick(item.id)}
                    title={item.label}
                >
                    <div className={`transition-colors duration-300 ${
                        activeSection === item.id ? 'text-main' : 'text-gray-400'
                    }`}>
                        {getIcon(item.icon)}
                    </div>
                </li>
            ))}
        </ul>
    );
}
