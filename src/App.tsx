import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

function App() {
  return (
    <div className="bg-[#0B1E36] min-h-screen">
      <Navbar />
      <Hero />

      {/* SECCIONES FUTURAS */}
      <section id="eventos" className="h-screen bg-white text-center flex items-center justify-center">
        <h2 className="text-4xl font-bold text-[#0B1E36]">Próximos Eventos</h2>
      </section>

      <section id="nosotros" className="h-screen bg-[#f5f5f5] text-center flex items-center justify-center">
        <h2 className="text-4xl font-bold text-[#0B1E36]">Quiénes Somos</h2>
      </section>

      <section id="contacto" className="h-screen bg-[#0B1E36] text-center flex items-center justify-center text-white">
        <h2 className="text-4xl font-bold">Contáctanos</h2>
      </section>
    </div>
  );
}

export default App;
