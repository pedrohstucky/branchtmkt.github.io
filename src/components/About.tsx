import React from 'react';
import { Target, Heart, Lightbulb, Users } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Propósito',
      description: 'Começamos sempre perguntando "Por quê?" antes de qualquer estratégia.',
    },
    {
      icon: Heart,
      title: 'Paixão',
      description: 'Acreditamos que a paixão pelo que fazemos se reflete nos resultados.',
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Buscamos sempre soluções criativas e fora da caixa.',
    },
    {
      icon: Users,
      title: 'Parceria',
      description: 'Construímos relacionamentos duradouros baseados na confiança.',
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-brancht-beige">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-brancht-dark mb-6">
              O Nosso <span className="text-brancht-green">Porquê</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Entendemos que as pessoas não compram o que você faz, mas sim o <strong>porquê</strong> você faz. É por isso que começamos cada projeto descobrindo a essência e o propósito único da sua marca.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Story */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-brancht-dark mb-6">
                A Nossa História
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                A Brancht nasceu da crença de que o marketing mais poderoso é aquele 
                que conecta pessoas através de propósitos compartilhados. Somos uma 
                agência jovem, mas com uma visão clara: transformar a comunicação 
                das marcas através do poder do "porquê".
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Cada projeto que assumimos começa com uma pergunta fundamental: 
                "Por que sua marca existe?" A partir dessa resposta, construímos 
                estratégias que não apenas vendem produtos, mas criam conexões 
                emocionais duradouras.
              </p>
              <div className="pt-4">
                <div className="inline-flex items-center space-x-2 text-brancht-green font-semibold">
                  <span className="w-12 h-px bg-brancht-green"></span>
                  <span>Missão clara, resultados reais</span>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-brancht-dark mb-6">Nossa Missão</h3>
              <blockquote className="text-xl text-gray-700 italic leading-relaxed mb-6">
                "Inspirar marcas a descobrirem seu propósito e transformá-lo em 
                conexões autênticas que geram resultados extraordinários."
              </blockquote>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brancht-green rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Estratégias baseadas em propósito</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brancht-green rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Resultados mensuráveis e sustentáveis</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brancht-green rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Parcerias de longo prazo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div>
            <h3 className="text-3xl font-bold text-brancht-dark text-center mb-12">
              Nossos Valores
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="group text-center p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-brancht-green to-brancht-vibrant-green rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-brancht-dark mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;