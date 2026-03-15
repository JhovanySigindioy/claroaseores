import { MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

const Header = () => (
  <nav className="fixed top-0 w-full z-50 glass-effect border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex-shrink-0 flex items-center">
          <div className="h-10 w-10 bg-claro-red rounded-full flex items-center justify-center mr-2 shadow-lg shadow-claro-red/30">
            <span className="text-white font-extrabold text-xl italic">C</span>
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-900">CLARO</span>
          <span className="ml-3 text-sm font-semibold text-slate-500 hidden sm:block border-l border-slate-300 pl-3">Asesor: José Catama</span>
        </div>
        <div className="flex space-x-6 items-center font-semibold text-slate-600">
          <a className="hidden md:block hover:text-claro-red transition-colors" href="#planes">Hogar</a>
          <a className="hidden md:block hover:text-claro-red transition-colors" href="#movil">Móvil</a>
          <button
            onClick={() => openWhatsApp("asesoría general")}
            className="bg-claro-red text-white px-6 py-2.5 rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl shadow-claro-red/20 flex items-center"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Ventas Online
          </button>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
