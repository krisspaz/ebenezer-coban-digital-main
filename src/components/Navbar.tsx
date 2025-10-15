import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoEbenezer from "@/assets/logo_ebenezer.jpg"; // 👈 Aquí importamos tu logo

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      label: "YOUTUBE",
      href: "https://www.youtube.com/@iglesiaebenezercoban9379",
      external: true,
    },
    {
      label: "WHATSAPP",
      href: "https://wa.me/50200000000", // 🔹 coloca tu número real
      external: true,
    },
    {
      label: "FACEBOOK",
      href: "https://www.facebook.com/ebenezercoban?locale=es_LA",
      external: true,
    },
    {
      label: "INSTAGRAM",
      href: "https://www.instagram.com/ebenezercoban_/",
      external: true,
    },
    {
      label: "CONTACTO",
      href: "#contacto",
      external: false,
    },
  ];

  const handleClick = (item: { href: string; external?: boolean }) => {
    if (item.external) {
      window.open(item.href, "_blank");
    } else {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#8B0000] shadow-lg"
          : "bg-[#8B0000]/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo con texto */}
          <div className="flex items-center space-x-3">
            <img
              src={logoEbenezer}
              alt="Logo Ebenezer Cobán"
              className="w-14 h-14 object-contain rounded-full shadow-md border-2 border-yellow-500"
            />
            <div className="hidden md:block">
              <h1 className="text-white font-heading font-bold text-lg leading-tight tracking-wide">
                IGLESIA DE CRISTO
              </h1>
              <p className="text-yellow-400 text-sm font-bold">
                EBENEZER COBÁN
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleClick(item)}
                className="text-white hover:text-yellow-400 transition-colors duration-200 font-semibold text-sm tracking-wide"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleClick(item)}
                  className="text-white hover:text-yellow-400 transition-colors duration-200 font-semibold text-left px-4 py-3 tracking-wide"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
