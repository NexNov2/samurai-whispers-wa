import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VideoEmbed from '@/components/VideoEmbed';
import CTAButton from '@/components/CTAButton';
import CountdownTimer from '@/components/CountdownTimer';
import BulletPoint from '@/components/BulletPoint';
import TestimonialCard from '@/components/TestimonialCard';
import HighEndCard from '@/components/HighEndCard';
import apresentImage from '@/assets/apresent.jpg';
import julianoImage from '@/assets/juliano.webp';

const Index = () => {
  const targetDate = new Date('2026-01-15T23:59:00');

  const bullets = [
    "Presença imediata em reuniões, negociações e apresentações",
    "Autoridade percebida sem elevar a voz",
    "Clareza para ser entendido e respeitado",
    "Comunicação que influencia decisões",
    "Persuasão aplicada sem parecer vendedor",
    "Segurança emocional ao falar sob pressão"
  ];

  const testimonials = [
    {
      name: "Salete Cipra",
      role: "Empresária e Terapeuta Comportamental",
      testimonial: "A mentoria com Juliano fortaleceu minha confiança e posicionamento frente a clientes de Alto Ticket. Aumentou o valor percebido dos meus serviços e atendimentos. Agora consigo agenda sempre lotada com clientes Classe A. Juliano é um dos melhores mentores que conheci. Ele transformou minha vida."
    },
    {
      name: "Marcos Czar",
      role: "Empresário",
      testimonial: "A mentoria com Juliano ajudou eu e meu sócio a alavancar os negócios e comunicar maior valor sobre nossos serviços. Juliano trouxe transformação e nos guiou com precisão sobre como aprimorar nosso discurso e fortalecer nossa imagem profissional. As apresentações, vendas e relacionamentos comerciais se tornaram muito mais poderosos e lucrativos."
    },
    {
      name: "Érica de Luca",
      role: "Veterinária e Terapeuta",
      testimonial: "A mentoria com Juliano me ajudou a montar uma palestra profissional, ganhei confiança e muito mais autoridade. Após a mentoria já publiquei e lancei um livro na Bienal do Livro em São Paulo e fiz várias palestras em eventos importantes."
    },
    {
      name: "Rodrigo",
      role: "Sócio VAE Saúde",
      testimonial: "A mentoria com Juliano transformou o atendimento em padrão de excelência. Nossos profissionais estão muito mais confiantes, estratégicos e altamente qualificados. Foi uma transformação real e consistente."
    }
  ];

  const highEndOptions = [
    {
      title: "A LÂMINA DA AUTORIDADE",
      description: "Comunicação de alta performance aplicada.",
      price: "R$ 1.497,00",
      whatsappMessage: "Olá. Quero saber mais sobre A Lâmina da Autoridade"
    },
    {
      title: "ARSENAL DE INFLUÊNCIA",
      description: "Mentoria híbrida para líderes e empresários.",
      price: "R$ 6.000,00",
      whatsappMessage: "Olá. Quero saber mais sobre o Arsenal de Influência"
    },
    {
      title: "SHOGUN IMPERATOR",
      description: "Mentoria master individual.",
      price: "R$ 18.000,00",
      whatsappMessage: "Olá. Quero informações sobre a mentoria Shogun Imperator"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with VSL - First Fold */}
      <section className="pt-24 md:pt-28 pb-16 md:pb-24 section-dark relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${apresentImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(2px)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/95 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* VSL Video */}
          <div className="max-w-4xl mx-auto mb-12">
            <VideoEmbed type="youtube" videoId="Bkq3xPm3qoY" />
          </div>

          {/* Headline */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-montserrat font-bold leading-tight mb-6 animate-fade-in">
              <span className="text-gold-gradient">As Armas Invisíveis</span>
              <br />
              <span className="text-foreground">da Comunicação de Alta Performance!</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary font-semibold mb-4 animate-fade-in delay-100">
              Nenhum líder mediano conhece. Vencedores usam em silêncio.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 animate-fade-in delay-200">
              Para líderes e profissionais que sabem que falar bem não é suficiente, é preciso ser percebido com peso, direção e influência.
            </p>

            <div className="animate-fade-in delay-300">
              <CTAButton 
                text="ATIVAR MINHA AUTORIDADE AGORA" 
                whatsappMessage="Olá. Vim pelo site e quero ativar minha autoridade na comunicação"
                variant="primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activation Text Section */}
      <section className="py-16 md:py-24 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-8">
              Isso não é para assistir.<br />
              <span className="text-primary">É para ativar.</span>
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Em menos de 2 horas, você passa por 20 ativações práticas que ajustam sua comunicação, presença e influência, com aplicação imediata no mesmo dia.
            </p>
            <div className="space-y-4 text-lg text-foreground/80">
              <p>Sem teoria desnecessária.</p>
              <p>Sem motivação vazia.</p>
              <p>Sem conteúdo para inflar ego.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bullets Section */}
      <section className="py-16 md:py-24 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-center text-lg md:text-xl text-secondary-foreground font-semibold mb-10">
              🎯 O que você DESTRAVA quando ajusta sua comunicação no nível certo:
            </p>
            <div className="space-y-6 mb-12">
              {bullets.map((bullet, index) => (
                <BulletPoint key={index} text={bullet} />
              ))}
            </div>
            <div className="text-center">
              <CTAButton 
                text="QUERO ENTENDER SE ISSO É PRA MIM" 
                whatsappMessage="Olá. Estou no site Armas Invisíveis e quero entender se isso é pra mim"
                variant="primary"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Urgency Section */}
      <section className="py-16 md:py-24 section-dark border-t-4 border-primary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-card via-card to-primary/10 p-8 md:p-12 rounded-2xl border-2 border-primary shadow-2xl shadow-primary/20 mb-12">
              <p className="text-2xl md:text-4xl font-montserrat font-bold text-foreground mb-6">
                ⚔️ ATIVAÇÃO COM PRAZO
              </p>
              <p className="text-xl md:text-2xl font-bold text-primary mb-6">
                LEIA COM ATENÇÃO
              </p>
              <div className="space-y-3">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Este não é um curso aberto e eterno.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  O ARMAS INVISÍVEIS funciona em ciclos de ativação.
                </p>
                <p className="text-lg text-foreground font-semibold leading-relaxed">
                  E os bônus abaixo não permanecem disponíveis após o encerramento deste ciclo.
                </p>
              </div>
            </div>

            {/* Price with Countdown */}
            <div className="bg-card p-8 md:p-10 rounded-2xl gold-border gold-glow mb-10">
              <p className="text-lg text-muted-foreground font-medium mb-4">
                Investimento para ativação neste ciclo
              </p>
              <p className="text-5xl md:text-7xl font-montserrat font-bold text-primary mb-4">
                R$ 49,90
              </p>
              <p className="text-xl md:text-2xl text-primary font-bold mb-6">
                ⏳ Disponível até: 15/01/2026 às 23:59
              </p>
              <CountdownTimer targetDate={targetDate} />
            </div>

            {/* What's included */}
            <div className="bg-card/50 p-8 rounded-2xl border border-primary/30 mb-10 text-left">
              <p className="text-xl font-montserrat font-bold text-foreground mb-6 text-center">
                O que está incluso:
              </p>
              <div className="space-y-4 text-lg text-foreground/90">
                <p>✓ 20 aulas curtas e práticas</p>
                <p>✓ Cortes de mentorias e sessões reais</p>
                <p>✓ Material em PDF e checklists Shogun</p>
                <p>✓ Sessão Executiva Shogun ao vivo (apenas para os 50 primeiros inscritos)</p>
                <p>✓ Acesso via plataforma responsiva</p>
              </div>
            </div>

            {/* Exclusive Bonuses */}
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-8 md:p-10 rounded-2xl border-2 border-primary mb-10">
              <p className="text-2xl md:text-3xl font-montserrat font-bold text-primary mb-8">
                🎁 BÔNUS EXCLUSIVOS
              </p>
              
              <div className="space-y-6 text-left">
                {/* Bônus 1 */}
                <div className="bg-card/80 p-6 rounded-xl border border-primary/30">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <div>
                      <p className="text-lg font-bold text-foreground">Bônus 1 — Checklist Shogun de Comunicação Executiva</p>
                      <p className="text-primary font-semibold">até 31 dezembro</p>
                    </div>
                    <p className="text-lg text-muted-foreground">Valor R$ 97</p>
                  </div>
                </div>

                {/* Bônus 2 */}
                <div className="bg-card/80 p-6 rounded-xl border border-primary/30">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <div>
                      <p className="text-lg font-bold text-foreground">Bônus 2 — Whitepaper Premium "A Lâmina Infalível da Comunicação Samurai"</p>
                      <p className="text-primary font-semibold">até 7 janeiro</p>
                    </div>
                    <p className="text-lg text-muted-foreground">Valor R$ 197</p>
                  </div>
                </div>

                {/* Bônus 3 */}
                <div className="bg-card/80 p-6 rounded-xl border border-primary/30">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <div>
                      <p className="text-lg font-bold text-foreground">Bônus 3 — Sessão Executiva Shogun no Zoom (ao vivo)</p>
                      <p className="text-primary font-semibold">até 15 janeiro</p>
                    </div>
                    <p className="text-lg text-muted-foreground">Valor R$ 297</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-primary/30">
                <p className="text-xl md:text-2xl font-bold text-foreground">
                  Valor total dos bônus: <span className="text-primary">R$ 591,00</span>
                </p>
                <p className="text-lg text-foreground/80 mt-2">
                  Incluídos gratuitamente no treinamento.
                </p>
              </div>
            </div>

            <div className="bg-primary/10 p-6 rounded-xl border border-primary/30 mb-10">
              <p className="text-lg text-foreground font-medium">
                💰 Esse valor é de validação. Depois volta para R$ 97,00.
              </p>
            </div>

            <CTAButton 
              text="QUERO DESTRAVAR MINHA COMUNICAÇÃO" 
              whatsappMessage="Olá. Vim pelo site e quero destravar minha comunicação com as Armas Invisíveis"
              variant="primary"
            />
          </div>
        </div>
      </section>

      {/* Social Proof Video */}
      <section className="py-16 md:py-24 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="relative w-full overflow-hidden rounded-xl gold-border gold-glow">
              <div className="relative pt-[177.78%]">
                <iframe
                  src="https://player.vimeo.com/video/1133995540?badge=0&autopause=0&player_id=0&app_id=58479"
                  title="Depoimentos"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Micro Commitment */}
      <section className="py-16 md:py-24 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl md:text-2xl font-montserrat font-bold text-secondary-foreground mb-10 leading-relaxed">
              "Se você aplicar UMA dessas armas nas próximas 48 horas,<br />
              <span className="text-primary">já paga esse investimento.</span>"
            </p>
            <CTAButton 
              text="FALAR COM A EQUIPE AGORA" 
              whatsappMessage="Olá. Vim pelo site e quero falar com a equipe sobre as Armas Invisíveis"
              variant="primary"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
