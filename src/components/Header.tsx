import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#041524] via-[#062336] to-[#041524] backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/graphic-removebg-preview.png"
              alt="Kashe Energy Logo"
              className="h-10 w-auto"
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-gray-200 hover:text-[#00B3AE] transition-colors">Home</a>

            <div className="relative group">
              <button
                className="text-gray-200 hover:text-[#00B3AE] transition-colors flex items-center gap-1"
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                Solutions <ChevronDown className="w-4 h-4" />
              </button>
              {isSolutionsOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-[#062336] border border-white/10 rounded-xl shadow-xl p-4"
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                  onMouseLeave={() => setIsSolutionsOpen(false)}
                >
                  <a href="#lubricants" className="block px-4 py-2 text-gray-200 hover:text-[#00B3AE] hover:bg-white/5 rounded-lg transition-all">Lubricants</a>
                  <a href="#solar" className="block px-4 py-2 text-gray-200 hover:text-[#00B3AE] hover:bg-white/5 rounded-lg transition-all">Solar Solutions</a>
                  <a href="#ev" className="block px-4 py-2 text-gray-200 hover:text-[#00B3AE] hover:bg-white/5 rounded-lg transition-all">EV Charging</a>
                </div>
              )}
            </div>

            <a href="#presence" className="text-gray-200 hover:text-[#00B3AE] transition-colors">Global Presence</a>
            <a href="#about" className="text-gray-200 hover:text-[#00B3AE] transition-colors">About</a>
            <a href="#resources" className="text-gray-200 hover:text-[#00B3AE] transition-colors">Resources</a>
            <a href="#contact" className="text-gray-200 hover:text-[#00B3AE] transition-colors">Contact</a>
          </nav>

          <button className="hidden lg:block px-6 py-2.5 bg-gradient-to-r from-[#00B3AE] to-[#00767A] text-white rounded-full font-medium hover:shadow-lg hover:shadow-[#00B3AE]/50 transition-all">
            Request a Quote
          </button>

          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3">
            <a href="#home" className="block text-gray-200 hover:text-[#00B3AE] transition-colors">Home</a>
            <a href="#solutions" className="block text-gray-200 hover:text-[#00B3AE] transition-colors">Solutions</a>
            <a href="#presence" className="block text-gray-200 hover:text-[#00B3AE] transition-colors">Global Presence</a>
            <a href="#about" className="block text-gray-200 hover:text-[#00B3AE] transition-colors">About</a>
            <a href="#resources" className="block text-gray-200 hover:text-[#00B3AE] transition-colors">Resources</a>
            <a href="#contact" className="block text-gray-200 hover:text-[#00B3AE] transition-colors">Contact</a>
            <button className="w-full px-6 py-2.5 bg-gradient-to-r from-[#00B3AE] to-[#00767A] text-white rounded-full font-medium">
              Request a Quote
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
