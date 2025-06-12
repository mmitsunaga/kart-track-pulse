
import React from 'react';
import { ChevronRight, Calendar, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      ></div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-20 bg-primary/20 transform rotate-45 animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-accent/40 rounded-full animate-pulse-slow delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-16 bg-primary/30 transform -rotate-12 animate-pulse-slow delay-500"></div>
        <div className="absolute bottom-20 right-10 w-4 h-4 bg-accent/30 rounded-full animate-pulse-slow delay-1500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border/50 mb-8 animate-fade-in">
            <Trophy className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium">Temporada 2024 - Etapa Final</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              CAMPEONATO
            </span>
            <br />
            <span className="text-foreground">DE KART</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            A velocidade encontra a paixão. Junte-se aos melhores pilotos na batalha pela pole position.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button size="lg" className="racing-gradient hover:opacity-90 transition-opacity text-lg px-8 py-4">
              Inscreva-se Agora
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 text-lg px-8 py-4">
              Ver Calendário
              <Calendar className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-6 text-center hover:bg-card/70 transition-colors">
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Pilotos Inscritos</div>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-6 text-center hover:bg-card/70 transition-colors">
              <div className="text-3xl font-bold text-accent mb-2">8</div>
              <div className="text-muted-foreground">Etapas do Campeonato</div>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-6 text-center hover:bg-card/70 transition-colors">
              <div className="text-3xl font-bold text-primary mb-2">R$ 50K</div>
              <div className="text-muted-foreground">Em Premiação</div>
            </Card>
          </div>
        </div>
      </div>

      {/* Speed line effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 speed-gradient animate-pulse-slow"></div>
    </section>
  );
};

export default Hero;
