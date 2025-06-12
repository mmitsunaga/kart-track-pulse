
import React from 'react';
import { Trophy, Medal, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Standings = () => {
  const standings = [
    {
      position: 1,
      name: "Carlos Silva",
      team: "Speed Racing",
      points: 285,
      wins: 2,
      podiums: 3
    },
    {
      position: 2,
      name: "Ana Santos",
      team: "Thunder Kart",
      points: 267,
      wins: 1,
      podiums: 3
    },
    {
      position: 3,
      name: "Pedro Costa",
      team: "Velocity Team",
      points: 243,
      wins: 1,
      podiums: 2
    },
    {
      position: 4,
      name: "Maria Oliveira",
      team: "Turbo Racing",
      points: 189,
      wins: 0,
      podiums: 2
    },
    {
      position: 5,
      name: "João Ferreira",
      team: "Lightning Kart",
      points: 156,
      wins: 0,
      podiums: 1
    },
    {
      position: 6,
      name: "Rafael Lima",
      team: "Storm Racing",
      points: 134,
      wins: 0,
      podiums: 1
    },
    {
      position: 7,
      name: "Carla Mendes",
      team: "Apex Kart",
      points: 98,
      wins: 0,
      podiums: 0
    },
    {
      position: 8,
      name: "Bruno Alves",
      team: "Nitro Team",
      points: 67,
      wins: 0,
      podiums: 0
    }
  ];

  const getPositionIcon = (position: number) => {
    switch (position) {
      case 1:
        return <Trophy className="w-5 h-5 text-yellow-400" />;
      case 2:
        return <Medal className="w-5 h-5 text-gray-400" />;
      case 3:
        return <Award className="w-5 h-5 text-yellow-600" />;
      default:
        return <span className="w-5 h-5 flex items-center justify-center text-muted-foreground font-bold">{position}</span>;
    }
  };

  const getPositionBg = (position: number) => {
    switch (position) {
      case 1:
        return 'racing-gradient';
      case 2:
        return 'bg-gradient-to-r from-gray-400 to-gray-600';
      case 3:
        return 'bg-gradient-to-r from-yellow-600 to-yellow-700';
      default:
        return 'bg-muted';
    }
  };

  return (
    <section id="classificacao" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Classificação
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Acompanhe a pontuação dos pilotos e veja quem está liderando o campeonato
          </p>
        </div>

        <Card className="bg-card border-border/50 overflow-hidden max-w-4xl mx-auto">
          <div className="p-6">
            <div className="grid grid-cols-5 gap-4 text-sm font-semibold text-muted-foreground mb-4 pb-4 border-b border-border/50">
              <div>Posição</div>
              <div className="col-span-2">Piloto / Equipe</div>
              <div className="text-center">Pontos</div>
              <div className="text-center">Vitórias</div>
            </div>

            <div className="space-y-3">
              {standings.map((driver, index) => (
                <div
                  key={driver.position}
                  className="grid grid-cols-5 gap-4 items-center p-4 rounded-lg hover:bg-muted/50 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getPositionBg(driver.position)}`}>
                      {getPositionIcon(driver.position)}
                    </div>
                  </div>
                  
                  <div className="col-span-2">
                    <div className="font-semibold text-foreground">{driver.name}</div>
                    <div className="text-sm text-muted-foreground">{driver.team}</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="font-bold text-lg text-primary">{driver.points}</div>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2">
                    <Badge variant="outline" className="border-primary/50">
                      {driver.wins} vitórias
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Standings;
