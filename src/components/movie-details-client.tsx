"use client";

import { getMovieById } from "@/actions/api";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Star, Clock, Calendar } from "lucide-react";
import Image from "next/image";
import Wrapper from "./common/wrapper";
import BackButton from "./common/back-btn";
import { usePathname } from "next/navigation";

type Movie = {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  runtime: number;
  genres: { id: number; name: string }[];
  backdrop_path: string;
  poster_path: string;
  tagline: string;
  budget: number;
  revenue: number;
  production_companies: Array<{
    id: number;
    name: string;
    logo_path: string | null;
    origin_country: string;
  }>;
};

export default function MovieDetails({ id }: { id: string }) {
  const path = usePathname();
  const type = path.includes("movies") ? "movie" : "tv";

  const { data: movie, isLoading } = useQuery<Movie>({
    queryKey: [id],
    queryFn: () => getMovieById(id, type),
  });

  if (isLoading) return null;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Wrapper>
      <div className="w-full md:mt-12 mt-28">
        <div className="mb-4">
          <BackButton />
        </div>
        <div className="relative h-[70vh] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center rounded-2xl"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
            }}
          />
          <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />

          <div className="relative container mx-auto px-4 sm:px-6 py-10 flex flex-col items-center sm:items-end">
            <div className="w-full max-w-6xl">
              <div className="flex flex-col md:flex-row md:items-end gap-y-8 gap-x-12">
                <div className="flex-shrink-0 self-center md:self-auto">
                  <Image
                    width={360}
                    height={540}
                    src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                    alt={movie?.title || "movie"}
                    className="w-40 h-60 sm:w-64 sm:h-96 object-cover rounded-lg shadow-dramatic"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                    {movie?.title}
                  </h1>

                  {movie?.tagline && (
                    <p className="text-lg sm:text-xl text-accent italic font-medium">
                      &quot;{movie.tagline}&quot;
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {movie?.genres.map((genre) => (
                      <Badge key={genre.id} variant="genre">
                        {genre.name}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm sm:text-base md:text-lg">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-accent fill-accent" />
                      <Badge variant="rating">
                        {movie?.vote_average.toFixed(1)}/10
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-5 h-5" />
                      <span>{movie?.runtime} min</span>
                    </div>
                    {movie?.release_date && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-5 h-5" />
                        <span>{formatDate(movie?.release_date)}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-2xl">Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {movie?.overview}
                  </p>
                </CardContent>
              </Card>
              {movie?.production_companies &&
                movie.production_companies.length > 0 && (
                  <Card className="animate-fade-in">
                    <CardHeader>
                      <CardTitle className="text-2xl">
                        Production Companies
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {movie.production_companies.map((company) => (
                          <div
                            key={company.id}
                            className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                          >
                            {company.logo_path && (
                              <Image
                                width={48}
                                height={48}
                                src={`https://image.tmdb.org/t/p/w185${company.logo_path}`}
                                alt={company.name}
                                className="w-12 h-12 object-contain"
                              />
                            )}
                            <div>
                              <p className="font-medium">{company.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {company.origin_country}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
            </div>
            <div className="space-y-6">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Movie Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {movie?.release_date && (
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Release Date
                      </p>
                      <p className="text-lg">
                        {formatDate(movie?.release_date)}
                      </p>
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Runtime
                    </p>
                    <p className="text-lg">{movie?.runtime} minutes</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Rating
                    </p>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-accent fill-accent" />
                      {movie?.vote_average && (
                        <span className="text-lg font-medium">
                          {movie.vote_average.toFixed(1)}/10
                        </span>
                      )}
                    </div>
                  </div>
                  {movie?.budget && movie.budget > 0 && (
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Budget
                      </p>
                      <p className="text-lg">{formatCurrency(movie.budget)}</p>
                    </div>
                  )}
                  {movie?.revenue && movie.revenue > 0 && (
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Revenue
                      </p>
                      <p className="text-lg text-accent font-medium">
                        {formatCurrency(movie.revenue)}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
