interface TestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
}

const TestimonialCard = ({ name, role, testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-card p-6 md:p-8 rounded-xl gold-border transition-all duration-300 hover:gold-glow">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
          <span className="text-primary font-bold text-xl">{name.charAt(0)}</span>
        </div>
        <div>
          <h4 className="font-montserrat font-bold text-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
      <blockquote className="text-foreground/90 leading-relaxed italic">
        "{testimonial}"
      </blockquote>
    </div>
  );
};

export default TestimonialCard;
