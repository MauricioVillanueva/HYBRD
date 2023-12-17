const Card = ({ title, image_secure_url, price }) => {
  return (
    <div className=" w-[161px] h-auto mt-0 mb-0 m-[15px] flex-column xl:w-[300px] xl:h-[auto]">
        <div className="h-[174px] bg-gray-100 border rounded-[10px] overflow-hidden border-none flex items-center justify-center xl:h-[300px]">
          <img className="w-auto h-auto transition duration-300 ease-in-out hover:scale-110" alt="Image" src={image_secure_url} />
        </div>
        <div>
          <div className="text-black text-[18px] font-semibold max-w-[100%] max-h-[70px]  line-clamp-2 pt-3">
            {title}
          </div>
          <div className=" text-black text-opacity-60 text-s font-medium">
            USD {price}
          </div>
      </div>
    </div>
  );
};

export default Card;