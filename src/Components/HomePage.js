import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaArrowCircleRight } from 'react-icons/fa';
import CryptoTrend from './cryptoChange';
import Navbar from './HomeNavbar';

function Home() {
  const { points } = useSelector((state) => state.crypto);
  return (
    <>
      <Navbar />
      <h4>Explore, Collect and Sell More (Real Time Data)</h4>
      <div className="second-row">
        {points
          .map((crypto) => (
            <div key={crypto.id} className="second-row-1">
              <div className="second-row-2">
                <img src={crypto.image} className="crypto-img" alt="coin" />

                <NavLink
                  className="arrow-icon"
                  to={`/details/${crypto.id}`}
                >
                  <FaArrowCircleRight />
                </NavLink>
              </div>
              <div className="text-wrapper">
                <div className="text-content-1">
                  <h2>{crypto.name}</h2>
                  <p>
                    price: $
                    {crypto.current_price}
                  </p>
                </div>
                <div className="price-change">
                  <p>
                    <CryptoTrend change={crypto.price_change_percentage_24h} />
                    {' '}
                    {crypto.price_change_percentage_24h }
                  </p>
                </div>
              </div>
            </div>

          ))}
      </div>
      <div className="about">
        <h2>About</h2>
        <p>
          This is a cryptocurrency app with a simple interface, and provides
          up-to-date data on the latest developments in the cryptocurrency market.
          Users can easily track the value of a cryptocurrency
          in real-time and make informed decisions about their investments.
        </p>
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

export default Home;
