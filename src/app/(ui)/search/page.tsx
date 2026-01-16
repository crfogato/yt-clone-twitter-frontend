import { TweetItem } from "@/components/tweet/tweet-item";
import { GeneralHeader } from "@/components/ui/general-header";
import { SearchInput } from "@/components/ui/search-input";
import { tweet } from "@/data/tweet";
import { redirect } from "next/navigation";

type Props = {
  searchParams: Promise<{
    q: string | undefined;
  }>;
};

export default async function Page({ searchParams }: Props) {
  const params = await searchParams;
  if (!params.q) redirect("/");

  return (
    <div className="">
      <GeneralHeader backHref="/">
        <SearchInput defaultValue={params.q} />
      </GeneralHeader>
      <div className="border-t-2 border-gray-900">
        <TweetItem tweet={tweet} />
        <TweetItem tweet={tweet} />
        <TweetItem tweet={tweet} />
        <TweetItem tweet={tweet} />
        <TweetItem tweet={tweet} />
      </div>
    </div>
  );
}
