import Wrapper from "./common/wrapper";
import MovieCardLoading from "./movie-card-loading";
import { Skeleton } from "./ui/skeleton";

type MovieLoadingProps = {
  type?: string;
};

export default function MovieLoading({ type }: MovieLoadingProps) {
  return (
    <Wrapper>
      <div className="w-full md:mt-12 mt-28">
        <Skeleton className="h-8 w-[400px] mb-8" />
        {type === "home" && (
          <>
            <div className="space-y-8 mb-8">
              <Skeleton className="h-4 w-[200px]" />
            </div>
            <div className="flex items-center gap-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <MovieCardLoading key={index} type="wide" />
              ))}
            </div>
          </>
        )}
        <div className="space-y-8 my-8">
          <Skeleton className="h-4 w-[200px]" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
          {Array.from({ length: type === "home" ? 8 : 12 }).map((_, index) => (
            <MovieCardLoading key={index} type="normal" />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
