import MyFavorites from "./MyFavorites";
import TitleSection from "./TitleSection";

const Favorites = () => {
  return (
    <div>
      <div className="w-full h-[60px]">
        <TitleSection title="My Favorites" />
      </div>
      <div>
        <MyFavorites />
      </div>
    </div>
  );
};

export default Favorites;
