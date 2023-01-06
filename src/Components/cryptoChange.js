import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi';
import PropTypes from 'prop-types';

function CryptoTrend({ change }) {
  return change > 0 ? <FiTrendingUp className="trend-up" /> : <FiTrendingDown className="trend-down" />;
}

export default CryptoTrend;

CryptoTrend.propTypes = {
  change: PropTypes.number.isRequired,
};
