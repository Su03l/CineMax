export interface Movie {
  id: number;
  title: string;
  description: string;
  genre: string;
  duration: number;
  price: number;
  poster: string;
  showtime: string;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "John Wick: Chapter 5",
    description:
      "The legendary assassin returns for one final vendetta that shakes the underworld to its core.",
    genre: "Action",
    duration: 145,
    price: 55,
    poster:
      "https://i.pinimg.com/736x/24/83/62/248362b83090e77d104dc9d0b98a0e58.jpg",
    showtime: "9:00 PM",
  },
  {
    id: 2,
    title: "Dune: Part Three",
    description:
      "Paul Atreides faces the destiny of the Kwisatz Haderach as the galaxy’s fate hangs in the balance.",
    genre: "Sci-Fi",
    duration: 162,
    price: 60,
    poster:
      "https://posterspy.com/wp-content/uploads/2025/07/Poster-DUNE-part-3-1-PS.jpg",
    showtime: "8:30 PM",
  },
  {
    id: 3,
    title: "Avatar: The Seed of Eywa",
    description:
      "Jake Sully and Neytiri must protect their family from a new threat emerging on Pandora.",
    genre: "Adventure",
    duration: 170,
    price: 58,
    poster:
      "https://i.namu.wiki/i/QzkAud7FJphTXje7SSj0SyzFBgF6vmWmXtGyTc08GK4XlkSZqijcensNRcewuSNT8_zdHGt8gMURXllX3qKjYw.webp",
    showtime: "7:45 PM",
  },
  {
    id: 4,
    title: "Deadpool & Wolverine",
    description:
      "Two of Marvel’s most chaotic heroes team up for a bloody and hilarious multiverse ride.",
    genre: "Action",
    duration: 128,
    price: 50,
    poster: "https://m.media-amazon.com/images/I/810zZ6ger0L.jpg",
    showtime: "10:00 PM",
  },
  {
    id: 5,
    title: "The Batman: Part II",
    description:
      "Gotham faces a chilling new villain as Bruce Wayne questions his role as the city’s protector.",
    genre: "Crime",
    duration: 155,
    price: 55,
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTkwOTZlNWEtN2YxMS00MzY0LWExMzItN2RjMzYzZjFkZGJlXkEyXkFqcGc@._V1_.jpg",
    showtime: "8:00 PM",
  },
  {
    id: 6,
    title: "Mission: Impossible – Dead Reckoning Part Two",
    description:
      "Ethan Hunt returns for his most dangerous mission yet, racing against time to stop global collapse.",
    genre: "Action",
    duration: 160,
    price: 57,
    poster:
      "https://lh4.googleusercontent.com/proxy/Js8vU5UWMw22-EggTWEZhsCHJZYmm5NClkm8T8zpDHUyAH5BtM2eY8xLdNVoCImJYlvyMhJ0trLTxxf5FgUzt4cy4YowYM1TZVaLgEpjDvaPCwbovQIrKQvbY8onmwtBAofpheUfJrXNbc2l9IY9jw4",
    showtime: "9:30 PM",
  },
  {
    id: 7,
    title: "Venom: The Last Dance",
    description:
      "Eddie Brock faces a universe-threatening war as Venom’s species returns for domination.",
    genre: "Sci-Fi",
    duration: 130,
    price: 48,
    poster: "https://m.media-amazon.com/images/I/81fxZOlyEBL.jpg",
    showtime: "7:15 PM",
  },
  {
    id: 8,
    title: "Gladiator II",
    description:
      "Years after Maximus’ death, a new warrior rises amid the chaos of Rome’s final glory.",
    genre: "Drama",
    duration: 150,
    price: 52,
    poster:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/00ec4131526067.5654999cf0832.jpg",
    showtime: "8:10 PM",
  },
  {
    id: 9,
    title: "The Mandalorian: Legacy",
    description:
      "Din Djarin and Grogu face a fractured galaxy in the aftermath of the Empire’s fall.",
    genre: "Sci-Fi",
    duration: 138,
    price: 50,
    poster:
      "https://images.squarespace-cdn.com/content/v1/5bfdc74875f9ee194f3e0add/1595543330944-YAIO922G9ALDF0JS8C1R/The_Mandalorian_TV_Series-526462730-large.jpg",
    showtime: "7:40 PM",
  },
  {
    id: 10,
    title: "Avengers: Secret Wars",
    description:
      "The multiverse collides in Marvel’s most epic battle — heroes and villains from every timeline unite.",
    genre: "Action",
    duration: 175,
    price: 65,
    poster:
      "https://i.pinimg.com/736x/4a/6c/b8/4a6cb81fac408b805d4cc41bc73f50c2.jpg",
    showtime: "9:45 PM",
  },
  {
    id: 11,
    title: "Joker: Folie à Deux",
    description:
      "Arthur Fleck returns, joined by Harley Quinn, in a twisted musical exploration of madness and fame.",
    genre: "Drama",
    duration: 140,
    price: 45,
    poster:
      "https://m.media-amazon.com/images/M/MV5BZTU0ZGI3YzMtZTUwMC00MGJjLWFkNDItMDUzNTUxZjg5N2Y4XkEyXkFqcGc@._V1_.jpg",
    showtime: "8:15 PM",
  },
  {
    id: 12,
    title: "Blade",
    description:
      "The vampire hunter returns to face a rising blood cult threatening humanity’s survival.",
    genre: "Action",
    duration: 135,
    price: 50,
    poster:
      "https://m.media-amazon.com/images/M/MV5BNzAzMmY3OWMtNDgyMS00Y2U4LTlmM2UtY2YwMmM0MDI5ODJmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    showtime: "9:10 PM",
  },
  {
    id: 13,
    title: "Tron: Ares",
    description:
      "A new digital world emerges when AI transcends the boundaries between man and machine.",
    genre: "Sci-Fi",
    duration: 145,
    price: 55,
    poster: "https://m.media-amazon.com/images/I/610xYe0sQIL.jpg",
    showtime: "8:25 PM",
  },
  {
    id: 14,
    title: "Inside Out 2",
    description:
      "Riley navigates new emotions in her teenage years, bringing laughter and tears once again.",
    genre: "Animation",
    duration: 102,
    price: 38,
    poster: "https://m.media-amazon.com/images/I/81do41OmwiL.jpg",
    showtime: "4:30 PM",
  },
  {
    id: 15,
    title: "Kung Fu Panda 4",
    description:
      "Po faces his greatest challenge — passing the torch to a new Dragon Warrior.",
    genre: "Animation",
    duration: 110,
    price: 40,
    poster:
      "https://media-cache.cinematerial.com/p/500x/qhxtainq/kung-fu-panda-4-chinese-movie-poster.jpg?v=1712057492",
    showtime: "5:30 PM",
  },
  {
    id: 16,
    title: "Fantastic Four",
    description:
      "Marvel’s first family enters the MCU with a cosmic-scale adventure of science and heroism.",
    genre: "Sci-Fi",
    duration: 135,
    price: 50,
    poster:
      "https://posterspy.com/wp-content/uploads/2020/02/FFour_Poster_02.jpg",
    showtime: "8:50 PM",
  },
  {
    id: 17,
    title: "The Matrix: Rebooted",
    description:
      "Neo returns as the digital war evolves into something far beyond control.",
    genre: "Sci-Fi",
    duration: 150,
    price: 58,
    poster:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/50/The_Matrix_Resurrections.jpg/250px-The_Matrix_Resurrections.jpg",
    showtime: "9:20 PM",
  },
  {
    id: 18,
    title: "Top Gun: Vengeance",
    description:
      "Maverick faces his legacy as a new generation of pilots takes flight.",
    genre: "Action",
    duration: 140,
    price: 52,
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrH4fcheaXv0-vp42NDfccXrxBDVz9nTgm9g&s",
    showtime: "7:00 PM",
  },
  {
    id: 19,
    title: "A Quiet Place: Day One",
    description:
      "The terrifying beginning of the alien invasion that silenced the world.",
    genre: "Horror",
    duration: 118,
    price: 42,
    poster: "https://m.media-amazon.com/images/I/81B3i3Z7XLL.jpg",
    showtime: "10:10 PM",
  },
  {
    id: 20,
    title: "Mad Max: The Wasteland",
    description:
      "Furiosa and Max join forces once more in a brutal battle for survival in the desert.",
    genre: "Action",
    duration: 155,
    price: 54,
    poster:
      "https://posterspy.com/wp-content/uploads/2024/12/Poster-MAD-MAX-The-Wasteland-Grievity.jpg",
    showtime: "9:15 PM",
  },
  {
    id: 21,
    title: "The Flashpoint Paradox",
    description:
      "Barry Allen must fix a fractured timeline before reality collapses entirely.",
    genre: "Action",
    duration: 138,
    price: 48,
    poster:
      "https://image.tmdb.org/t/p/original/ek9SvmkUfh5QwRGIfK0il4Dfnpe.jpg",
    showtime: "8:00 PM",
  },
  {
    id: 22,
    title: "Spider-Man: Beyond the Spider-Verse",
    description:
      "Miles Morales discovers that saving one universe could destroy another.",
    genre: "Animation",
    duration: 135,
    price: 50,
    poster:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/96a2b503-790b-4c20-bc45-fc9e7b1c5d08/diz9132-255a372e-58a9-4a3f-8ec5-27af0d5b1e7f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi85NmEyYjUwMy03OTBiLTRjMjAtYmM0NS1mYzllN2IxYzVkMDgvZGl6OTEzMi0yNTVhMzcyZS01OGE5LTRhM2YtOGVjNS0yN2FmMGQ1YjFlN2YucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.CTij7cZZTSp-DkEIhH36gnkuEND2CUnjZ7_4HhztNNA",
    showtime: "7:45 PM",
  },
  {
    id: 23,
    title: "The Equalizer 4",
    description:
      "Robert McCall’s final mission pits him against a global crime syndicate.",
    genre: "Thriller",
    duration: 130,
    price: 49,
    poster:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p26083904_b_v13_aa.jpg",
    showtime: "9:40 PM",
  },
  {
    id: 24,
    title: "Edge of Tomorrow 2",
    description:
      "After defeating the Mimics, humanity faces a new temporal threat.",
    genre: "Sci-Fi",
    duration: 142,
    price: 53,
    poster:
      "https://static0.srcdn.com/wordpress/wp-content/uploads/2024/11/screenshot-2024-11-26-at-9-49-01-am.png?q=49&fit=contain&w=335&h=598&dpr=2",
    showtime: "8:50 PM",
  },
  {
    id: 25,
    title: "The Gray Man: Resurrection",
    description:
      "The world’s deadliest assassin is back for another high-stakes chase.",
    genre: "Action",
    duration: 128,
    price: 47,
    poster:
      "https://image.tmdb.org/t/p/original/8cXbitsS6dWQ5gfMTZdorpAAzEH.jpg",
    showtime: "9:00 PM",
  },
  {
    id: 26,
    title: "Interstellar: Return",
    description:
      "A new crew ventures beyond the known universe to reunite with humanity’s lost colony.",
    genre: "Sci-Fi",
    duration: 165,
    price: 60,
    poster:
      "https://m.media-amazon.com/images/I/814E2+pjjzL._AC_UF1000,1000_QL80_.jpg",
    showtime: "8:30 PM",
  },
  {
    id: 27,
    title: "The Conjuring: The Final Rite",
    description:
      "The Warrens confront the most terrifying possession case of their lives.",
    genre: "Horror",
    duration: 120,
    price: 45,
    poster:
      "https://preview.redd.it/new-poster-for-the-conjuring-last-rites-v0-4a68gyttrsif1.jpeg?auto=webp&s=86168f65a43f08b410675f8aae936123988d3a17",
    showtime: "10:00 PM",
  },
  {
    id: 28,
    title: "Creed IV",
    description:
      "Adonis Creed faces a new rival while balancing family, fame, and legacy.",
    genre: "Drama",
    duration: 132,
    price: 48,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMzY2ZGFmNzgtMzU0Ny00YTdkLWIwNDMtYzFlOTJmNzEyOTgxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    showtime: "7:10 PM",
  },
  {
    id: 29,
    title: "Frozen III",
    description:
      "Elsa and Anna embark on a journey that reveals the true origin of their powers.",
    genre: "Animation",
    duration: 115,
    price: 38,
    poster:
      "https://preview.redd.it/my-frozen-iii-poster-v0-dl4f9nhj7o1e1.jpeg?auto=webp&s=6d16a0331a4b31a47388a8ed061aa2045842e80a",
    showtime: "4:45 PM",
  },
  {
    id: 30,
    title: "Black Panther: Legacy of Wakanda",
    description:
      "A new Black Panther must rise to defend Wakanda from its greatest internal threat.",
    genre: "Action",
    duration: 150,
    price: 55,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMGE0ZTEwY2YtM2FhNy00Mjk5LWFmMDctMDUzOGEzNWRjNTZmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    showtime: "8:20 PM",
  },
];
