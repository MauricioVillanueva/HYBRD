import PricesFilter from "./PricesFilter";
import RatingFilter from "./RatingFilter";

const FiltersSideBar = ({ handleFilterCategory, handleFilterPrice }) => {
  return (
    <div
      className="sticky hidden md:block left-0 min-w-[300px] h-screen bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-500"
      aria-label="Sidenav"
      id="drawer-navigation"
    >
      <div className="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-neutral-950 flex flex-col items-start gap-y-6">
        <h2 className="font-general-sans font-bold text-xl">Categories</h2>
        <ul className="font-general-sans font-medium h-[300px] flex flex-col justify-around text-start">
          <li>
            <button
              className="btn relative border border-white group"
              value="Hoodies"
              onClick={(event) => {
                handleFilterCategory(event.target.value);
              }}
            >
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full group-hover:transition-all"/>
              Hoodies
            </button>
          </li>
          <li>
            <button
            className="btn relative border border-white group"
              value="Crewnecks"
              onClick={(event) => {
                handleFilterCategory(event.target.value);
              }}
            >
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full group-hover:transition-all"/>
              Crewnecks
            </button>
          </li>
          <li>
            <button
            className="btn relative border border-white group"
              value="Jackets"
              onClick={(event) => {
                handleFilterCategory(event.target.value);
              }}
            >
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full group-hover:transition-all"/>
              Jackets
            </button>
          </li>
          <li>
            <button
            className="btn relative border border-white group"
              value="T-Shirts"
              onClick={(event) => {
                handleFilterCategory(event.target.value);
              }}
            >
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full group-hover:transition-all"/>
              T-Shirts
            </button>
          </li>
          <li>
            <button
            className="btn relative border border-white group"
              value="Beanies/Hats"
              onClick={(event) => {
                handleFilterCategory(event.target.value);
              }}
            >
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full group-hover:transition-all"/>
              Beanies/Hats
            </button>
          </li>
          <li>
            <button
            className="btn relative border border-white group"
              value="Pants"
              onClick={(event) => {
                handleFilterCategory(event.target.value);
              }}
            >
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full group-hover:transition-all"/>
              Pants
            </button>
          </li>
          <li>
            <button
            className="btn relative border border-white group"
              value="Shoes"
              onClick={(event) => {
                handleFilterCategory(event.target.value);
              }}
            >
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full group-hover:transition-all"/>
              Shoes
            </button>
          </li>
        </ul>
        <div className="w-full h-1 border-t-[1px] border-black"></div>
        <div className="w-full">
          <RatingFilter/>
        </div>
        <div className="w-full">
        <PricesFilter handleFilterPrice={handleFilterPrice} />
        </div>
        
      </div>
    </div>
  );
};

export default FiltersSideBar;
