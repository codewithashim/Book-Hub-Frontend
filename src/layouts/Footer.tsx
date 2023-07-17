import logo from "../assets/bookhublogo.png";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <img src={logo} alt="BookHub Logo" className="w-40" />
        <p>
          BookHub | 1234 Main St | Anywhere, USA | 123-456-7890
          <br />
          Providing reliable book service since {year}
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">All Books</a>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
}
