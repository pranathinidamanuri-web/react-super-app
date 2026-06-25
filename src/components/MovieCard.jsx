const MovieCard = ({ movie }) => {
  return (
    <div style={{ width: "150px", margin: "10px" }}>
      <img
        src={movie.image || movie.poster}
        alt={movie.title}
        style={{ width: "100%" }}
      />

      <h4>{movie.title}</h4>

      <p>{movie.year || "2024"}</p>
    </div>
  );
};

export default MovieCard;