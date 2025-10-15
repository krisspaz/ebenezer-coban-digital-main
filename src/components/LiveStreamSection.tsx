import { Youtube, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const LiveStreamSection = () => {
  return (
    <section id="transmision" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-primary mb-6">
            TRANSMISIÓN <span className="text-accent">EN VIVO</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Únete a nuestros servicios en línea desde cualquier lugar
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-elegant overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-primary via-primary to-primary/90 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <Radio className="w-20 h-20 mx-auto mb-6 text-accent animate-pulse" strokeWidth={1.5} />
                <h3 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                  Próxima Transmisión
                </h3>
                <p className="text-2xl mb-8 font-light">
                  Domingo, 10:00 AM
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="gradient-gold text-primary font-bold shadow-glow hover:scale-105 transition-transform px-8"
                    onClick={() => window.open("https://youtube.com", "_blank")}
                  >
                    <Youtube className="mr-2" />
                    VER EN YOUTUBE
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary font-semibold px-8"
                    onClick={() => window.open("https://facebook.com", "_blank")}
                  >
                    VER EN FACEBOOK
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-lg">
              ¿Tienes problemas para conectarte? Contáctanos y te ayudaremos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStreamSection;
