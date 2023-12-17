import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-y-4 gap-x-4 min-gap-x-8 min-gap-y-8 w-auto h-485 xl:grid-cols-4 xl:grid-rows-none xl:gap-x-12">
      <Link to={`/products?category=Hoodies`}>
        <div className="w-[206px] h-[235px] relative flex items-center justify-center overflow-hidden xl:w-[315px] xl:h-[315px]">
          <div className="w-[237px] h-[235px] absolute xl:w-[315px] xl:h-[315px] overflow-hidden">
            <img
              className="transition-transform duration-300 hover:scale-125 hover:rotate-6"
              src="https://ae01.alicdn.com/kf/Hf4f7995ff93f494b825c5691f1eb98e7g/11-BYBB-S-DARK-Tactical-Function-Harajuku-Hoodie-Men-Embroidery-Ninja-Streetwear-Hoodie-Sweatshirt-Man-Cotton.jpg"
            />
          </div>
          <div className="relative text-white text-xl font-bold">Hoodies</div>
        </div>
      </Link>
      <Link to={`/products?category=T-Shirts`}>
        <div className="w-[206px] h-[235px] relative flex items-center justify-center overflow-hidden xl:w-[315px] xl:h-[315px]">
          <div className="w-[237px] h-[235px] absolute xl:w-[315px] xl:h-[315px] overflow-hidden">
            <img
              className="transition-transform duration-300 hover:scale-125 hover:rotate-6"
              src="https://ae01.alicdn.com/kf/S529382876fc7496ba443b585c34adfc8f.jpg_640x640Q90.jpg_.webp"
            />
          </div>
          <div className="relative text-white text-xl font-bold">Shirts</div>
        </div>
      </Link>
      <Link to={`/products?category=Jackets`}>
        <div className="w-[206px] h-[235px] relative flex items-center justify-center overflow-hidden xl:w-[315px] xl:h-[315px]">
          <div className="w-[237px] h-[235px] absolute xl:w-[315px] xl:h-[315px] overflow-hidden">
            <img
              className="transition-transform duration-300 hover:scale-125 hover:rotate-6"
              src="https://ligamentshop.com/cdn/shop/products/18_e1d2cdc0-cb16-4de8-b719-310faedc0966.jpg"
            />
          </div>
          <div className="relative text-white text-xl font-bold">Jackets</div>
        </div>
      </Link>
      <Link to={`/products?category=Pants`}>
        <div className="w-[206px] h-[235px] relative flex items-center justify-center overflow-hidden xl:w-[315px] xl:h-[315px]">
          <div className="w-[237px] h-[235px] absolute xl:w-[315px] xl:h-[315px] overflow-hidden">
            <img
              className="transition-transform duration-300 hover:scale-125 hover:rotate-6"
              src="https://ae01.alicdn.com/kf/Ha9b9b7dc737643baa70681d1057a3fedQ/Streetwear-Black-Cargo-Pants-Mens-Plus-Size-Hip-Hop-Side-Pocket-Casual-Hot-Sale-Loose-Black.jpg"
            />
          </div>
          <div className="relative text-white text-xl font-bold">Pants</div>
        </div>
      </Link>
    </div>
  );
};

export default Categories;
