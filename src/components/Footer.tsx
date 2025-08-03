import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>+20-1002836928</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>info@dromar.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>123 Dental Street, Cairo</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>
            <div className="space-y-2">
              <a
                href="#home"
                className="block hover:text-blue-400 transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#services"
                className="block hover:text-blue-400 transition-colors duration-200"
              >
                Services
              </a>
              <a
                href="#case-studies"
                className="block hover:text-blue-400 transition-colors duration-200"
              >
                Case Studies
              </a>
              <a
                href="#about"
                className="block hover:text-blue-400 transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#contact"
                className="block hover:text-blue-400 transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Dr. Omar</h3>
            <p className="text-sm leading-relaxed">
              Providing exceptional dental care with modern techniques and
              personalized treatment plans for optimal oral health.
            </p>
            <div className="flex space-x-4 pt-4">
              <a
                href="https://www.facebook.com"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/omarfawzyi"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Dr. Omar Dental Practice. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
