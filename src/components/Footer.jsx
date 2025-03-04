import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; 2025{" "}
        <Link
          to="https://mahmudalam.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mahmud Alam
        </Link>
        . All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
