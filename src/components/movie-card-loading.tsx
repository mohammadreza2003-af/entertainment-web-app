import { Skeleton } from "./ui/skeleton";

type MovieCardLoadingProps = {
  type: "wide" | "normal";
};
export default function MovieCardLoading({ type }: MovieCardLoadingProps) {
  return (
    <Skeleton
      className={`${
        type === "wide"
          ? "sm:w-[440px] w-[220px] h-[130px] sm:h-[220px]"
          : "w-full h-[120px] sm:h-[240px]"
      }`}
    />
  );
}
