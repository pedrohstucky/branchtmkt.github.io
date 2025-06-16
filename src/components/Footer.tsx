import React, { useState } from 'react';
import IMAGES from '../../public/images/Images'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Instagram,
  Linkedin,
  Facebook,
  CheckCircle
} from 'lucide-react';

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    service: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
      service: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <footer id="contato" className="bg-brancht-dark text-white">
      {/* Contact Form Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Contact Info */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Vamos Descobrir Seu <span className="text-brancht-green">Porquê</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Pronto para transformar o propósito da sua marca em resultados extraordinários? 
                  Agende uma conversa gratuita e vamos começar essa jornada juntos.
                </p>

                {/* Contact Details */}
                <div className="space-y-6 mb-12">
                  <div className="flex items-center space-x-4">
                    <div className="bg-brancht-green p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-300">contato@branchtmkt.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-brancht-green p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Telefone</div>
                      <div className="text-gray-300">(45) 99119-9680</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-brancht-green p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Localização</div>
                      <div className="text-gray-300">Foz do Iguaçu, PR - Brasil</div>
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Por que escolher a Brancht?</h3>
                  {[
                    'Consultoria gratuita inicial',
                    'Estratégias baseadas em propósito',
                    'Resultados mensuráveis garantidos',
                    'Atendimento personalizado'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-brancht-green flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="bg-brancht-green p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-brancht-green">Mensagem Enviada!</h3>
                    <p className="text-gray-300">
                      Obrigado pelo interesse! Entraremos em contato em até 24 horas.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Nome *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-brancht-green transition-colors duration-300"
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-brancht-green transition-colors duration-300"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Empresa</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-brancht-green transition-colors duration-300"
                          placeholder="Nome da sua empresa"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Telefone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-brancht-green transition-colors duration-300"
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Serviço de Interesse</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-brancht-dark transition-colors duration-300"
                      >
                        <option value="">Selecione um serviço</option>
                        <option value="estrategia">Estratégia de Marca</option>
                        <option value="design">Design e Identidade</option>
                        <option value="digital">Marketing Digital</option>
                        <option value="seo">SEO e Conteúdo</option>
                        <option value="website">Website e Landing Pages</option>
                        <option value="consultoria">Consultoria Completa</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Mensagem *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-brancht-green transition-colors duration-300 resize-none"
                        placeholder="Conte-nos sobre seu projeto e como podemos ajudar..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-brancht-green to-brancht-vibrant-green text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Send className="h-5 w-5" />
                      <span>Enviar Mensagem</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Logo and Copyright */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <img src={IMAGES.footer} alt="footer_logo" className='h-10 w-10'/>
              </div>
              <span className="text-gray-400">|</span>
              <span className="text-gray-400 text-sm">
                © 2025 Brancht. Todos os direitos reservados.
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Siga-nos:</span>
              <div className="flex space-x-3">
                <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-brancht-green transition-colors duration-300">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-brancht-green transition-colors duration-300">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-brancht-green transition-colors duration-300">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;