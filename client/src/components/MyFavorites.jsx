import CardFavorite from "./Cards/CardFavorite";

const MyFavorites = () => {
  return (

      <div className="w-full h-full flex justify-center items-center">
        <div className="w-auto grid grid-cols-1 2xl:grid-cols-2 gap-y-2 gap-x-2">
          <CardFavorite />
          <CardFavorite />
          <CardFavorite />
          <CardFavorite />
          <CardFavorite />
          <CardFavorite />
          <CardFavorite />
          <CardFavorite />
          <CardFavorite />
        </div>
      </div>

  );
};

export default MyFavorites;
