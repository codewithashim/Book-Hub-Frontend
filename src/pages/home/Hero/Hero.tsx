import { Link } from "react-router-dom";
import HeroBg from "../../../assets/image/heroBg.jpg";

const Hero = () => {
  return (
    <section>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: ` url(${HeroBg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Wellcome to BookHub</h1>
            <p className="mb-5">
              BookHub is a website where you can find books and add them to your
              library. You can also add your own books to the website.
            </p>
            <Link to="/all-books" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
