import { Phone } from 'lucide-react';
import QRCodeImport from 'react-qr-code';

const QRCode = (QRCodeImport as any).default || QRCodeImport;

const Footer = ({ currentUrl }: { currentUrl: string }) => (
  <footer className="bg-white pt-20 pb-10 border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center mb-6">
            <div className="h-8 w-8 bg-claro-red rounded-full flex items-center justify-center mr-2">
              <span className="text-white font-bold italic text-sm">C</span>
            </div>
            <span className="text-xl font-black text-slate-900 tracking-tighter uppercase">Claro</span>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-sm">
            Conectando hogares con la mejor tecnología. Solicita tu plan y te ayudamos con la portabilidad, validación de cobertura y todo el proceso de manera rápida online.
          </p>
          <div className="flex items-center space-x-3 text-slate-700 font-bold">
            <Phone className="w-5 h-5 text-claro-red" />
            <span>WhatsApp: +57 302 490 2653</span>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <h5 className="font-bold text-slate-900 mb-6 text-center">Escanea y comparte</h5>
          <div className="bg-white p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center justify-center">
            <QRCode value={currentUrl} size={140} />
          </div>
        </div>
      </div>
      <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4 text-center md:text-left">
        <p>© 2024 Claro Sales - Asesor Comercial Autorizado. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
