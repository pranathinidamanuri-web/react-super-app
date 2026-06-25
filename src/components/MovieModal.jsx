const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0,0,0,0.5)"
    }}>
      <div style={{ background: "white", padding: "20px" }}>
        <h2>{movie.title}</h2>
        <p>{movie.genre}</p>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default MovieModal;