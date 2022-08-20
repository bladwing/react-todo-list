import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Page not Found - 404</h1>

      <div className="nav">
        <button>
          <Link to="/">Main Page</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
