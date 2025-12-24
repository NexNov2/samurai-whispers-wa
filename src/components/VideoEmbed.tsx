interface VideoEmbedProps {
  type: 'youtube' | 'vimeo';
  videoId: string;
  className?: string;
}

const VideoEmbed = ({ type, videoId, className = '' }: VideoEmbedProps) => {
  const embedUrl = type === 'youtube' 
    ? `https://www.youtube.com/embed/${videoId}?rel=0` 
    : `https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479`;

  return (
    <div className={`relative w-full overflow-hidden rounded-xl gold-border gold-glow ${className}`}>
      <div className="relative pt-[56.25%]">
        <iframe
          src={embedUrl}
          title="Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
    </div>
  );
};

export default VideoEmbed;
