import { useEffect, useState } from "react";
import { getNews } from "../services/newsApi";

const NewsWidget = () => {
  const [news, setNews] = useState([]);
  const [index, setIndex] = useState(0);

  // Fetch news
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const articles = await getNews();
        console.log("NEWS:", articles); // 🔍 debug

        if (Array.isArray(articles)) {
          setNews(articles);
        } else {
          setNews([]);
        }
      } catch (error) {
        console.log("Fetch error:", error);
        setNews([]);
      }
    };

    fetchNews();
  }, []);

  // Auto change news every 2 sec
  useEffect(() => {
    if (news.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % news.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [news]);

  // Loading state
  if (news.length === 0) {
    return <p>Loading news...</p>;
  }

  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h3>News</h3>

      {/* SAFE RENDER */}
      <p>{news[index]?.title || "No news available"}</p>
    </div>
  );
};

export default NewsWidget;