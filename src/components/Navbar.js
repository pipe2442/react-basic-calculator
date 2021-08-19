import { Link } from 'react-router-dom';
import '../Assets/Styles.css';

function Navbar() {
  return (
    <div className="nav">
      <h1 className="title">Math Magicians</h1>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/Calculator">Calculator </Link>
        <Link to="/Quote">Quote </Link>
      </nav>
    </div>
  );
}

export default Navbar;
