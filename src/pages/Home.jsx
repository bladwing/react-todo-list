import { Link } from "react-router-dom";
import Destiny from "../resource/destiny.jpg";

const Home = ()=> {
    return (
      <div className="homePage">
        <h1>Welcome to My To Do World....</h1>
        <img src={Destiny} alt="destiny" className="destiny" />
        <h2>Choose your Component</h2>
  
        <div className="navSecond ">
          <button>
            <Link to="/classes">Class</Link>
          </button>
          <button>
            <Link to="/hooks">Hooks</Link>
          </button>
        </div>
      </div>
    );
  }

export default Home;