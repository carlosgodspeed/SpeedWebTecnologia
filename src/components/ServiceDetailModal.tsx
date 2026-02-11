import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ServiceDetail {
  title: string;
  description: string;
  benefits: string[];
  features: string[];
  technologies?: string[];
  callToAction: string;
}

const serviceDetails: Record<string, ServiceDetail> = {
  "Sites Institucionais": {
    title: "Sites Institucionais",
    description:
      "Um site institucional é a vitrine digital da sua empresa. Ele apresenta quem você é, o que faz e como pode ajudar seus clientes.",
    benefits: [
      "Mais credibilidade e profissionalismo",
      "Presença online para seus clientes encontrarem você",
      "Fortalecimento da sua marca",
      "Canal direto de contato",
      "Mais chances de fechar novos negócios",
    ],
    features: [
      "Página inicial moderna",
      "Página sobre a empresa",
      "Página de serviços ou produtos",
      "Galeria de fotos ou projetos",
      "Formulário de contato",
      "Botões para WhatsApp e redes sociais",
    ],
    technologies: [
      "Site rápido e adaptado para celular",
      "Otimizado para aparecer no Google",
      "Hospedagem segura",
      "Certificado de segurança (HTTPS)",
    ],
    callToAction: "Solicitar Orçamento para Site Institucional",
  },

  "Landing Pages": {
    title: "Landing Pages",
    description:
      "Página criada com foco total em gerar contatos ou vendas, ideal para campanhas e anúncios.",
    benefits: [
      "Mais contatos e pedidos de orçamento",
      "Ideal para anúncios no Instagram e Google",
      "Comunicação direta e objetiva",
      "Maior chance de conversão",
    ],
    features: [
      "Texto persuasivo focado em vendas",
      "Botões estratégicos de ação",
      "Formulário para captar clientes",
      "Depoimentos ou provas sociais",
      "Design moderno e profissional",
    ],
    technologies: [
      "Carregamento rápido",
      "Totalmente adaptada para celular",
      "Integração com campanhas de marketing",
    ],
    callToAction: "Solicitar Orçamento para Landing Page",
  },

  "Sistemas Web": {
    title: "Sistemas Web",
    description:
      "Sistema personalizado para organizar, automatizar e facilitar os processos da sua empresa.",
    benefits: [
      "Organização das informações em um só lugar",
      "Redução de erros e retrabalho",
      "Economia de tempo nos processos",
      "Acesso de qualquer lugar com internet",
      "Sistema que cresce junto com sua empresa",
    ],
    features: [
      "Painel administrativo personalizado",
      "Controle de usuários",
      "Relatórios e exportação de dados",
    ],
    technologies: [
      "Sistema rápido e seguro",
      "Banco de dados protegido",
      "Login seguro",
    ],
    callToAction: "Solicitar Orçamento para Sistema Web",
  },

  "Aplicações Front-end": {
    title: "Aplicações Front-end",
    description:
      "Interfaces modernas e interativas que proporcionam uma excelente experiência ao usuário.",
    benefits: [
      "Visual moderno e profissional",
      "Experiência agradável para o usuário",
      "Compatível com celular e computador",
      "Navegação rápida e intuitiva",
    ],
    features: [
      "Layout personalizado",
      "Animações suaves",
      "Modo claro e escuro (opcional)",
      "Design focado na experiência do usuário",
      "Alta performance",
    ],
    technologies: [
      "Tecnologias modernas",
      "Código organizado e fácil manutenção",
      "Carregamento rápido",
    ],
    callToAction: "Solicitar Orçamento para Aplicação Front-end",
  },

    "Portfólio Pessoal": {
    title: "Portfólio",
    description:
      "Desenvolvimento de páginas de portfólio profissionais para apresentar seus projetos, habilidades e experiências de forma estratégica, fortalecendo sua autoridade e aumentando suas oportunidades no mercado.",
    benefits: [
      "Demonstração clara das suas habilidades e projetos",
      "Fortalecimento da sua marca pessoal ou profissional",
      "Maior credibilidade perante clientes e recrutadores",
      "Diferencial competitivo no mercado",
    ],
    features: [
      "Apresentação personalizada de projetos",
      "Seção sobre você ou sua empresa",
      "Descrição detalhada de cada trabalho realizado",
      "Galeria visual organizada",
      "Links para redes sociais e contato",
    ],
    technologies: [
      "Design moderno e responsivo",
      "Otimização para mecanismos de busca (SEO)",
      "Carregamento rápido e alta performance",
    ],
    callToAction: "Solicitar Orçamento para Portfólio",
  },


  "Manutenção e Otimização": {
    title: "Manutenção e Otimização",
    description:
      "Serviço contínuo para manter seu site ou sistema sempre funcionando corretamente.",
    benefits: [
      "Site sempre atualizado e seguro",
      "Correção rápida de problemas",
      "Melhor desempenho e velocidade",
      "Suporte técnico quando precisar",
    ],
    features: [
      "Atualizações de segurança",
      "Backup automático",
      "Correção de erros",
      "Otimização de velocidade",
      "Relatórios de desempenho",
    ],
    technologies: [
      "Monitoramento constante",
      "Ferramentas de segurança",
      "Otimização para melhor desempenho",
    ],
    callToAction: "Solicitar Orçamento para Manutenção",
  },
};

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle: string;
}

const ServiceDetailModal = ({
  isOpen,
  onClose,
  serviceTitle,
}: ServiceDetailModalProps) => {
  const service = serviceDetails[serviceTitle];

  if (!service) return null;

  const handleRequestQuote = () => {
    onClose();
    const contactSection = document.getElementById("contato");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] p-0 bg-card border-border overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold gradient-text">
            {service.title}
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="max-h-[calc(90vh-120px)] px-6">
          <div className="space-y-6 pb-6">
            <p className="text-muted-foreground leading-relaxed">
              {service.description}
            </p>

            <div>
              <h4 className="font-semibold text-lg mb-3 text-foreground">
                Benefícios
              </h4>
              <ul className="space-y-2">
                {service.benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3 text-foreground">
                O que está incluído
              </h4>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {service.technologies && (
              <div>
                <h4 className="font-semibold text-lg mb-3 text-foreground">
                  Diferenciais
                </h4>
                <ul className="space-y-2">
                  {service.technologies.map((tech, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-4">
              <Button
                onClick={handleRequestQuote}
                size="lg"
                className="w-full glow-effect group"
              >
                {service.callToAction}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailModal;
