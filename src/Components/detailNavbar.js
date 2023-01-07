import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FiSettings, FiMic } from 'react-icons/fi';
import { FaArrowCircleLeft } from 'react-icons/fa';

function DetailsNavbar({ coin }) {
  const navigate = useNavigate();
  return (
    <nav className="">
      <section className="nav-wrapper">
        <div>
          <FaArrowCircleLeft className="icon" onClick={() => navigate('/')} />
          <a
            className=""
            href="/"
          >
            <span className="nav-title">{coin}</span>
          </a>
        </div>
        <div>
          <ul>
            <li className="">
              {' '}
              <FiMic />
              {' '}
            </li>
            <li className="">
              <FiSettings />
            </li>
          </ul>
        </div>

      </section>
    </nav>
  );
}

export default DetailsNavbar;

DetailsNavbar.propTypes = {
  coin: PropTypes.string.isRequired,
};
