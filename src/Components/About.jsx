import React from 'react'

export default function About() {
    return (
        <div>
            <div className='my-5'>Nice to meet you!</div>
            <h2 className='text-3xl lg:text-5xl  uppercase mt-4 mb-10'>Welcome to...</h2>
            <div className="my-5 max-w-2xl text-brdr-color leading-relaxed">
                <div className="grid grid-cols-2 gap-5">
                    {/* Row 1 */}
                    <div className="flex items-center gap-2">
                        <i className="fa-brands fa-whatsapp"></i>
                        <span>+201150948602</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <i className="fa-regular fa-user"></i>
                        <span>30 yrs</span>
                    </div>

                    {/* Row 2 */}
                    <div className="flex items-center gap-2">
                        <i className="fa-solid fa-envelope"></i>
                        <span>Contact</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <i className="fa-solid fa-location-pin"></i>
                        <span>Cairo, Egypt</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
