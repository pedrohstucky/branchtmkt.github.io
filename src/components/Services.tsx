import React, { useState } from 'react';
import { 
  Megaphone, 
  Palette, 
  BarChart3, 
  Search, 
  Globe,
  ArrowRight,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Target,
  Users,
  TrendingUp,
  Lightbulb
} from 'lucide-react';

const Services: React.FC = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = [
    {
      icon: Megaphone,
      title: 'Estratégia de Marca',
      description: 'Descobrimos o porquê da sua marca e criamos estratégias que conectam com seu público.',
      benefits: [
        'Posicionamento de marca único',
        'Storytelling autêntico',
        'Conexão emocional com clientes'
      ],
      gradient: 'from-brancht-green to-brancht-light-green',
      detailedInfo: {
        overview: 'Nossa abordagem estratégica começa com uma imersão profunda no DNA da sua empresa. Utilizamos metodologias comprovadas para descobrir o verdadeiro propósito da sua marca e transformá-lo em uma estratégia de comunicação poderosa que ressoa com seu público-alvo.',
        process: [
          {
            icon: Target,
            title: 'Descoberta do Propósito',
            description: 'Workshop intensivo para identificar o "porquê" da sua marca, seus valores fundamentais e diferencial competitivo no mercado.'
          },
          {
            icon: Users,
            title: 'Análise de Público',
            description: 'Mapeamento detalhado do seu público-alvo, criação de personas e análise da jornada do cliente para criar conexões autênticas.'
          },
          {
            icon: Lightbulb,
            title: 'Estratégia de Posicionamento',
            description: 'Desenvolvimento de uma estratégia única que diferencia sua marca no mercado e cria uma comunicação consistente.'
          }
        ],
        deliverables: [
          'Brand Strategy Canvas completo',
          'Definição de propósito, missão e valores',
          'Mapa de posicionamento competitivo',
          'Personas detalhadas e jornada do cliente',
          'Estratégia de storytelling da marca',
          'Guidelines de comunicação e tom de voz'
        ]
      }
    },
    {
      icon: Palette,
      title: 'Design e Identidade',
      description: 'Criamos identidades visuais que refletem o propósito e personalidade da sua marca.',
      benefits: [
        'Logo e identidade visual completa',
        'Guidelines de marca',
        'Material gráfico personalizado'
      ],
      gradient: 'from-brancht-light-green to-brancht-vibrant-green',
      detailedInfo: {
        overview: 'Transformamos a estratégia da sua marca em uma identidade visual memorável e impactante. Cada elemento é cuidadosamente pensado para comunicar seus valores e conectar emocionalmente com seu público, criando uma presença visual consistente em todos os pontos de contato.',
        process: [
          {
            icon: Lightbulb,
            title: 'Conceituação Visual',
            description: 'Desenvolvimento de conceitos visuais baseados na estratégia de marca, explorando diferentes direções criativas alinhadas ao propósito.'
          },
          {
            icon: Palette,
            title: 'Criação da Identidade',
            description: 'Design do logo, definição de paleta de cores, tipografia e elementos gráficos que formam o sistema visual da marca.'
          },
          {
            icon: CheckCircle,
            title: 'Aplicações Práticas',
            description: 'Criação de materiais gráficos e templates para garantir consistência visual em todas as aplicações da marca.'
          }
        ],
        deliverables: [
          'Logo principal e suas variações',
          'Paleta de cores institucional',
          'Tipografia e hierarquia visual',
          'Manual de identidade visual completo',
          'Papelaria corporativa (cartão, papel timbrado)',
          'Templates para redes sociais',
          'Mockups de aplicações da marca'
        ]
      }
    },
    {
      icon: BarChart3,
      title: 'Marketing Digital',
      description: 'Campanhas digitais orientadas por dados que amplificam sua mensagem.',
      benefits: [
        'Gestão de redes sociais',
        'Campanhas pagas otimizadas',
        'Email marketing estratégico'
      ],
      gradient: 'from-brancht-vibrant-green to-green-400',
      detailedInfo: {
        overview: 'Desenvolvemos estratégias digitais integradas que maximizam seu alcance e constroem relacionamentos duradouros com seus clientes. Cada campanha é baseada em dados, focada no seu público-alvo e otimizada continuamente para melhores resultados.',
        process: [
          {
            icon: Target,
            title: 'Planejamento Estratégico',
            description: 'Definição de objetivos, KPIs e estratégia de canais digitais baseada no comportamento e preferências do seu público.'
          },
          {
            icon: TrendingUp,
            title: 'Execução e Gestão',
            description: 'Implementação das campanhas com criação de conteúdo, gestão de comunidades e monitoramento constante de performance.'
          },
          {
            icon: BarChart3,
            title: 'Análise e Otimização',
            description: 'Relatórios detalhados com insights acionáveis e otimizações contínuas baseadas nos dados de performance.'
          }
        ],
        deliverables: [
          'Estratégia de marketing digital personalizada',
          'Calendário editorial mensal',
          'Gestão completa de redes sociais',
          'Campanhas de tráfego pago (Google, Meta)',
          'Automação de email marketing',
          'Relatórios mensais de performance',
          'Otimizações baseadas em dados'
        ]
      }
    },
    {
      icon: Search,
      title: 'SEO e Conteúdo',
      description: 'Conteúdo relevante que posiciona sua marca como referência no mercado.',
      benefits: [
        'Otimização para buscadores',
        'Blog e conteúdo educativo',
        'Estratégia de palavras-chave'
      ],
      gradient: 'from-green-400 to-brancht-green',
      detailedInfo: {
        overview: 'Criamos estratégias de conteúdo que educam, engajam e convertem seu público. Nosso foco é posicionar sua marca como autoridade no seu segmento através de conteúdo relevante, otimizado para SEO e alinhado com as necessidades da sua audiência.',
        process: [
          {
            icon: Search,
            title: 'Pesquisa e Análise',
            description: 'Análise de palavras-chave, estudo da concorrência e identificação de oportunidades de conteúdo no seu mercado.'
          },
          {
            icon: Lightbulb,
            title: 'Criação de Conteúdo',
            description: 'Produção de conteúdo original, educativo e otimizado para SEO que estabelece sua marca como referência no setor.'
          },
          {
            icon: TrendingUp,
            title: 'Otimização Contínua',
            description: 'Monitoramento de performance, análise de métricas e otimizações técnicas para melhorar rankings e engajamento.'
          }
        ],
        deliverables: [
          'Auditoria SEO completa do site',
          'Estratégia de palavras-chave segmentada',
          'Calendário editorial estratégico',
          'Artigos de blog otimizados',
          'Landing pages de alta conversão',
          'Otimização técnica on-page',
          'Relatórios de ranking e tráfego orgânico'
        ]
      }
    },
    {
      icon: Globe,
      title: 'Websites e Landing Pages',
      description: 'Plataformas digitais que convertem visitantes em clientes.',
      benefits: [
        'Sites responsivos e otimizados',
        'Landing pages que destacam sua marca',
        'UX/UI focado em conversão'
      ],
      gradient: 'from-brancht-dark to-gray-700',
      detailedInfo: {
        overview: 'Desenvolvemos websites e landing pages que não apenas impressionam visualmente, mas são estrategicamente otimizados para conversão e performance. Cada projeto é único, focado nos objetivos do seu negócio e na experiência ideal do seu cliente.',
        process: [
          {
            icon: Target,
            title: 'UX/UI Strategy',
            description: 'Pesquisa de usuário, criação de wireframes, protótipos e design de interface focado na experiência do usuário e conversão.'
          },
          {
            icon: Globe,
            title: 'Desenvolvimento',
            description: 'Programação responsiva seguindo as melhores práticas de performance, SEO, acessibilidade e segurança.'
          },
          {
            icon: TrendingUp,
            title: 'Otimização e Testes',
            description: 'Testes de usabilidade, otimizações de velocidade, integração com ferramentas de analytics e monitoramento contínuo.'
          }
        ],
        deliverables: [
          'Website responsivo e otimizado',
          'Painel administrativo intuitivo',
          'Integração com redes sociais',
          'Otimização completa para SEO',
          'Certificado de segurança SSL',
          'Google Analytics configurado',
          'Treinamento para gestão do conteúdo'
        ]
      }
    }
  ];

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-brancht-dark mb-6">
              Como Podemos <span className="text-brancht-green">Ajudar</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Oferecemos soluções completas de marketing que começam com o seu propósito 
              e se transformam em resultados tangíveis para o seu negócio.
            </p>
          </div>

          {/* Services List */}
          <div className="space-y-6 mb-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Service Header */}
                <div 
                  className="p-8 cursor-pointer"
                  onClick={() => toggleService(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      {/* Icon */}
                      <div className={`flex items-center justify-center w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-xl`}>
                        <service.icon className="h-7 w-7 text-white" />
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-2xl font-bold text-brancht-dark mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-lg">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Expand Button */}
                    <div className="flex items-center space-x-4">
                      <div className="hidden sm:flex space-x-4">
                        {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-brancht-green" />
                            <span className="text-sm text-gray-600">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors duration-300">
                        {expandedService === index ? (
                          <ChevronUp className="h-6 w-6 text-brancht-green" />
                        ) : (
                          <ChevronDown className="h-6 w-6 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedService === index && (
                  <div className="border-t border-gray-100 bg-gray-50">
                    <div className="p-8">
                      <div className="grid lg:grid-cols-2 gap-12">
                        {/* Left Column */}
                        <div className="space-y-8">
                          {/* Overview */}
                          <div>
                            <h4 className="text-xl font-bold text-brancht-dark mb-4">
                              O que fazemos
                            </h4>
                            <p className="text-gray-700 leading-relaxed">
                              {service.detailedInfo.overview}
                            </p>
                          </div>

                          {/* Process */}
                          <div>
                            <h4 className="text-xl font-bold text-brancht-dark mb-6">
                              Nosso Processo
                            </h4>
                            <div className="space-y-6">
                              {service.detailedInfo.process.map((step, stepIndex) => (
                                <div key={stepIndex} className="flex items-start space-x-4">
                                  <div className="bg-white p-3 rounded-lg shadow-sm">
                                    <step.icon className="h-5 w-5 text-brancht-green" />
                                  </div>
                                  <div>
                                    <h5 className="font-semibold text-brancht-dark mb-2">
                                      {step.title}
                                    </h5>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                      {step.description}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-8">
                          {/* Deliverables */}
                          <div>
                            <h4 className="text-xl font-bold text-brancht-dark mb-4">
                              O que você recebe
                            </h4>
                            <ul className="space-y-3">
                              {service.detailedInfo.deliverables.map((deliverable, deliverableIndex) => (
                                <li key={deliverableIndex} className="flex items-start space-x-3">
                                  <CheckCircle className="h-5 w-5 text-brancht-green mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700">{deliverable}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Additional Info */}
                          <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h5 className="font-semibold text-brancht-dark mb-4">
                              Por que escolher este serviço?
                            </h5>
                            <ul className="space-y-2">
                              {service.benefits.map((benefit, benefitIndex) => (
                                <li key={benefitIndex} className="flex items-start space-x-3">
                                  <CheckCircle className="h-4 w-4 text-brancht-green mt-1 flex-shrink-0" />
                                  <span className="text-gray-600 text-sm">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-brancht-green to-brancht-vibrant-green rounded-2xl p-8 lg:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">
              Pronto para Descobrir Seu Porquê?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Agende uma conversa gratuita e vamos juntos descobrir como transformar 
              o propósito da sua marca em resultados excepcionais.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contato');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-brancht-green px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Agende Sua Consulta Gratuita</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;