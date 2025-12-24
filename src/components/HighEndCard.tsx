interface HighEndCardProps {
  title: string;
  description: string;
  price?: string;
  whatsappMessage: string;
}

const WHATSAPP_BASE = "https://wa.me/5541984511341";

const HighEndCard = ({ title, description, price, whatsappMessage }: HighEndCardProps) => {
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const href = `${WHATSAPP_BASE}?text=${encodedMessage}`;

  return (
    <div className="bg-background p-6 md:p-8 rounded-xl border border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group flex flex-col h-full">
      <h3 className="font-montserrat font-bold text-xl md:text-2xl text-primary mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
        {description}
      </p>
      {price && (
        <p className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-4">
          {price}
        </p>
      )}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-primary font-semibold hover:underline transition-all"
      >
        Solicitar proposta premium
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  );
};

export default HighEndCard;
