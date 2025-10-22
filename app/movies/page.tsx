"use client"

import { useState, useMemo } from "react"
import { movies } from "@/data/movies"
import MovieCard from "@/components/MovieCard"
import SearchBar from "@/components/SearchBar"

export default function Movies() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredMovies = useMemo(() => {
    if (!searchQuery.trim()) {
      return movies
    }

    const query = searchQuery.toLowerCase()
    return movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(query) ||
        movie.genre.toLowerCase().includes(query) ||
        movie.description.toLowerCase().includes(query),
    )
  }, [searchQuery])

  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Now Playing</h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed text-pretty">
            Discover the latest blockbusters and timeless classics
          </p>

          {/* Search Bar */}
          <div className="flex justify-center">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search by title, genre, or description..."
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            {filteredMovies.length === movies.length
              ? `Showing all ${movies.length} movies`
              : `Found ${filteredMovies.length} ${filteredMovies.length === 1 ? "movie" : "movies"}`}
          </p>
        </div>

        {/* Movies Grid */}
        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
              <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No movies found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your search terms or browse all movies</p>
            <button
              onClick={() => setSearchQuery("")}
              className="inline-flex items-center justify-center px-6 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </main>
  )
}
