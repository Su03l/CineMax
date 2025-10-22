import { movies } from "@/data/movies"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, Tag, Ticket } from "lucide-react"

interface MovieDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function MovieDetailPage({ params }: MovieDetailPageProps) {
  const { id } = await params
  const movie = movies.find((m) => m.id === Number.parseInt(id))

  if (!movie) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background/95" />
        <img src={movie.poster || "/placeholder.svg"} alt={movie.title} className="h-full w-full object-cover" />

        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <Link
              href="/movies"
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors mb-4 bg-black/20 px-3 py-2 rounded-md backdrop-blur-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Movies
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">{movie.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <span className="inline-flex items-center gap-2 bg-primary px-4 py-1.5 rounded-full text-sm font-medium text-primary-foreground">
                <Tag className="h-4 w-4" />
                {movie.genre}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {movie.duration} minutes
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Synopsis</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{movie.description}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Movie Details</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border bg-card">
                  <p className="text-sm text-muted-foreground mb-1">Genre</p>
                  <p className="text-lg font-semibold text-foreground">{movie.genre}</p>
                </div>
                <div className="p-4 rounded-lg border bg-card">
                  <p className="text-sm text-muted-foreground mb-1">Duration</p>
                  <p className="text-lg font-semibold text-foreground">{movie.duration} minutes</p>
                </div>
                <div className="p-4 rounded-lg border bg-card">
                  <p className="text-sm text-muted-foreground mb-1">Showtime</p>
                  <p className="text-lg font-semibold text-foreground">{movie.showtime}</p>
                </div>
                <div className="p-4 rounded-lg border bg-card">
                  <p className="text-sm text-muted-foreground mb-1">Ticket Price</p>
                  <p className="text-lg font-semibold text-primary">{movie.price} SAR</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="sticky top-4 space-y-6">
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-xl font-bold text-foreground mb-4">Book Your Tickets</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b">
                    <span className="text-muted-foreground">Showtime</span>
                    <span className="font-semibold text-foreground">{movie.showtime}</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b">
                    <span className="text-muted-foreground">Price per ticket</span>
                    <span className="text-xl font-bold text-primary">{movie.price} SAR</span>
                  </div>
                  <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2">
                    <Ticket className="h-5 w-5" />
                    Book Now
                  </button>
                </div>
              </div>

              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-bold text-foreground mb-3">Showtimes This Week</h3>
                <div className="space-y-2">
                  {["Today", "Tomorrow", "Saturday", "Sunday"].map((day) => (
                    <div key={day} className="flex items-center justify-between py-2 border-b last:border-0">
                      <span className="text-sm text-muted-foreground inline-flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {day}
                      </span>
                      <span className="text-sm font-medium text-foreground">{movie.showtime}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
