import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/TidbitsJS/Summize", "_blank")
          }
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Discover the magic of <br className="max-md:hidden" />
        <span className="orange_gradient ">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Streamline your reading experience with Summarize, a free and
        open-source article summarizer that condenses extensive articles into
        succinct and easily digestible summaries.
      </h2>
    </header>
  );
};

export default Hero;
