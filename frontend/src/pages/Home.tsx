import Hi from "../assets/img/hi.png";

const Home = () => {
  const p_style = "my-6 text-center w-2/3";
  return (
    <div className="flex flex-col justify-center items-center p-24 font-michroma">
      <div className="flex justify-center items-end">
        <img src={Hi} className="w-24" />
        <h1 className="text-xl font-bold">Welcome toTaste Buds!</h1>
      </div>

      <p className={p_style}>
        Discover the joy of cooking with TasteBuds, the ultimate recipe app
        designed to inspire and elevate your culinary adventures. Whether you’re
        a seasoned chef or a kitchen novice, TasteBuds offers a world of flavors
        at your fingertips, bringing together an extensive collection of recipes
        from around the globe.
      </p>

      <p className={p_style}>
        Explore a diverse array of mouth-watering dishes, meticulously curated
        to suit every taste and occasion. From quick and easy weekday meals to
        gourmet creations that impress, our user-friendly platform makes it
        simple to find, save, and share your favorite recipes.
      </p>

      <p className={p_style}>
        Join our vibrant community of food enthusiasts, share your own culinary
        masterpieces. With TasteBuds, every meal becomes an opportunity to
        create, savor, and celebrate. Let's make every dish a delight!
      </p>
    </div>
  );
};

export default Home;
