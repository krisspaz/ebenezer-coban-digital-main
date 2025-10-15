import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-glow">
                <span className="text-primary font-heading font-bold text-2xl">E</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-white tracking-wide">IGLESIA DE CRISTO</h3>
                <p className="text-accent text-sm font-bold">EBENEZER COBÁN</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Una comunidad de fe dedicada a compartir el amor de Cristo y servir a nuestra ciudad con excelencia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-6 text-white tracking-wide">ENLACES RÁPIDOS</h3>
            <ul className="space-y-3">
              <li>
                <a href="#nosotros" className="text-white/80 hover:text-accent transition-colors duration-200">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#eventos" className="text-white/80 hover:text-accent transition-colors duration-200">
                  Eventos
                </a>
              </li>
              <li>
                <a href="#transmision" className="text-white/80 hover:text-accent transition-colors duration-200">
                  Transmisión en Vivo
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-white/80 hover:text-accent transition-colors duration-200">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-6 text-white tracking-wide">CONTACTO</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-white/80">Cobán, Alta Verapaz, Guatemala</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-white/80">+502 1234-5678</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-white/80">contacto@ebenezercoban.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-200"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-200"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
          <p className="text-white/70">
            © {currentYear} Iglesia de Cristo Ebenezer Cobán. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
