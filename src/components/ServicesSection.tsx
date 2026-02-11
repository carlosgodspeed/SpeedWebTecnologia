import { useState } from "react";
import { Globe, Layout, Code, Rocket, Settings, Layers, User } from "lucide-react";
import ServiceDetailModal from "./ServiceDetailModal";

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      icon: Globe,
      title: "Sites Institucionais",
      description:
        "Sites profissionais e responsivos que transmitem credibilidade e fortalecem a presença digital da sua empresa.",
    },
    {
      icon: Layout,
      title: "Landing Pages",
      description:
        "Páginas de alta conversão focadas em captura de leads e vendas, com design persuasivo e otimizado.",
    },
    {
      icon: Layers,
      title: "Sistemas Web",
      description:
        "Aplicações web completas para gestão de processos, CRM, ERPs e soluções sob medida para seu negócio.",
    },
    {
      icon: Code,
      title: "Aplicações Front-end",
      description:
        "Interfaces modernas e interativas utilizando as tecnologias mais avançadas do mercado.",
    },
    {
      icon: User,
      title: "Portfólio Pessoal",
      description:
        "Sites personalizados para profissionais que desejam apresentar seus projetos, habilidades e experiências de forma estratégica e profissional.",
    },
    {
      icon: Settings,
      title: "Manutenção e Otimização",
      description:
        "Suporte contínuo, atualizações de segurança e melhorias de performance para manter seu projeto sempre atualizado.",
    },
  ];

  return (
    <section id="servicos" className="py-24 lg:py-32 relative">
      <div className="container px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Soluções completas para sua{" "}
            <span className="gradient-text">presença digital</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Do conceito à implementação, oferecemos um portfólio completo de
            serviços para atender todas as necessidades do seu projeto.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <button
              key={service.title}
              onClick={() => setSelectedService(service.title)}
              className="glass-card rounded-2xl p-6 lg:p-8 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 group animate-fade-up text-left cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              <span className="inline-block mt-4 text-primary text-sm font-medium group-hover:underline">
                Saiba mais →
              </span>
            </button>
          ))}
        </div>
      </div>

      <ServiceDetailModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        serviceTitle={selectedService || ""}
      />
    </section>
  );
};

export default ServicesSection;
