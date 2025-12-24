import logoJuliano from '@/assets/logo_juliano.png';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-4 py-3 flex justify-center">
        <img 
          src={logoJuliano} 
          alt="Juliano Mentor" 
          className="h-12 md:h-16 w-auto"
        />
      </div>
    </header>
  );
};

export default Header;
