import SearchBox from "@/components/common/search-box";
import Wrapper from "@/components/common/wrapper";

export default function Home() {
  return (
    <Wrapper>
      <div className="w-full md:mt-12 mt-28">
        <SearchBox />
      </div>
    </Wrapper>
  );
}
