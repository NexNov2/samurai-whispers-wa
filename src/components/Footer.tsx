import logoJuliano from '@/assets/logo_juliano.png';

const Footer = () => {
  return (
    <footer className="bg-background py-12 border-t border-primary/20">
      <div className="container mx-auto px-4 text-center">
        <img 
          src={logoJuliano} 
          alt="Juliano Mentor" 
          className="h-16 w-auto mx-auto mb-6"
        />
        <p className="text-muted-foreground text-sm mb-2">
          © 2026 Armas Invisíveis. Todos os direitos reservados.
        </p>
        <p className="text-muted-foreground text-sm">
          Site desenvolvido por NexNov — <a href="https://www.nexnov.com.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.nexnov.com.br</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
