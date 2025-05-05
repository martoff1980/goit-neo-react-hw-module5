import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const NotFoundPage = () => (
  <div>
    <h1>Page not found</h1>
    <Link to="/">
      <button style={{ marginLeft: '3px' }}>
        {<FaArrowLeft />} Go to Home
      </button>
    </Link>
  </div>
);

export default NotFoundPage;
