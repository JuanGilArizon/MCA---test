import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import routes from '../../config/routes';

function Header({ title }) {
  return (
    <h1><Link to={routes.ROOT}>{title}</Link></h1>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
