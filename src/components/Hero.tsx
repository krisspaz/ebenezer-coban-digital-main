import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Facebook, Youtube, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroChurch from "@/assets/maxresdefault.jpg";

const slides = [
  {
    image: heroChurch,
    title: "Bienvenidos a Nuestra Casa",
    subtitle: "Un lugar donde la fe se encuentra con la comunidad",
  },
  {
    image: heroChurch,
    title: "Unidos en Oración",
    subtitle: "Fortaleciendo nuestra fe juntos",
  },
  {
    image: heroChurch,
    title: "La Palabra de Dios",
    subtitle: "Iluminando nuestro camino cada día",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      id="inicio"
      className="relative grid grid-cols-1 md:grid-cols-4 h-screen overflow-hidden bg-white"
    >
      {/* Imagen 3/4 */}
      <div className="relative md:col-span-3 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />

            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center text-white px-6">
              <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 drop-shadow-lg mb-4">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl text-gray-100 font-light mb-8">
                {slide.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold text-lg px-10 py-6 rounded-full shadow-lg hover:scale-105 transition-transform"
                  onClick={() => {
                    document.querySelector("#eventos")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  VER EVENTOS
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-black font-semibold text-lg px-10 py-6 rounded-full transition-all duration-200 backdrop-blur-sm"
                  onClick={() => {
                    document.querySelector("#nosotros")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  CONÓCENOS
                </Button>
              </div>
            </div>
          </div>
        ))}

        {/* Flechas */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/20 transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/20 transition-all"
          aria-label="Next slide"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Panel lateral */}
      <div className="hidden md:flex flex-col justify-between bg-[#0B1E36] text-white px-10 py-8">
        {/* Redes sociales arriba */}
        <div className="flex justify-end gap-5 mb-10">
          <a
            href="https://www.facebook.com/ebenezercoban?locale=es_LA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-400 transition"
          >
            <Facebook size={26} />
          </a>
          <a
            href="https://www.youtube.com/@iglesiaebenezercoban9379"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-400 transition"
          >
            <Youtube size={26} />
          </a>
          <a
            href="https://wa.me/50200000000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-400 transition"
          >
            <MessageCircle size={26} />
          </a>
        </div>

        {/* Menú central */}
        <div className="flex flex-col justify-center items-start gap-6">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            Explora Ebenezer
          </h2>
          <ul className="space-y-4 text-lg">
            <li className="hover:text-yellow-400 cursor-pointer transition" onClick={() => document.querySelector("#inicio")?.scrollIntoView({ behavior: "smooth" })}>Inicio</li>
            <li className="hover:text-yellow-400 cursor-pointer transition" onClick={() => document.querySelector("#eventos")?.scrollIntoView({ behavior: "smooth" })}>Eventos</li>
            <li className="hover:text-yellow-400 cursor-pointer transition" onClick={() => document.querySelector("#ministerios")?.scrollIntoView({ behavior: "smooth" })}>Ministerios</li>
            <li className="hover:text-yellow-400 cursor-pointer transition" onClick={() => document.querySelector("#nosotros")?.scrollIntoView({ behavior: "smooth" })}>Nosotros</li>
            <li className="hover:text-yellow-400 cursor-pointer transition" onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}>Contacto</li>
          </ul>
        </div>

        {/* Pie del panel */}
        <div className="mt-10 text-sm text-gray-400">
          © 2025 Iglesia Ebenezer Cobán
        </div>
      </div>
    </section>
  );
};

export default Hero;
