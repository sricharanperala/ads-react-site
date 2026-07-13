import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const primaryPhone = '+917013554415';
const whatsappNumber = '919849138850';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 sm:bottom-5 sm:right-5">
      <a
        href={`tel:${primaryPhone}`}
        aria-label="Call Naik Media Ads"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-red-600 text-white shadow-lg shadow-red-600/25 transition duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-red-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-red-200 sm:h-12 sm:w-12"
      >
        <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
      </a>
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Naik Media Ads on WhatsApp"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-[#25D366] text-white shadow-lg shadow-green-600/25 transition duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-[#1ebe5d] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-200 sm:h-12 sm:w-12"
      >
        <FaWhatsapp className="h-6 w-6 sm:h-7 sm:w-7" />
      </a>
    </div>
  );
}
