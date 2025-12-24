interface BulletPointProps {
  text: string;
}

const BulletPoint = ({ text }: BulletPointProps) => {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
        <svg className="w-4 h-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <p className="text-secondary-foreground text-base md:text-lg leading-relaxed">{text}</p>
    </div>
  );
};

export default BulletPoint;
