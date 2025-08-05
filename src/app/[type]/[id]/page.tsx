import MovieDetails from "@/components/movie-details-client";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  return <MovieDetails id={id} />;
}
