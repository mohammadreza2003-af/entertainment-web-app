import ClientMoviesOrSeries from "@/components/client-movies-series";

type PageProps = {
  params: {
    type: "movies" | "series";
  };
};

export default async function Page({ params }: PageProps) {
  const { type } = await params;
  return <ClientMoviesOrSeries type={type} />;
}
