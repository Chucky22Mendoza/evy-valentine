import { CardProps } from '../domain/sections';

function Card({
  quote,
  img,
  slug,
  type = 'image',
  children
}: CardProps) {
  return (
    <div className="space-y-4">
      <p className="text-xl italic">{quote}</p>
      {
        type === 'video'
          ? (
            <video
              src={img}
              autoPlay
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          ) : (
            <img
              src={img}
              alt={slug}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          )
      }
      {children}
    </div>
  );
}

export default Card;