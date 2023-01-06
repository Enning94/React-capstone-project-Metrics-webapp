import { FiSettings, FiMic } from 'react-icons/fi';

function Navbar() {
  return (
    <nav>
      <section className="nav-wrapper">
        <div>
          <a
            className=""
            href="/"
          >
            <span className="nav-title">COIN DATA HUB</span>
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

export default Navbar;
