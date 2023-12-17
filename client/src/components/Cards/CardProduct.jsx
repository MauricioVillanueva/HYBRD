
const CardProduct = ({ title, image_secure_url }) => {
  return (
    <div className="font-general-sans w-[230px] h-[auto] bg-white flex justify-center items-center flex-col rounded-2xl gap-y-4 shadow-xl p-3">
      <div className="w-[200px] h-[47px] text-center text-bg-neutral-800 text-md font-bold leading-normal line-clamp-2">
        {title}
      </div>
      <div className="h-[174px] bg-gray-100 border rounded-[10px] overflow-hidden border-none flex items-center justify-center xl:h-[300px]">
      <img className="w-auto h-auto rounded-[9px] " src={image_secure_url} />
      </div>
      <div className="w-full h-auto flex justify-center items-center gap-4">
          <button className="px-4 py-1 min-w-[80px] bg-neutral-800 rounded-[7px] justify-center items-center inline-flex text-white font-semibold hover:text-white hover:bg-blue-500">
            Edit
          </button>
        <button className="px-4 py-1 bg-neutral-800 rounded-[7px] justify-center items-center inline-flex text-white font-semibold hover:bg-red-500 hover:text-white">
          Delete
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
