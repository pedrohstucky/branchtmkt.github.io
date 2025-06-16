import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      company: 'TechStart Solutions',
      role: 'CEO',
      content: 'A Brancht transformou completamente nossa comunicação. Eles nos ajudaram a descobrir nosso verdadeiro propósito e isso se refletiu em um crescimento de 300% nas vendas em apenas 6 meses.',
      rating: 5,
      results: '+300% vendas',
      avatar: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Carlos Eduardo',
      company: 'Verde Sustentável',
      role: 'Diretor de Marketing',
      content: 'O trabalho da Brancht vai muito além do marketing tradicional. Eles realmente entendem a importância do propósito e como isso conecta com as pessoas. Nosso engajamento aumentou 250%.',
      rating: 5,
      results: '+250% engajamento',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Ana Beatriz',
      company: 'Bem-Estar Total',
      role: 'Fundadora',
      content: 'Encontrar nossa voz autêntica foi fundamental para o sucesso da nossa marca. A Brancht nos guiou nessa jornada de autoconhecimento e os resultados superaram todas as expectativas.',
      rating: 5,
      results: '+180% conversões',
      avatar: 'https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Roberto Oliveira',
      company: 'Inovação Digital',
      role: 'Co-fundador',
      content: 'A abordagem da Brancht é única. Eles não vendem serviços, eles constroem parcerias. O ROI dos nossos investimentos em marketing triplicou depois que começamos a trabalhar juntos.',
      rating: 5,
      results: '3x ROI',
      avatar: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-brancht-dark mb-6">
              O Que Nossos <span className="text-brancht-green">Clientes</span> Dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Mais do que números, celebramos as transformações reais que acontecem 
              quando marcas descobrem e vivem seu verdadeiro propósito.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="bg-gradient-to-r from-brancht-green to-brancht-vibrant-green p-3 rounded-full">
                    <Quote className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6 pt-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-brancht-dark">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.role}</div>
                      <div className="text-brancht-green text-sm font-medium">{testimonial.company}</div>
                    </div>
                  </div>

                  {/* Results Badge */}
                  <div className="bg-gradient-to-r from-brancht-green to-brancht-vibrant-green text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {testimonial.results}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="bg-white rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-brancht-dark mb-4">
                Números que Falam por Si
              </h3>
              <p className="text-gray-600">Resultados reais de clientes que descobriram seu propósito</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-brancht-green mb-2">98%</div>
                <div className="text-gray-600 font-medium">Taxa de Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brancht-green mb-2">3x</div>
                <div className="text-gray-600 font-medium">ROI Médio</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brancht-green mb-2">+230%</div>
                <div className="text-gray-600 font-medium">Crescimento Médio</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brancht-green mb-2">12</div>
                <div className="text-gray-600 font-medium">Meses de Parceria</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;