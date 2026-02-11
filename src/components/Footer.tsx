import { Github, Linkedin, Instagram, Heart, ArrowUp } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contato", href: "#contato" },
  ];

  const services = [
    { label: "Sites Institucionais", href: "#servicos" },
    { label: "Landing Pages", href: "#servicos" },
    { label: "Sistemas Web", href: "#servicos" },
    { label: "Portfólio Pessoal", href: "#servicos" },
    { label: "Manutenção", href: "#servicos" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/carlosgodspeed", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/carlos-henrique-4805b31b1/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/speed_tecnologia_/", label: "Instagram" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card/50 border-t border-border/50 pt-16 pb-8">
      <div className="container px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#inicio" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Speed Tecnologia" className="w-10 h-10 object-contain" />
              <span className="font-bold text-lg">Speed Web Tecnologia</span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Transformamos ideias em soluções digitais de excelência. 
              Sua visão, nossa expertise.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Serviços</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>speedtecnologiaweb@gmail.com</li>
              <li>São Paulo, SP - Brasil</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Speed Web Tecnologia
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="Voltar ao topo"
          >
            Voltar ao topo
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
