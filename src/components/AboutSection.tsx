import { Target, Eye, Heart } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description:
        "Desenvolver soluções digitais estratégicas e de alto desempenho que impulsionem o crescimento das empresas, otimizem processos e fortaleçam sua presença no ambiente digital.",
      },
    {
      icon: Eye,
      title: "Visão",
      description:
        "Ser reconhecida como uma empresa referência em desenvolvimento de software e experiências digitais, destacando-se pela excelência técnica, inovação constante e geração real de resultados para nossos clientes.",
      },
    {
      icon: Heart,
      title: "Valores",
      description:
        "Atuamos com compromisso, transparência e responsabilidade em cada projeto. Valorizamos a inovação, a qualidade técnica e o foco absoluto em entregar soluções que realmente agreguem valor ao negócio do cliente.",
      },
    ];

  return (
    <section id="sobre" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container relative z-10 px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Sobre Nós
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Quem somos e o que nos{" "}
            <span className="gradient-text">move</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Somos uma software house especializada em criar soluções digitais 
            personalizadas. Com uma equipe experiente e apaixonada por tecnologia, 
            entregamos projetos que fazem a diferença.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="glass-card rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
