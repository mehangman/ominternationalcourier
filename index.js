import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Menu, Laptop, Monitor } from 'lucide-react'; // Import icons

const Header = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768); // Use 768px as the breakpoint (md breakpoint in Tailwind)
        };

        handleResize(); // Check on initial load
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {/* Default Header (Visible on PC/Laptop) */}
            {isDesktop && (
                <header className="fixed top-0 left-0 w-full bg-blue-600/90 backdrop-blur-md text-white py-4 px-6 z-50 shadow-lg flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Laptop className="h-6 w-6" />
                        <h1 className="text-xl font-bold">PC/Laptop Header</h1>
                    </div>
                    <nav className="flex gap-6">
                        <a href="#" className="hover:text-gray-200 transition-colors">Home</a>
                        <a href="#" className="hover:text-gray-200 transition-colors">Products</a>
                        <a href="#" className="hover:text-gray-200 transition-colors">Services</a>
                        <a href="#" className="hover:text-gray-200 transition-colors">About Us</a>
                        <a href="#" className="hover:text-gray-200 transition-colors">Contact</a>
                    </nav>
                    <div>
                        <Button variant="outline" className="text-white hover:bg-white/20 hover:text-white border-white/30">
                            Get Started
                        </Button>
                    </div>
                </header>
            )}

            {/* Mobile Menu (Sheet) */}
            {!isDesktop && (
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="fixed top-4 left-4 z-50 bg-blue-600/90 backdrop-blur-md rounded-full shadow-md text-white"
                        >
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="bg-gray-900 text-white w-full sm:w-[300px]">
                        <SheetHeader>
                            <SheetTitle className="flex items-center gap-2 mt-4">
                                <Monitor className="h-5 w-5" />
                                Menu
                            </SheetTitle>
                            <SheetDescription>
                                <div className="py-6">
                                    <nav className="flex flex-col gap-4">
                                        <a href="#" className="hover:text-gray-300 transition-colors text-lg">Home</a>
                                        <a href="#" className="hover:text-gray-300 transition-colors text-lg">Products</a>
                                        <a href="#" className="hover:text-gray-300 transition-colors text-lg">Services</a>
                                        <a href="#" className="hover:text-gray-300 transition-colors text-lg">About Us</a>
                                        <a href="#" className="hover:text-gray-300 transition-colors text-lg">Contact</a>
                                    </nav>
                                    <div className="mt-8">
                                        <Button
                                            variant="outline"
                                            className="w-full text-white hover:bg-white/20 hover:text-white border-white/30"
                                        >
                                            Get Started
                                        </Button>
                                    </div>
                                </div>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            )}
             {/* Add a div with min-height to push main content below the header */}
            {isDesktop && <div style={{ minHeight: '64px' }} />}
        </>
    );
};

export default Header;
