
import React from 'react';
import { Card } from '@/components/ui/card';
import { CheckCircle, AlertCircle, Trophy, Users } from 'lucide-react';

const Rules = () => {
  const generalRules = [
    "Idade mínima de 16 anos para participação",
    "Licença válida de piloto de kart obrigatória",
    "Inscrição deve ser feita até 7 dias antes de cada etapa",
    "Taxa de inscrição: R$ 300 por etapa",
    "Equipamentos de segurança obrigatórios em todas as corridas"
  ];

  const technicalRules = [
    "Karts categoria Rotax Max 125cc",
    "Peso mínimo do conjunto piloto + kart: 160kg",
    "Pneus fornecidos pela organização",
    "Combustível padronizado fornecido no local",
    "Inspeção técnica obrigatória antes de cada corrida"
  ];

  const scoringRules = [
    "1º lugar: 25 pontos",
    "2º lugar: 18 pontos", 
    "3º lugar: 15 pontos",
    "4º lugar: 12 pontos",
    "5º lugar: 10 pontos",
    "6º ao 10º: 8, 6, 4, 2, 1 pontos respectivamente"
  ];

  const penalties = [
    "Largada antecipada: + 10 segundos",
    "Ultrapassagem irregular: + 5 segundos",
    "Conduta antidesportiva: desqualificação",
    "Equipamento irregular: desqualificação",
    "Não comparecimento à inspeção: não largada"
  ];

  return (
    <section id="regras" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Regras do Campeonato
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça todas as regras e regulamentos para participar do campeonato
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Regras Gerais */}
          <Card className="bg-card border-border/50 p-6 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Regras Gerais</h3>
            </div>
            <ul className="space-y-3">
              {generalRules.map((rule, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{rule}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Regras Técnicas */}
          <Card className="bg-card border-border/50 p-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Regras Técnicas</h3>
            </div>
            <ul className="space-y-3">
              {technicalRules.map((rule, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{rule}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Sistema de Pontuação */}
          <Card className="bg-card border-border/50 p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <Trophy className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Sistema de Pontuação</h3>
            </div>
            <ul className="space-y-3">
              {scoringRules.map((rule, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{rule}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Penalidades */}
          <Card className="bg-card border-border/50 p-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-destructive/20 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Penalidades</h3>
            </div>
            <ul className="space-y-3">
              {penalties.map((penalty, index) => (
                <li key={index} className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{penalty}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Card className="bg-primary/10 border-primary/20 p-6 max-w-2xl mx-auto">
            <p className="text-foreground font-medium mb-2">
              📋 Regulamento Completo
            </p>
            <p className="text-muted-foreground text-sm">
              Para informações detalhadas sobre o regulamento completo, entre em contato com a organização através dos canais oficiais.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Rules;
