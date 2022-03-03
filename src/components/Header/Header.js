import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import routes from '../../config/routes';
import './header.scss';

function Header({ title, numberOfItems }) {
  return (
    <h2 className="header">
      <Link to={routes.ROOT}>{title}</Link>
      <span>{numberOfItems}</span>
    </h2>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  numberOfItems: PropTypes.number.isRequired,
};
export default Header;
