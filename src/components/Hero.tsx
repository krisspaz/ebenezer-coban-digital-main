import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      id="inicio"
      className="relative w-full h-screen bg-gray-50 overflow-hidden"
    >
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
          {/* Capa de filtro suave */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-10">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-yellow-500 drop-shadow-md mb-4">
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
                  document
                    .querySelector("#eventos")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Ver eventos
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white font-semibold text-lg px-10 py-6 rounded-full transition-all duration-200 backdrop-blur-sm"
                onClick={() => {
                  document
                    .querySelector("#nosotros")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Conócenos
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Flechas de navegación */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-gray-800 p-3 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-gray-800 p-3 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Footer sutil del hero */}
      <div className="absolute bottom-6 w-full text-center text-sm text-gray-200">
        © 2025 Iglesia de Cristo Ebenezer Cobán
      </div>
    </section>
  );
};

export default Hero;
