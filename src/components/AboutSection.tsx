import { Heart, Users, Book, HandHeart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Heart,
    title: "Fe",
    description: "Fundamentados en las enseñanzas de Cristo",
  },
  {
    icon: Users,
    title: "Comunidad",
    description: "Unidos como una familia en el amor de Dios",
  },
  {
    icon: Book,
    title: "Palabra",
    description: "Guiados por las Sagradas Escrituras",
  },
  {
    icon: HandHeart,
    title: "Servicio",
    description: "Sirviendo a nuestra comunidad con amor",
  },
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-primary mb-6">
            SOBRE <span className="text-accent">NOSOTROS</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            La Iglesia de Cristo Ebenezer Cobán es una comunidad de fe dedicada a compartir 
            el amor de Cristo y servir a nuestra ciudad.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-20">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300">
                <value.icon className="w-10 h-10 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Misión Card */}
          <div className="bg-white p-12 border-l-4 border-accent shadow-elegant hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                <Book className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <h3 className="font-heading text-4xl font-bold text-primary">
                Misión
              </h3>
            </div>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Glorificar a Dios a través de la adoración sincera, el estudio profundo 
              de su Palabra, y el servicio comprometido a nuestra comunidad. Buscamos 
              ser instrumentos del amor de Cristo, transformando vidas y fortaleciendo 
              la fe de cada persona que forma parte de nuestra familia espiritual.
            </p>
          </div>

          {/* Visión Card */}
          <div className="bg-white p-12 border-l-4 border-primary shadow-elegant hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                <Heart className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <h3 className="font-heading text-4xl font-bold text-primary">
                Visión
              </h3>
            </div>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Ser una iglesia que impacte positivamente a Cobán y sus alrededores, 
              siendo conocidos por nuestro amor genuino, servicio desinteresado y 
              compromiso inquebrantable con la verdad del Evangelio. Aspiramos a 
              formar discípulos maduros que reflejen el carácter de Cristo en todas 
              las áreas de sus vidas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
