
import React from 'react';
import { Calendar, Clock, MapPin, Trophy } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Schedule = () => {
  const races = [
    {
      id: 1,
      title: "Etapa de Abertura",
      date: "15 Jan 2024",
      time: "14:00",
      location: "Kartódromo Internacional SP",
      status: "finalizada",
      winner: "Carlos Silva"
    },
    {
      id: 2,
      title: "Grande Prêmio de Inverno",
      date: "12 Fev 2024",
      time: "15:30",
      location: "Autódromo de Interlagos",
      status: "finalizada",
      winner: "Ana Santos"
    },
    {
      id: 3,
      title: "Corrida das Estrelas",
      date: "18 Mar 2024",
      time: "13:00",
      location: "Kartódromo Ayrton Senna",
      status: "finalizada",
      winner: "Pedro Costa"
    },
    {
      id: 4,
      title: "Etapa Final - Grande Final",
      date: "22 Abr 2024",
      time: "16:00",
      location: "Kartódromo Internacional RJ",
      status: "próxima",
      winner: null
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'finalizada':
        return 'bg-muted text-muted-foreground';
      case 'próxima':
        return 'racing-gradient text-white';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <section id="cronograma" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Calendário
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Acompanhe todas as etapas do campeonato e não perca nenhuma corrida
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {races.map((race, index) => (
            <Card key={race.id} className="bg-card border-border/50 p-6 hover:bg-card/80 transition-colors animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge className={getStatusColor(race.status)}>
                      {race.status === 'finalizada' ? 'Finalizada' : 'Próxima'}
                    </Badge>
                    <h3 className="text-xl font-bold text-foreground">
                      {race.title}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{race.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{race.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{race.location}</span>
                    </div>
                  </div>
                </div>

                {race.winner && (
                  <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg">
                    <Trophy className="w-4 h-4 text-primary" />
                    <span className="font-medium text-primary">
                      Vencedor: {race.winner}
                    </span>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
