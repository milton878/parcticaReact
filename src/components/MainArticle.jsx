import imageMobil from "../assets/images/image-web-3-mobile.jpg";
import imageDesktop from "../assets/images/image-desktop.jpg";

export const MainArticle = () => {
  return (
    <section className="mb-12">
      <picture>
        <source media="(max-width: 640px)" srcSet={imageMobil} />
        <source media="(min-width: 641px)" srcSet={imageDesktop} />
        <img src={imageMobil} alt="Articulo principal" />
      </picture>
      <div className="sm:flex">
        <div className="flex-1 py-6">
          <h1 className="text-[40px] font-bold sm:text-[58px] leading-none">
            The Bright Future of Web 3.0
          </h1>
        </div>
        <div className="flex-1 pt-9">
          <p className="text-[13px] mb-10 sm:text-[15px] ">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise
          </p>
          <button className="bg-SoftRed w-[185px] h-[48px] appearance text-OffWhite hover:bg-VerydarkBlue">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
};
