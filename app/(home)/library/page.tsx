"use client"
import { ObjectId } from "mongoose";
import { DataTable } from "./dataTable";
import { columns } from "./columns";

type Result = {
  _id: ObjectId;
  title: string;
  tagline: string;
  content: string;
  category: string;
};

const fetchData = async () => {
  // Perform the search logic here
  let articles: any = [];
  let categories: any = [];
  const options = JSON.stringify({ skip: 0 });
  const response = await fetch(`http://localhost:3000/api/getArticles?options=${options}`, {
    next: { revalidate: 3600 },
  });
  if (response.status === 200) {
    const articlesData = await response.json();
    articles = articlesData.articles;
  }
  const categoriesData = Array.from(
    new Set(articles.map((result: Result) => result.category))
  );
  categories = categoriesData;
  return { articles, categories };
};

const Library = async () => {
  const data = await fetchData();
  const articles = data.articles;

  return (
    <div className="px-24">
      <div className="mt-10">
        <div className="text-xl font-bold">Library</div>
        <div>{articles.length} articles</div>
      </div>
      <div>
        <DataTable columns={columns} data={articles}/>
      </div>
    </div>
  );
};

export default Library;
