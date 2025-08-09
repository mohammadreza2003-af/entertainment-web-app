import Wrapper from "./common/wrapper";
import MovieCardLoading from "./movie-card-loading";
import { Skeleton } from "./ui/skeleton";

type MovieLoadingProps = {
  type?: "home" | "list" | string;
};

export default function MovieLoading({ type = "list" }: MovieLoadingProps) {
  const wideCardCount = 3;
  const normalCardCount = type === "home" ? 8 : 12;

  return (
    <Wrapper>
      <div className="w-full md:mt-12 mt-28">
        {type === "home" && (
          <div className="space-y-8 mb-8">
            <Skeleton className="h-4 w-[200px]" />
            <div className="flex items-center gap-4">
              {Array.from({ length: wideCardCount }).map((_, index) => (
                <MovieCardLoading key={`wide-${index}`} type="wide" />
              ))}
            </div>
          </div>
        )}

        <div className="space-y-8 my-8">
          <Skeleton className="h-4 w-[200px]" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
          {Array.from({ length: normalCardCount }).map((_, index) => (
            <MovieCardLoading key={`normal-${index}`} type="normal" />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
