type PhotoProps = { name: string; alt: string; className?: string; eager?: boolean; sizes?: string };

export function Photo({ name, alt, className = '', eager = false, sizes = '(max-width: 700px) 100vw, 60vw' }: PhotoProps) {
  return <img className={className} src={`/images/${name}-1280.webp`} srcSet={`/images/${name}-640.webp 640w, /images/${name}-1280.webp 1280w`} sizes={sizes} width={1280} height={853} alt={alt} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} decoding="async" />;
}
