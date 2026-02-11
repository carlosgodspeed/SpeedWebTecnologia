import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    description: "",
  });

  const projectTypes = [
    { value: "institutional", label: "Site Institucional" },
    { value: "landing", label: "Landing Page" },
    { value: "portfolio", label: "Portfólio" },
    { value: "webapp", label: "Sistema Web" },
    { value: "frontend", label: "Aplicação Front-end" },
    { value: "other", label: "Outro" },
  ];

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.projectType || !formData.description) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/carlosminibics@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            company: formData.company || "Não informado",
            projectType: formData.projectType,
            description: formData.description,
            _subject: "Novo orçamento - Speed Tecnologia",
            _template: "table",
            _captcha: "false",
          }),
        }
      );

      if (response.ok) {
        toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");

        setFormData({
          name: "",
          email: "",
          company: "",
          projectType: "",
          description: "",
        });
      } else {
        toast.error("Erro ao enviar mensagem. Tente novamente.");
      }
    } catch (error) {
      toast.error("Erro ao enviar mensagem. Verifique sua conexão.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container relative z-10 px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Contato
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Vamos construir algo{" "}
            <span className="gradient-text">incrível juntos?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Conte-nos sobre seu projeto e receba um orçamento personalizado.
            Nossa equipe está pronta para transformar sua ideia em realidade.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-8 lg:p-10 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">
                  Nome <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  E-mail <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="company">Empresa (opcional)</Label>
                <Input
                  id="company"
                  placeholder="Nome da sua empresa"
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectType">
                  Tipo de Projeto <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={formData.projectType}
                  onValueChange={(value) => handleChange("projectType", value)}
                >
                  <SelectTrigger id="projectType" className="bg-input">
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {projectTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">
                Descrição do Projeto{" "}
                <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="description"
                placeholder="Conte-nos sobre sua ideia, funcionalidades desejadas, referências visuais, prazo estimado..."
                rows={5}
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                required
                className="resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full glow-effect"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Mensagem
                </>
              )}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Responderemos em até 24 horas úteis. Seus dados estão seguros conosco.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
