import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-foreground">404</h1>
        <h2 className="text-2xl font-semibold text-foreground">Movie Not Found</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Sorry, we couldn't find the movie you're looking for. It may have been removed or the link might be incorrect.
        </p>
        <Link
          href="/movies"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors px-6 py-3 rounded-lg font-semibold"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Movies
        </Link>
      </div>
    </div>
  )
}
