import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectFlynet from "@/assets/project-flynet.jpeg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectDashboard from "@/assets/project-dashboard.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "FlyNet",
      category: "Sistema Web",
      description:
        "Plataforma completa de busca e reserva de voos nacionais e internacionais com interface moderna e intuitiva.",
      image: projectFlynet,
      link: "https://github.com/carlosgodspeed/FlyNet",
      github: "https://github.com/carlosgodspeed/FlyNet",
    },
    {
      title: "Suprema Jurídica",
      category: "Site Institucional",
      description:
        "Website profissional para escritório de advocacia com foco em conversão e credibilidade digital.",
      image: projectEcommerce,
      link: "https://github.com/carlosgodspeed/Lading-page-Advocacia",
      github: "https://github.com/carlosgodspeed/Lading-page-Advocacia",
    },
    {
      title: "Gestão de Estoque",
      category: "Sistema Web",
      description:
        "Sistema completo de gestão de estoque com controle de produtos, movimentações e relatórios em tempo real.",
      image: projectDashboard,
      link: "https://nuclestock.vercel.app/",
      github: "https://github.com/carlosgodspeed/NucleStock",
    },
  ];

  return (
    <section id="projetos" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container relative z-10 px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Portfólio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Projetos que{" "}
            <span className="gradient-text">entregamos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes, 
            cada um com soluções únicas e resultados comprovados.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-2">
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Ver Site
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-1" />
                      Código
                    </a>
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs text-primary font-semibold tracking-wider uppercase">
                  {project.category}
                </span>
                <h3 className="text-lg font-bold mt-2 mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
