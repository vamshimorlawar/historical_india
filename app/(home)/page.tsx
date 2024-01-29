import ArticleCard from "@/components/ArticleCard";
import ContibutorCard from "@/components/ContributorCard";
import QuoteBanner from "@/components/QuoteBanner";
import { Separator } from "@/components/ui/separator";

const fetchData = async () => {
  const newArticleOptions = { type: "new", limit: 5, skip: 0 };
  const topArticleOptions = { type: "top", limit: 5, skip: 0 };
  const topContributorOptions = { type: "top", limit: 5, skip: 0 };

  try {
    let newArticles: any = [];
    let topArticles: any = [];
    let topContributors: any = [];
    const [newArticlesResponse, topArticlesResponse, topContributorsResponse] =
      await Promise.all([
        fetch(
          `http://localhost:3000/api/getArticles?options=${JSON.stringify(
            newArticleOptions
          )}`
        ),
        fetch(
          `http://localhost:3000/api/getArticles?options=${JSON.stringify(
            topArticleOptions
          )}`
        ),
        fetch(
          `http://localhost:3000/api/getContributors?options=${JSON.stringify(
            topContributorOptions
          )}`
        ),
      ]);

    const [newArticlesData, topArticlesData, topContributorsData] =
      await Promise.all([
        newArticlesResponse.json(),
        topArticlesResponse.json(),
        topContributorsResponse.json(),
      ]);

    newArticles = newArticlesData.articles;
    topArticles = topArticlesData.articles;
    topContributors = topContributorsData.contributors;

    return { topArticles, newArticles, topContributors };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const HomePage = async () => {
  const data = await fetchData();
  const newArticles: any = data.newArticles;
  const topArticles: any = data.topArticles;
  const topContributors: any = data.topContributors;

  return (
    <div className="mb-20">
      <div className="flex items-center bg-hero bg-no-repeat bg-cover justify-center flex-col w-100 h-[500px]"></div>
      <div className="mt-10 px-24">
        <ArticleCard articles={topArticles} sectionTitle="Top Articles" />
        <Separator className="my-4" />
        <ArticleCard articles={newArticles} sectionTitle="New Articles" />
        <Separator className="my-4" />
        <ContibutorCard
          contributors={topContributors}
          sectionTitle="Top Contributors"
        />
        <Separator className="my-4" />
      </div>
      <QuoteBanner />
    </div>
  );
};

export default HomePage;
