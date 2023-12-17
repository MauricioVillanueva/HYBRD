// We receive the image data, name, description by destructuring.
import { useState } from "react";
const CardDetail = ({
  title,
  image_secure_url,
  description,
  size,
  setSelectedSize,
  price,
  handleAddToCart
}) => {
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(null);

  return (
    <div className="font-general-sans w-[300px] h-full mt-0 mb-0 m-[15px] flex-col lg:w-full items-center justify-center">
      <div className="h-auto flex flex-col lg:flex-row lg:items-center lg:w-full lg:justify-center gap-x-20 lg:h-[700px]">
        <div className="h-[auto] border rounded-[10px] min-h-[300px] border-none flex items-center justify-center">
          <img
            className=" max-h-[400px] w-auto"
            alt="Image"
            src={image_secure_url}
          />
        </div>
        <div className="flex flex-col gap-y-3">
          <span className="text-black text-[24px] font-bold ">{title}</span>
          <div className="w-auto h-6 justify-start items-center gap-[3px] inline-flex">
            <div className="inline-block max-content">
              <img
                className="w-[20px] h-[20px]"
                src="https://generation-sessions.s3.amazonaws.com/32acdff4caa7c653a3757d94601e8d96/img/icon.svg"
              />
            </div>
            <div className="w-auto inline-block max-content">
              <span className=" text-black text-[16px] font-bold">4.5/5</span>
              <span className="text-black text-opacity-60 text-[16px] font-bold">
                {" "}
                (45 reviews)
              </span>
            </div>
          </div>
          <div className="w-full lg:w-[400px]">
            <h4 className="text-black font-normal text-opacity-60">
              {description}
            </h4>
          </div>
          <div>
            <h2 className=" text-black text-xl font-bold">Choose Size</h2>
          </div>
          <div className="flex w-full justify-start gap-3 flex-wrap">
            {size?.map((sizes, index) => {
              return (
                <button
                  key={sizes}
                  onClick={() => {
                    setSelectedSizeIndex(index);
                    setSelectedSize(sizes);
                  }}
                  className={`min-w-[40px] min-h-[40px] p-[5px] hover:border-black rounded-md border ${
                    selectedSizeIndex === index
                      ? "bg-black text-white"
                      : "border-black border-opacity-20"
                  } justify-center items-center text-xl font-medium`}
                >
                  {sizes}
                </button>
              );
            })}
          </div>
          <div className="w-full h-[100px] bg-white border-t border-black border-opacity-20 flex justify-around items-center">
            <div className="w-[100px] h-[50px] flex flex-col items-start justify-center">
              <span className="text-black text-opacity-60 text-[15px] font-bold">
                Price
              </span>
              <span className="text-black text-2xl font-semibold">
                {" "}
                USD {price}
              </span>
            </div>
            <button
              className="w-[190px] h-[50px] bg-black rounded-[10px] justify-center items-center"
              onClick={handleAddToCart}
            >
              <div className="text-white text-base font-medium">
                Add to Cart
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
