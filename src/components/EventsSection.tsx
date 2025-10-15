import { Calendar, Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const events = [
  {
    title: "Servicio Dominical",
    date: "Todos los Domingos",
    time: "10:00 AM - 12:00 PM",
    location: "Templo Principal",
    type: "Servicio",
    color: "bg-accent",
  },
  {
    title: "Escuela Dominical",
    date: "Todos los Domingos",
    time: "9:00 AM - 10:00 AM",
    location: "Salones de Educación",
    type: "Educación",
    color: "bg-wine",
  },
  {
    title: "Reunión de Oración",
    date: "Miércoles",
    time: "7:00 PM - 8:30 PM",
    location: "Templo Principal",
    type: "Oración",
    color: "bg-primary",
  },
  {
    title: "Servicio de Jóvenes",
    date: "Viernes",
    time: "7:00 PM - 9:00 PM",
    location: "Salón de Jóvenes",
    type: "Juventud",
    color: "bg-accent",
  },
];

const EventsSection = () => {
  return (
    <section id="eventos" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-primary mb-6">
            PRÓXIMOS <span className="text-accent">EVENTOS</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Únete a nosotros en nuestras actividades y eventos especiales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white p-8 shadow-elegant hover:shadow-xl transition-all duration-300 border-t-4 border-accent"
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="font-heading text-2xl font-bold text-primary">
                  {event.title}
                </h3>
                <Badge className={`${event.color} text-white text-xs px-3 py-1`}>
                  {event.type}
                </Badge>
              </div>
              <div className="space-y-4">
                <div className="flex items-center text-foreground/70">
                  <Calendar className="w-5 h-5 mr-3 text-accent flex-shrink-0" strokeWidth={2} />
                  <span className="text-base">{event.date}</span>
                </div>
                <div className="flex items-center text-foreground/70">
                  <Clock className="w-5 h-5 mr-3 text-accent flex-shrink-0" strokeWidth={2} />
                  <span className="text-base">{event.time}</span>
                </div>
                <div className="flex items-center text-foreground/70">
                  <MapPin className="w-5 h-5 mr-3 text-accent flex-shrink-0" strokeWidth={2} />
                  <span className="text-base">{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
