export const getMovies = async (category = "action") => {
  try {
    const res = await fetch(
      `https://api.tvmaze.com/search/shows?q=${category}`
    );

    const data = await res.json();

    return data.map((item) => ({
      id: item.show.id,
      title: item.show.name,
      image: item.show.image?.medium,
      summary: item.show.summary,
    }));
  } catch (error) {
    console.log("Movies API error:", error);
    return [];
  }
};