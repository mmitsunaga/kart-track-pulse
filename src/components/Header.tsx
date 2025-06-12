
import React from 'react';
import { Calendar, Trophy, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-card/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 racing-gradient rounded-lg flex items-center justify-center">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              KART CHAMPIONSHIP 2024
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
              Início
            </a>
            <a href="#cronograma" className="text-foreground hover:text-primary transition-colors">
              Cronograma
            </a>
            <a href="#classificacao" className="text-foreground hover:text-primary transition-colors">
              Classificação
            </a>
            <a href="#galeria" className="text-foreground hover:text-primary transition-colors">
              Galeria
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          <Button className="racing-gradient hover:opacity-90 transition-opacity">
            Inscreva-se
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
