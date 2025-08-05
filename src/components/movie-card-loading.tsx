import { Skeleton } from "./ui/skeleton";

type MovieCardLoadingProps = {
  type: "wide" | "normal";
};
export default function MovieCardLoading({ type }: MovieCardLoadingProps) {
  return (
    <Skeleton
      className={`${
        type === "wide"
          ? "sm:w-[300px] lg:w-[400px] w-[220px] h-[280px] sm:h-[500px]"
          : "w-full h-[220px] sm:h-[400px]"
      }`}
    />
  );
}
