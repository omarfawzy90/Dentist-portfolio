import { Phone, Mail, MapPin } from "lucide-react";
import MapComponent from "@/components/MapComponent";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
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
            <div>
              <h1>My Location Map</h1>
              <MapComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
