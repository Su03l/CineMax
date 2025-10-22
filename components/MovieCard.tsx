import type { Movie } from "@/data/movies";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link
      href={`/movies/${movie.id}`}
      rel="noopener noreferrer"
      className="block group relative overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg hover:border-primary"
    >
      <div className="aspect-[2/3] overflow-hidden bg-muted">
        <img
          src={movie.poster || "/placeholder.svg"}
          alt={movie.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-card-foreground mb-2 line-clamp-1">
          {movie.title}
        </h3>

        <p className="text-sm text-muted-foreground mb-3 line-clamp-2 leading-relaxed">
          {movie.description}
        </p>

        <div className="flex items-center justify-between text-sm mb-3">
          <Badge variant="secondary" className="text-xs">
            {movie.genre}
          </Badge>
          <span className="text-muted-foreground">{movie.duration} min</span>
        </div>

        <div className="flex items-center justify-between pt-3 border-t">
          <div>
            <p className="text-xs text-muted-foreground">Showtime</p>
            <p className="text-sm font-semibold text-foreground">
              {movie.showtime}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground">Price</p>
            <p className="text-lg font-bold text-primary">{movie.price} SAR</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
