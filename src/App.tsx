import ProductPreviewCard from "./components/ProductPreviewCard";
import "./App.css";

function App() {
  return (
    <div className="flex min-h-full flex-col items-center justify-center gap-y-5  bg-cream px-3 py-5">
      <ProductPreviewCard />

      <div className="text-primary-text-very-dark-desaturated-blue w-[90%] text-center">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          className=" whitespace-nowrap text-darker-cyan hover:text-dark-cyan"
          href="#"
        >
          Wojciech Grochecki
        </a>
        .
      </div>
    </div>
  );
}

export default App;
