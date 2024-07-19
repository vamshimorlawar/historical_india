import ArticleCard from "@/components/ArticleCard";
import CarouselSection from "@/components/CarouselSection";
import ContibutorCard from "@/components/ContributorCard";
import ExploreBanner from "@/components/ExploreBanner";
import HeroBanner from "@/components/HeroBanner";
import QuoteBanner from "@/components/QuoteBanner";
import { RunMarquee } from "@/components/RunMarquee";
import { TopCarouselSection } from "@/components/TopCarouselSection";
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
          )}`,
          {
            cache: "no-store",
          }
        ),
        fetch(
          `http://localhost:3000/api/getArticles?options=${JSON.stringify(
            topArticleOptions
          )}`,
          {
            cache: "no-store",
          }
        ),
        fetch(
          `http://localhost:3000/api/getContributors?options=${JSON.stringify(
            topContributorOptions
          )}`,
          {
            cache: "no-store",
          }
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
      <TopCarouselSection />
      <RunMarquee />
      <HeroBanner />
      <div className="md:mx-48">
        <ArticleCard articles={topArticles} sectionTitle="Top Articles" />
        <ArticleCard articles={newArticles} sectionTitle="New Articles" />
      </div>
      <div className="md:mx-48">
        <CarouselSection />
      </div>
      <div className="md:mx-48">
        <ContibutorCard
          contributors={topContributors}
          sectionTitle="Top Contributors"
        />
      </div>
    </div>
  );
};

export default HomePage;
