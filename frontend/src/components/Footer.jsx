import { Mail, Phone, Clock, MapPin, Linkedin, X, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B1623] text-gray-300 py-12 px-6 md:px-20">
      <div className="grid md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="AppDost Logo" className="w-12 h-12" />
            <div>
              <h2 className="text-2xl font-semibold text-white">AppDost</h2>
              <p className="text-sm text-blue-400 font-semibold">COMPLETE IT SOLUTION</p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed">
            Delivering innovative IT solutions since 2025. We transform ideas into powerful
            digital experiences with cutting-edge technology and expert craftsmanship.
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition">
              <Linkedin size={18} />
            </a>
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition">
              <X size={18} />
            </a>
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition">
              <Facebook size={18} />
            </a>
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>→ <a href="#" className="hover:text-blue-400">Home</a></li>
            <li>→ <a href="#" className="hover:text-blue-400">Services</a></li>
            <li>→ <a href="#" className="hover:text-blue-400">Careers</a></li>
            <li>→ <a href="#" className="hover:text-blue-400">Blog</a></li>
            <li>→ <a href="#" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>→ Android App Development</li>
            <li>→ Web Development</li>
            <li>→ UI/UX Design</li>
            <li>→ CRM Software</li>
            <li>→ Cloud Solutions</li>
            <li>→ Cybersecurity</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-3"><Mail size={16} /> <span>contact@appdost.in</span></li>
            <li className="flex items-center space-x-3"><Phone size={16} /> <span>+91 11 6929 0750</span></li>
            <li className="flex items-center space-x-3"><Clock size={16} /> <span>Mon - Sat: 9:00 AM - 6:00 PM IST</span></li>
            <li className="flex items-start space-x-3">
              <MapPin size={16} /> 
              <span><strong>3 Offices:</strong> Banka (HQ), Motihari, Patna</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2025 AppDost - Complete IT Solution. All rights reserved.</p>
        <div className="flex space-x-5 mt-3 md:mt-0">
          <a href="#" className="hover:text-blue-400">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400">Terms of Service</a>
          <a href="#" className="hover:text-blue-400">Sitemap</a>
        </div>
        <p className="mt-3 md:mt-0">Built with ❤️ in India</p>
      </div>
    </footer>
  );
}
