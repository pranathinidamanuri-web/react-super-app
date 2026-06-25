import { useStore } from "../store/useStore";
import WeatherWidget from "../components/WeatherWidget";
import NewsWidget from "../components/NewsWidget";
import NotesWidget from "../components/NotesWidget";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const user = useStore((state) => state.user);
  const categories = useStore((state) => state.categories);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>

      <button
        onClick={() => navigate("/movies")}
        style={{ marginBottom: "20px" }}
      >
        Go to Movies 🎬
      </button>

      <div style={{ marginBottom: "20px" }}>
        <h2>User Info</h2>

        <p><b>Name:</b> {user.name}</p>
        <p><b>Username:</b> {user.username}</p>
        <p><b>Email:</b> {user.email}</p>
        <p><b>Mobile:</b> {user.mobile}</p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2>Selected Categories</h2>

        {categories.length === 0 ? (
          <p>No categories selected</p>
        ) : (
          categories.map((cat, index) => (
            <span
              key={index}
              style={{
                margin: "10px",
                padding: "8px 12px",
                backgroundColor: "lightblue",
                borderRadius: "5px",
                display: "inline-block",
              }}
            >
              {cat}
            </span>
          ))
        )}
      </div>

      <hr />

      <WeatherWidget />
      <hr />
      <NewsWidget />
      <hr />
      <NotesWidget />
    </div>
  );
};

export default Dashboard;