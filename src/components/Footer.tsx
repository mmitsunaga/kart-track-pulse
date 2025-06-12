
import React from 'react';
import { Trophy, Calendar, MapPin, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer id="contato" className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 racing-gradient rounded-lg flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                KART CHAMPIONSHIP
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              O maior campeonato de kart do Brasil. Venha fazer parte dessa família e viva a emoção das pistas.
            </p>
            <Button className="racing-gradient hover:opacity-90 transition-opacity">
              Inscreva-se Agora
            </Button>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contato</h4>
            <div className="space-y-3 text-muted-foreground">
              <div>
                <strong>Telefone:</strong><br />
                (11) 9 9999-9999
              </div>
              <div>
                <strong>Email:</strong><br />
                contato@kartchampionship.com.br
              </div>
              <div>
                <strong>WhatsApp:</strong><br />
                (11) 9 8888-8888
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Próxima Corrida</h4>
            <Card className="bg-secondary/50 border-border/50 p-4">
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-primary">
                  <Calendar className="w-4 h-4" />
                  <span className="font-semibold">22 de Abril</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>16:00</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Kartódromo Internacional RJ</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Kart Championship. Todos os direitos reservados.</p>
          <div className="w-32 h-1 racing-gradient mx-auto mt-4 rounded-full"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
