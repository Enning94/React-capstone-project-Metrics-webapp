import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCryptoById } from '../Redux/reducers';
import DetailsNavbar from './detailNavbar';
import CryptoTrend from './cryptoChange';

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { point } = useSelector((point) => point.crypto);

  useEffect(() => {
    dispatch(fetchCryptoById(id));
  }, [dispatch, id]);

  if (point.image && point.market_data) {
    return (
      <>
        <DetailsNavbar coin={point.name} />
        <div>
          <img src={point.image.large} alt="coin" className="details-img" />
        </div>
        <div>
          <ul className="crypto-details">
            <li className="name">
              <p>Symbol:</p>
              <span>{point.symbol}</span>
            </li>
            <li className="name">
              <p>Name:</p>
              <spa>{point.name}</spa>

            </li>
            <li className="name">
              <p>Hashing Algorithm:</p>
              <span>{point.hashing_algorithm}</span>
            </li>
            <li className="name">
              <p>Current Price:</p>
              <span>
                $
                {point.market_data.current_price.usd}
              </span>
            </li>
            <li className="name">
              <span>Market Cap:</span>

              <p>
                $
                {point.market_data.market_cap.usd}
              </p>
            </li>
            <li className="name">
              <p>Circulating Supply:</p>
              <span>{point.market_data.circulating_supply}</span>
            </li>
            <li className="name change">
              <p>Creation Date:</p>
              <span>{point.genesis_date}</span>
            </li>
            <li className="name price">
              <p>Price Change 24h:</p>
              <p>
                <CryptoTrend change={point.market_data.price_change_percentage_24h} />
                {' '}
                {point.market_data.price_change_percentage_24h.toFixed(2)}
                <span>%</span>
              </p>
            </li>
          </ul>
        </div>
        <div className="about-row">
          <div className="about-first-col">
            <div>
              <h3>Author</h3>
              <a href="https://github.com/Enning94">
                <img className="author-img" alt="Author" src="https://htetaungkyaw71.github.io/JavaScript-Capstone-Project/7f561e6706fb02de2ecd.jpg" />
              </a>
            </div>
          </div>
          <div className="about-second-col">
            <h3>Technologies</h3>
            <ul className="tech-list">
              <li className="tech-item">React</li>
              <li className="tech-item">CSS</li>
              <li className="tech-item">Redux</li>
              <li className="tech-item">Jest</li>
            </ul>
          </div>
        </div>
        <footer>
          <p className="footer-text">Copyright © 2023 Created in Microverse under MIT license. All rights reserved.</p>
        </footer>
      </>
    );
  }
  return <div>Loading...</div>;
}
export default Details;
