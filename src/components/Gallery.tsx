
import React from 'react';
import { Card } from '@/components/ui/card';

const Gallery = () => {
  const images = [
    {
      id: 1,
      title: "Largada da Etapa 1",
      description: "Momento emocionante da primeira largada do campeonato"
    },
    {
      id: 2,
      title: "Vitória de Carlos Silva",
      description: "Celebração da primeira vitória da temporada"
    },
    {
      id: 3,
      title: "Disputa Acirrada",
      description: "Ultrapassagem espetacular na curva 3"
    },
    {
      id: 4,
      title: "Pódio da Etapa 2",
      description: "Os três primeiros colocados na segunda etapa"
    },
    {
      id: 5,
      title: "Treino Livre",
      description: "Pilotos se preparando para a corrida principal"
    },
    {
      id: 6,
      title: "Grande Final",
      description: "A emoção da etapa final do campeonato"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Galeria
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Reviva os melhores momentos do campeonato através dessas imagens exclusivas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card
              key={image.id}
              className="bg-card border-border/50 overflow-hidden hover:scale-105 transition-transform duration-300 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 racing-gradient rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl font-bold text-white">
                      {image.id}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {image.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {image.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Em breve mais fotos e vídeos exclusivos do campeonato
          </p>
          <div className="w-24 h-1 racing-gradient mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
