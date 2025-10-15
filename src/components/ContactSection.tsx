import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-primary mb-6">
            <span className="text-accent">CONTÁCTANOS</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Estamos aquí para servirte. No dudes en ponerte en contacto con nosotros
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white p-6 shadow-elegant">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-accent" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-2">
                    Ubicación
                  </h3>
                  <p className="text-muted-foreground text-base">
                    Cobán, Alta Verapaz, Guatemala
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 shadow-elegant">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7 text-accent" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-2">
                    Teléfono
                  </h3>
                  <p className="text-muted-foreground text-base">
                    +502 1234-5678
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 shadow-elegant">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-7 h-7 text-accent" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-2">
                    Email
                  </h3>
                  <p className="text-muted-foreground text-base">
                    contacto@ebenezercoban.org
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 shadow-elegant">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-accent" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-2">
                    Horarios de Servicio
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Domingos: 10:00 AM<br />
                    Miércoles: 7:00 PM<br />
                    Viernes: 7:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 shadow-elegant">
            <h3 className="font-heading text-3xl font-bold text-primary mb-8">
              Envíanos un Mensaje
            </h3>
            <form className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full h-12 text-base"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="w-full h-12 text-base"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Tu teléfono"
                  className="w-full h-12 text-base"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tu mensaje"
                  rows={5}
                  className="w-full text-base"
                />
              </div>
              <Button
                type="submit"
                className="w-full gradient-gold text-primary font-bold shadow-glow hover:scale-105 transition-transform duration-200 h-12 text-base"
              >
                ENVIAR MENSAJE
              </Button>
            </form>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="bg-white shadow-elegant overflow-hidden">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-accent" />
                <p className="text-muted-foreground text-lg">
                  Mapa de ubicación
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  (Integración de Google Maps pendiente)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
