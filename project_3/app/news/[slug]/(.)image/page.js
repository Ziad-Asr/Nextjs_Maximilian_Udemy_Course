import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";

const InterceptedImagePage = ({ params }) => {
  const newItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div>
      <h2>INTERCEPTED!</h2>
      <div className="fullscreen-image">
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
      </div>
    </div>
  );
};

export default InterceptedImagePage;
