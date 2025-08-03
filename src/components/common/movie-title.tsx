type MovieTitleProps = {
  title: string;
};
export default function MovieTitle({ title }: MovieTitleProps) {
  return <h2 className="text-2xl font-semibold mb-4 capitalize">{title}</h2>;
}
