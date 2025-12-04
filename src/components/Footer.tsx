import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#041524] to-[#020d16] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-4">
              <img
                src="/graphic-removebg-preview.png"
                alt="Kashe Energy Logo"
                className="h-10 w-auto mb-4"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Powering progress across Africa and beyond with premium lubricants and sustainable energy solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-[#00B3AE]" />
                <span>info@kasheenergy.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-[#00B3AE]" />
                <span>+971 4 XXX XXXX</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#00B3AE]" />
                <span>Dubai, UAE</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#00B3AE] transition-colors text-sm">Automotive Lubricants</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00B3AE] transition-colors text-sm">Industrial Lubricants</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00B3AE] transition-colors text-sm">Car Care Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00B3AE] transition-colors text-sm">Solar Systems</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00B3AE] transition-colors text-sm">EV Charging</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-[#00B3AE] transition-colors text-sm">About Us</a></li>
              <li><a href="#presence" className="text-gray-400 hover:text-[#00B3AE] transition-colors text-sm">Global Presence</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00B3AE] transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00B3AE] transition-colors text-sm">Sustainability</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00B3AE] transition-colors text-sm">News & Media</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#contact" className="text-gray-400 hover:text-[#00B3AE] transition-colors text-sm">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00B3AE] transition-colors text-sm">Find a Distributor</a></li>
              <li><a href="#resources" className="text-gray-400 hover:text-[#00B3AE] transition-colors text-sm">Technical Resources</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00B3AE] transition-colors text-sm">Product Catalog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00B3AE] transition-colors text-sm">FAQs</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Kashe Energy. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-[#00B3AE] transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#00B3AE] transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-[#00B3AE] transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
