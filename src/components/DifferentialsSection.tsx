import { CheckCircle2, Zap, Users, Wrench } from "lucide-react";

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: CheckCircle2,
      title: "Qualidade do Código",
      description:
        "Código limpo, bem documentado e seguindo as melhores práticas de desenvolvimento para garantir manutenibilidade.",
    },
    {
      icon: Zap,
      title: "Alta Performance",
      description:
        "Aplicações otimizadas para carregamento rápido, SEO e excelente experiência do usuário em qualquer dispositivo.",
    },
    {
      icon: Users,
      title: "Foco no Cliente",
      description:
        "Comunicação transparente, acompanhamento contínuo e entregas alinhadas com as necessidades reais do seu negócio.",
    },
    {
      icon: Wrench,
      title: "Soluções Sob Medida",
      description:
        "Cada projeto é único. Desenvolvemos soluções personalizadas que se adaptam perfeitamente aos seus objetivos.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Por que nos escolher
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Nossos{" "}
              <span className="gradient-text">diferenciais</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Não entregamos apenas código — entregamos soluções que geram 
              resultados. Conheça o que nos torna diferentes.
            </p>

            <div className="space-y-6">
              {differentials.map((item, index) => (
                <div
                  key={item.title}
                  className="flex gap-4 animate-slide-in-left"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative glass-card rounded-3xl p-8 lg:p-12">
              {/* Code Snippet Visual */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-primary/60" />
                  <div className="w-3 h-3 rounded-full bg-primary/40" />
                </div>
                <div className="font-mono text-sm space-y-2">
                  <div>
                    <span className="text-primary">const</span>{" "}
                    <span className="text-foreground">projeto</span>{" "}
                    <span className="text-muted-foreground">=</span>{" "}
                    <span className="text-accent">{"{"}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-foreground">qualidade</span>
                    <span className="text-muted-foreground">:</span>{" "}
                    <span className="text-primary/80">"excelência"</span>
                    <span className="text-muted-foreground">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-foreground">performance</span>
                    <span className="text-muted-foreground">:</span>{" "}
                    <span className="text-primary/80">"otimizada"</span>
                    <span className="text-muted-foreground">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-foreground">suporte</span>
                    <span className="text-muted-foreground">:</span>{" "}
                    <span className="text-primary/80">"dedicado"</span>
                    <span className="text-muted-foreground">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-foreground">resultado</span>
                    <span className="text-muted-foreground">:</span>{" "}
                    <span className="text-primary">true</span>
                  </div>
                  <div>
                    <span className="text-accent">{"}"}</span>
                    <span className="text-muted-foreground">;</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-2xl blur-xl animate-pulse-glow" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/10 rounded-2xl blur-xl animate-pulse-glow delay-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
