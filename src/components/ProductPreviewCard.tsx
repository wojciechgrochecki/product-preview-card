import mobileImage from "../assets/images/image-product-mobile.jpg";
import desktopImage from "../assets/images/image-product-desktop.jpg";
import cartIcon from "../assets/images/icon-cart.svg";

export default function ProductPreviewCard() {
  return (
    <div className="grid grid-flow-row overflow-hidden rounded-xl xs:max-w-[600px] xs:auto-cols-fr xs:grid-flow-col">
      <img
        src={mobileImage}
        alt="preview"
        className="xs:hidden"
        aria-hidden="true"
      />
      <img
        src={desktopImage}
        alt="preview"
        className="hidden xs:block xs:h-full xs:object-cover"
      />
      <div className=" flex flex-col gap-3 bg-white p-7  xs:gap-5">
        <p className="tracking-[0.300rem] text-dark-grayish-blue">PERFUME</p>
        <h2 className="font-fraunces text-4xl text-very-dark-blue">
          Gabrielle Essence Eau De Parfum
        </h2>
        <p className="text-[15px] leading-6 text-dark-grayish-blue">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="mt-4 flex flex-row items-center gap-7">
          <div className="font-fraunces text-4xl text-dark-cyan">$149.99</div>
          <div>
            <s className="text-dark-grayish-blue">$169.99</s>
          </div>
        </div>
        <button className="mt-3 flex flex-row justify-center gap-2 rounded-xl bg-dark-cyan py-4 text-center font-bold text-white transition-colors hover:bg-darker-cyan">
          <img className="inline" src={cartIcon} alt="cart icon" /> Add to Cart
        </button>
      </div>
    </div>
  );
}
