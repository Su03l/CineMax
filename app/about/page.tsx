export default function About() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">About CineMax</h1>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
            Where stories come to life on the big screen
          </p>
        </div>

        {/* History Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-card rounded-lg border p-8 md:p-12">
            <h2 className="text-3xl font-bold text-card-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 1995, CineMax has been at the forefront of cinematic excellence for nearly three decades.
                What started as a single-screen theater in the heart of the city has grown into a premier entertainment
                destination, beloved by movie enthusiasts and casual viewers alike.
              </p>
              <p>
                Our journey began with a simple vision: to create a space where people could escape reality and immerse
                themselves in the magic of cinema. Over the years, we've stayed true to that vision while continuously
                evolving to meet the changing needs of our audience.
              </p>
              <p>
                Today, CineMax stands as a testament to our commitment to quality, innovation, and the timeless art of
                storytelling through film. We've upgraded our facilities with cutting-edge technology, expanded our
                screening rooms, and enhanced every aspect of the moviegoing experience.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg border p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">Excellence</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We strive for excellence in every aspect of our service, from picture quality to customer care.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg border p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">Community</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We're more than a cinema; we're a gathering place for our community to share experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg border p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">Innovation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We embrace new technologies and ideas to enhance the cinematic experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg border p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">Passion</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our love for cinema drives everything we do, from film selection to theater design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg leading-relaxed text-blue-50 mb-6">
              To provide an unparalleled cinematic experience that brings people together, sparks imagination, and
              creates lasting memories. We believe in the power of storytelling and its ability to inspire, educate, and
              entertain audiences of all ages.
            </p>
            <p className="text-lg leading-relaxed text-blue-50">
              Through state-of-the-art technology, exceptional customer service, and a carefully curated selection of
              films, we aim to be the premier destination for movie lovers in our community and beyond.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
