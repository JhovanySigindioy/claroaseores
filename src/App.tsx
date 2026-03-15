import { Phone, MessageCircle } from 'lucide-react';
import QRCodeImport from 'react-qr-code';

const QRCode = (QRCodeImport as any).default || QRCodeImport;

const CONTACT_NUMBER = "573024902653";

const openWhatsApp = (planName: string) => {
  const message = `Hola José, estoy interesado en el plan ${planName}. Me gustaría recibir más información para contratarlo.`;
  const url = `https://api.whatsapp.com/send?phone=${CONTACT_NUMBER}&text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};

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

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-grid-pattern">
    <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-claro-red/5 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-slate-200/50 rounded-full blur-3xl"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left hidden md:block">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-claro-red/10 text-claro-red text-sm font-bold mb-6 border border-claro-red/20 uppercase tracking-widest">
            Ofertas Exclusivas
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
            Navega a la velocidad de la <span className="text-claro-red">luz</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Conecta tu hogar con la Fibra Óptica más estable del país. Planes diseñados para streaming, gaming pro y teletrabajo sin interrupciones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#planes" className="px-8 py-4 bg-claro-red text-white font-bold rounded-2xl shadow-2xl shadow-claro-red/40 hover:scale-105 transition-all flex items-center justify-center">
              Ver Planes Fibra
            </a>
            <a href="#movil" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl shadow-xl border border-slate-100 hover:bg-slate-50 transition-all flex items-center justify-center">
              Planes Móviles
            </a>
          </div>
        </div>
        <div className="flex-1 w-full max-w-lg mx-auto lg:max-w-none relative  md:mt-0">
          <div className="relative z-10 animate-float">
            <div className="absolute inset-0 bg-gradient-to-tr from-claro-red to-orange-500 rounded-3xl rotate-3 scale-105 opacity-10"></div>
            <img alt="Claro Lifestyle" className="rounded-3xl shadow-2xl object-cover relative z-10 w-full" src="/img/claro_hogar.jpeg" />

            {/* Mobile buttons overlaid on/below image for mobile only */}
            <div className="md:hidden flex flex-col gap-3 mt-6">
              <a href="#planes" className="w-full py-4 bg-claro-red text-white font-black rounded-2xl shadow-2xl shadow-claro-red/40 hover:scale-105 transition-all flex items-center justify-center uppercase tracking-wide">
                Ver Planes Hogar
              </a>
              <a href="#movil" className="w-full py-4 bg-slate-900 text-white font-black rounded-2xl shadow-xl hover:bg-slate-800 transition-all flex items-center justify-center uppercase tracking-wide">
                Ver Planes Móviles
              </a>
            </div>

            {/* <div className="absolute -bottom-6 -left-2 glass-effect p-4 md:p-6 rounded-2xl shadow-2xl z-20 max-w-[200px] md:max-w-[240px]">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Velocidad</span>
              </div>
              <p className="text-2xl md:text-3xl font-black text-slate-900 leading-none">900<span className="text-sm md:text-lg">Mbps</span></p>
              <p className="text-[10px] md:text-xs text-slate-500 mt-1">Navegación Ultrarrápida</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PricingCards = () => (
  <section id="planes" className="py-24 bg-white relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Elige el plan perfecto para ti</h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">Sin letras chiquitas. Solo la mejor conexión para tu hogar.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

        {/* Solo Internet */}
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-all group flex flex-col h-full">
          <div className="mb-6">
            <span className="text-claro-red font-bold text-sm uppercase">Internet Ultrarrápido</span>
            <h3 className="text-3xl font-bold mt-2">500 o 900 Megas</h3>
          </div>
          <div className="mb-8">
            <div className="flex items-baseline">
              <span className="text-slate-500 text-lg">$</span>
              <span className="text-5xl font-extrabold text-slate-900">79.900</span>
              <span className="text-slate-500 ml-1">/mes</span>
            </div>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            {[
              "500 o 900 Megas de Fibra",
              "Telefonía Fija Ilimitada",
              "Modem WiFi de alta potencia",
              "Soporte técnico 24/7"
            ].map((feature, idx) => (
              <li key={idx} className="flex items-center text-slate-600 font-medium">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
                </div>
                {feature}
              </li>
            ))}
          </ul>
          <div className="flex space-x-2 mb-8">
            <span className="bg-slate-200 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 uppercase">Prime Video Incluido</span>
          </div>
          <button
            onClick={() => openWhatsApp("Internet Hogar 500/900 Megas")}
            className="w-full mt-auto py-4 rounded-2xl font-bold border-2 border-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white transition-all">
            Solicitar ahora
          </button>
        </div>

        {/* Internet + TV (Popular) */}
        <div className="relative bg-white p-10 rounded-[32px] border-4 border-claro-red shadow-2xl md:scale-105 z-10 overflow-hidden flex flex-col h-full">
          <div className="absolute top-0 right-0 bg-claro-red text-white text-[10px] font-black uppercase tracking-widest py-1.5 px-6 rounded-bl-xl">
            Lo más elegido
          </div>
          <div className="mb-6">
            <span className="text-claro-red font-bold text-sm uppercase">Internet + TV</span>
            <h3 className="text-4xl font-extrabold mt-2 leading-tight">Intermedio Plus</h3>
          </div>
          <div className="mb-8">
            <div className="flex items-baseline">
              <span className="text-slate-500 text-lg">Desde $</span>
              <span className="text-6xl font-black text-slate-900">119.900</span>
            </div>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            {[
              "Fibra 500 o 900 Megas",
              "TV Digital Intermedio Plus",
              "1 Deco HD + 1 Deco Digital",
              "Telefonía Fija Ilimitada Nacional",
              "1 Asistencia a elección",
              "McAfee Premium (3 equipos)"
            ].map((feature, idx) => (
              <li key={idx} className="flex items-start text-slate-900 font-medium">
                <div className="w-6 h-6 bg-claro-red rounded-full flex items-center justify-center mr-3 mt-0.5 shadow-lg shadow-claro-red/20 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
                </div>
                {feature}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="bg-slate-100 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600">Disfruta 2 Apps a elección:</span>
            <span className="bg-slate-100 px-2 py-1 rounded text-xs font-bold text-slate-800">Netflix</span>
            <span className="bg-slate-100 px-2 py-1 rounded text-xs font-bold text-slate-800">HBO Max</span>
            <span className="bg-slate-100 px-2 py-1 rounded text-xs font-bold text-slate-800">Prime Video</span>
            <span className="bg-slate-100 px-2 py-1 rounded text-xs font-bold text-slate-800">Disney+</span>
            <span className="bg-slate-100 px-2 py-1 rounded text-xs font-bold text-slate-800">Win+ Fútbol</span>
          </div>
          <button
            onClick={() => openWhatsApp("Internet + TV Digital Intermedio Plus")}
            className="w-full mt-auto py-5 rounded-2xl font-black bg-claro-red text-white shadow-xl shadow-claro-red/30 hover:scale-[1.02] transition-all uppercase tracking-wider">
            ¡Lo quiero ya!
          </button>
        </div>

        {/* Solo TV */}
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-all group flex flex-col h-full">
          <div className="mb-6">
            <span className="text-claro-red font-bold text-sm uppercase">Solo Televisión</span>
            <h3 className="text-3xl font-bold mt-2 leading-tight">TV Digital<br />Plus</h3>
          </div>
          <div className="mb-8">
            <div className="flex items-baseline">
              <span className="text-slate-500 text-lg">$</span>
              <span className="text-5xl font-extrabold text-slate-900">104.900</span>
              <span className="text-slate-500 ml-1">/mes</span>
            </div>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            {[
              "Televisión Digital Intermedio Plus",
              "1 Deco HD incluido",
              "Calidad increíble de imagen",
              "Tus canales y deportes favoritos"
            ].map((feature, idx) => (
              <li key={idx} className="flex items-center text-slate-600 font-medium">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
                </div>
                {feature}
              </li>
            ))}
          </ul>
          <div className="flex space-x-2 mb-8">
            <span className="bg-slate-200 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 uppercase">1 App a elección</span>
          </div>
          <button
            onClick={() => openWhatsApp("TV Digital Intermedio Plus")}
            className="w-full mt-auto py-4 rounded-2xl font-bold border-2 border-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white transition-all">
            Solicitar ahora
          </button>
        </div>

      </div>
    </div>
  </section>
);

const MobilePlansSection = () => (
  <section id="movil" className="py-24 bg-slate-900 text-white relative">
    <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-claro-red/20 rounded-full blur-[120px]"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
          Lleva lo mejor de <span className="text-claro-red">Claro Móvil</span>
        </h2>
        <p className="text-slate-400 text-lg font-medium max-w-2xl mx-auto">Minutos ilimitados a todo destino, redes sociales sin consumir datos y navegación extrema.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {/* Plan 1 */}
        <div className="dark-glass-effect p-6 rounded-3xl flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
          <div>
            <h4 className="text-4xl font-black mb-1">65 <span className="text-xl">GB</span></h4>
            <p className="text-slate-400 text-sm font-medium mb-6">Minutos ilimitados y redes sin consumo.</p>
          </div>
          <div>
            <div className="text-3xl font-black text-white mb-6">$53.900</div>
            <button onClick={() => openWhatsApp("Postpago 65GB")} className="w-full py-3 bg-claro-red hover:bg-red-500 rounded-xl font-bold transition-colors">Lo quiero</button>
          </div>
        </div>

        {/* Plan 2 */}
        <div className="dark-glass-effect p-6 rounded-3xl flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
          <div>
            <h4 className="text-4xl font-black mb-1">75 <span className="text-xl">GB</span></h4>
            <p className="text-slate-400 text-sm font-medium mb-6">+ Amazon Prime. Redes, minutos y LDI ilimitados.</p>
          </div>
          <div>
            <div className="text-3xl font-black text-white mb-6">$56.900</div>
            <button onClick={() => openWhatsApp("Postpago 75GB")} className="w-full py-3 bg-claro-red hover:bg-red-500 rounded-xl font-bold transition-colors">Lo quiero</button>
          </div>
        </div>

        {/* Plan 3 (Recomendado) */}
        <div className="bg-claro-red/10 border-2 border-claro-red p-6 rounded-3xl flex flex-col justify-between relative md:-translate-y-4 hover:-translate-y-6 transition-transform duration-300 shadow-2xl shadow-claro-red/20 overflow-hidden z-10">
          <div className="absolute top-0 right-0 bg-claro-red text-[10px] font-black uppercase tracking-widest py-1 px-4 rounded-bl-xl">
            Recomendado
          </div>
          <div className="pt-2">
            <h4 className="text-5xl font-black mb-1 text-white">100 <span className="text-xl">GB</span></h4>
            <p className="text-white/80 text-sm font-medium mb-6">+ Amazon Prime, Claro Video, Drive, Música. LDI ilimitado.</p>
          </div>
          <div>
            <div className="text-4xl font-black text-white mb-6">$65.900</div>
            <button onClick={() => openWhatsApp("Postpago 100GB")} className="w-full py-4 bg-white text-claro-red hover:bg-slate-100 rounded-xl font-black transition-colors uppercase tracking-wide">¡Lo quiero!</button>
          </div>
        </div>

        {/* Plan 4 */}
        <div className="dark-glass-effect p-6 rounded-3xl flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
          <div>
            <h4 className="text-4xl font-black mb-1">130 <span className="text-xl">GB</span></h4>
            <p className="text-slate-400 text-sm font-medium mb-6">+ Amazon Prime. Todos los beneficios y más gigas.</p>
          </div>
          <div>
            <div className="text-3xl font-black text-white mb-6">$75.900</div>
            <button onClick={() => openWhatsApp("Postpago 130GB")} className="w-full py-3 bg-claro-red hover:bg-red-500 rounded-xl font-bold transition-colors">Lo quiero</button>
          </div>
        </div>

        {/* Plan 5 */}
        <div className="bg-gradient-to-b from-indigo-900/80 to-slate-900 border border-indigo-500/30 p-6 rounded-3xl flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
          <div>
            <h4 className="text-4xl font-black mb-1 text-indigo-400">Libre</h4>
            <p className="text-indigo-200/70 text-sm font-medium mb-6">Datos Ilimitados + Netflix + Amazon Prime. El plan máximo.</p>
          </div>
          <div>
            <div className="text-3xl font-black text-white mb-6">$99.900</div>
            <button onClick={() => openWhatsApp("Postpago Libre")} className="w-full py-3 bg-indigo-500 hover:bg-indigo-400 text-white rounded-xl font-bold transition-colors">Lo quiero</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const App = () => {
  const currentUrl = "http://192.168.0.18:5173/";

  return (
    <div className="font-sans text-slate-900 overflow-x-hidden">
      <Header />
      <Hero />
      <PricingCards />
      <MobilePlansSection />

      {/* Floating WhatsApp CTA */}
      <div className="fixed bottom-6 right-6 z-[100]">
        <button
          onClick={() => openWhatsApp("asesoría para comprar un plan")}
          className="group flex items-center bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 border-4 border-white"
        >
          <div className="hidden lg:block pr-3 font-bold text-sm whitespace-nowrap">¿Necesitas ayuda? Escríbenos</div>
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.516.899 3.013 1.348 4.706 1.349 5.178 0 9.397-4.217 9.399-9.396 0-2.51-.975-4.87-2.744-6.64s-4.13-2.741-6.64-2.741c-5.178 0-9.397 4.219-9.399 9.4.001 1.75.474 3.274 1.371 4.73l-.934 3.412 3.541-.928zM16.418 13.52c-.27-.135-1.597-.788-1.845-.878-.248-.09-.428-.135-.608.135s-.698.878-.855 1.058c-.158.18-.315.203-.585.068-.27-.135-1.14-.421-2.172-1.341-.803-.715-1.345-1.598-1.503-1.869-.158-.27-.017-.417.118-.552.122-.121.27-.315.405-.473.135-.158.18-.27.27-.45.09-.18.045-.338-.023-.473-.068-.135-.608-1.464-.833-2.004-.219-.527-.441-.454-.608-.463-.157-.008-.337-.01-.517-.01-.18 0-.473.067-.72.337-.248.27-.945.923-.945 2.251s.968 2.611 1.103 2.791c.135.18 1.905 2.909 4.613 4.08.644.279 1.147.446 1.539.571.647.205 1.236.176 1.701.107.519-.077 1.597-.653 1.823-1.283.225-.63.225-1.17.157-1.283-.067-.112-.247-.18-.517-.315z"></path></svg>
        </button>
      </div>

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
    </div>
  );
};

export default App;
