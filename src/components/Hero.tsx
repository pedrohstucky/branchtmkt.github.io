import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brancht-dark via-brancht-dark to-gray-800"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-24 sm:w-32 h-24 sm:h-32 bg-brancht-green/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 sm:w-40 h-32 sm:h-40 bg-brancht-vibrant-green/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-20 sm:w-24 h-20 sm:h-24 bg-brancht-light-green/10 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
            {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 animate-slide-up leading-tight">
            Marketing que <span className='bg-gradient-to-r from-brancht-green via-brancht-light-green to-brancht-vibrant-green bg-clip-text text-transparent'>Transforma</span> Propósito em <span className="bg-gradient-to-r from-brancht-green via-brancht-light-green to-brancht-vibrant-green bg-clip-text text-transparent">
              Resultados
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/80 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up px-4 sm:px-0" style={{ animationDelay: '0.2s' }}>
          Somos a <strong className='bg-gradient-to-r from-brancht-green via-brancht-light-green to-brancht-vibrant-green bg-clip-text text-transparent'>Brancht</strong>, uma agência jovem e inovadora que acredita que o marketing eficaz começa com um propósito claro. Conectamos marcas às pessoas através de estratégias autênticas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-slide-up px-4 sm:px-0" style={{ animationDelay: '0.4s' }}>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="w-full sm:w-auto group bg-gradient-to-r from-brancht-green to-brancht-vibrant-green text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Descubra Seu Porquê</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button 
              onClick={() => scrollToSection('servicos')}
              className="w-full sm:w-auto group flex items-center justify-center px-6 py-4 space-x-2 rounded-full text-white border-1 border-white hover:border-brancht-light-green hover:text-brancht-light-green transition-colors duration-300"
            >
                <span className="font-medium text-md sm:text-lg">Ver Nossos Serviços</span>
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 animate-slide-up px-4 sm:px-0" style={{ animationDelay: '0.6s' }}>
            <div className="text-center p-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-sm sm:text-base text-white/70 font-medium">Projetos Realizados</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-sm sm:text-base text-white/70 font-medium">Clientes Satisfeitos</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">3x</div>
              <div className="text-sm sm:text-base text-white/70 font-medium">ROI Médio</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-5 sm:bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;