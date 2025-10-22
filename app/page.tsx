import Link from "next/link"
import { movies } from "@/data/movies"
import MovieCard from "@/components/MovieCard"

export default function Home() {
  const featuredMovie = movies[0]
  const recentMovies = movies.slice(1, 4)

  return (
    <main>
      {/* Hero Section */}
      <section className="relative  text-white">
        <div className="absolute inset-0 bg-[url('https://i.redd.it/john-wick-4-osaka-continental-film-wallpaper-3840x1596-v0-h65ehny00r2c1.png?width=3840&format=png&auto=webp&s=dfbdc93a9c74d895fec8c40adbea2e3722e80b5e')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30">
              <span className="text-sm font-medium text-blue-200">Movie of the Day</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">{featuredMovie.title}</h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed text-pretty">
              {featuredMovie.description}
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-blue-100">{featuredMovie.duration} minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
                <span className="text-blue-100">{featuredMovie.genre}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-blue-100">{featuredMovie.price} SAR</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/movies"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
              >
                Browse All Movies
              </Link>
              <button className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white/20 transition-colors border border-white/20">
                Watch Trailer
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Now Showing Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Now Showing</h2>
              <p className="text-muted-foreground">Catch the latest blockbusters</p>
            </div>
            <Link href="/movies" className="text-primary font-semibold hover:underline flex items-center gap-2">
              View All
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose CineMax?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Experience cinema like never before with our state-of-the-art facilities and premium services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Premium Screens</h3>
              <p className="text-muted-foreground leading-relaxed">
                Crystal clear 4K projection and immersive Dolby Atmos sound
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Flexible Showtimes</h3>
              <p className="text-muted-foreground leading-relaxed">
                Multiple showtimes throughout the day to fit your schedule
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Comfort Seating</h3>
              <p className="text-muted-foreground leading-relaxed">
                Luxurious reclining seats with ample legroom for maximum comfort
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
