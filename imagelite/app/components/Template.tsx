import React from 'react';

interface TemplateProps {
    children: React.ReactNode;
}

export const Template = ({ children }: TemplateProps) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

const Header: React.FC = () => {
    return (
        <header className="bg-purple-900 text-white py-3">
            <div className="container mx-auto px-4 flex justify-between items-center">

                <div className="flex items-center gap-3">

                    <img
                        src="/bibble.jpg"
                        alt="Logo ImageLite"
                        className="w-12 h-12 rounded-full object-cover border-2 border-white"
                    />

                    <h1 className="text-lg font-semibold">
                        ImageLite
                    </h1>

                </div>

            </div>
        </header>
    );
}

const Footer: React.FC = () => {
    return (
        <footer className="bg-purple-950 text-white py-3">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <h1>Developed by Kellen Aguiar</h1>
            </div>
        </footer>
    );
}