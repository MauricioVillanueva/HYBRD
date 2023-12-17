import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/slices/productSlice";
import CardFilters from "../Cards/CardFilters";
import FiltersSideBar from "./FiltersSideBar";
import Dropdown from "./Dropdown";
import { clearFiltered, getFiltered } from "../../redux/slices/filteredSlice";

const Filters = () => {
  const location = useLocation();
  const navigate = useNavigate();


  const dispatch = useDispatch();
  // const allProducts = useSelector((state) => state.products.products);
  const allFiltered = useSelector((state) => state.filtered.filtered)
  const [selectedCategory, setSelectedCategory] = useState("");
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState("");
  const [genre, setGenre] = useState("");
  const [filters, setFilters] = useState({
    category: selectedCategory,
    minPrice: minPrice,
    maxPrice: maxPrice,
    selectedOrder: selectedOrder,
    genre: genre,
  });
  
  const buildFilterUrl = () => {
    let url = "";
    
    if(location.search) url = location.search.toString()
    const filterParams = [];
    for (const key in filters) {
      if (filters[key] !== "" && filters[key] !== null) {
        filterParams.push(`${key}=${filters[key]}`);
      }
    }
    
    if(filterParams.length > 0) url=""
    if (filterParams.length > 0) {
      url += "?" + filterParams.join("&");
    }

    return url;
  };

  const updateFilter = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  const fetchProducts = () => {
    setSelectedCategory("");
    setMinPrice(null);
    setMaxPrice(null);
    setSelectedOrder("");
    setGenre("");

    return async function (dispatch) {
      try {
        const json = await axios.get(
          "http://localhost:3001/api/products"
        );
        const products = json.data;
        return dispatch(getProducts(products));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  };

  const fetchAllProducts = () => {
    setSelectedCategory("");
    setMinPrice(null);
    setMaxPrice(null);
    setSelectedOrder("");
    setGenre("");

    const emptyFilters = {
      category: "",
      minPrice: null,
      maxPrice: null,
      selectedOrder: "",
      genre: "",
    };

    setFilters(emptyFilters);
    navigate(location.pathname);
    return async function (dispatch) {
      try {
        const json = await axios.get(
          "http://localhost:3001/api/products"
        );
        const products = json.data;
        return dispatch(getFiltered(products));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  }

  const fetchFilteredProducts = async () => {
    try {
      const url = buildFilterUrl();
      console.log(url);
      console.log(location.search);
      if(url == location.search) {
        console.log(url + " es igual que " + location.search);
        const json = await axios.get(`http://localhost:3001/api/products/filters${url}`)
        const products = json.data;
        dispatch(getFiltered(products))
        navigate(url)
      }
      if (url !== location.search) {
        console.log(url + " no es igual que " + location.search);
      const json = await axios.get(`http://localhost:3001/api/products/filters${url}`);
      const products = json.data;
      dispatch(getFiltered(products));
      navigate(url)
      console.log(`http://localhost:3001/api/products/filters${url}`);
      }
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  };

  const handleFilterCategory = async (category) => {
    setSelectedCategory(category);
    updateFilter("category", category);
  };

  const handleFilterPrice = async (minPrice, maxPrice) => {
    setMinPrice(minPrice);
    setMaxPrice(maxPrice);
    updateFilter("min", minPrice);
    updateFilter("max", maxPrice);
  };

  const handleFilterOrder = async (order) => {
    console.log(order);
    setSelectedOrder(order);
    updateFilter("order", order);
  };

  const handleFilterGenre = async (genre) => {
    setGenre(genre);
    updateFilter("genre", genre);
  };
  useEffect(() => {
    dispatch(fetchProducts());
    return () => {
      dispatch(clearFiltered())
    }
  }, [dispatch]);
  
  useEffect(() => {
    fetchFilteredProducts();
    return () => {
      dispatch(clearFiltered());
    };
  }, [selectedCategory, minPrice, maxPrice, selectedOrder, genre]);



  return (
    <div className="w-full h-auto flex flex-col">
      <div className="w-full h-[85px] flex items-center justify-between bg-white pl-10 pr-10">
        <h1 className="h-auto font-general-sans font-semibold text-[32px]">
          Discover
        </h1>
        <div className="font-general-sans flex gap-x-6 font-normal">
          <button
            className="bg-black text-white w-[80px] rounded-lg py-1 hover:bg-slate-700"
            onClick={() => dispatch(fetchAllProducts())}
          >
            All
          </button>
          <button
            className="bg-black text-white w-[80px] rounded-lg py-1 hover:bg-slate-700"
            value="Men"
            onClick={(event) => handleFilterGenre(event.target.value)}
          >
            Men
          </button>
          <button
            className="bg-black text-white w-[80px] rounded-lg py-1 hover:bg-slate-700"
            value="Women"
            onClick={(event) => handleFilterGenre(event.target.value)}
          >
            Women
          </button>
        </div>
        <div>
          <Dropdown handleFilterOrder={handleFilterOrder} />
        </div>
      </div>
      <div className="p-4 h-full w-auto pt-2 flex ">
        <FiltersSideBar
          handleFilterCategory={handleFilterCategory}
          handleFilterPrice={handleFilterPrice}
        />
        <div className="flex justify-center pt-10 w-full h-auto">
          <div className="grid grid-cols-2 gap-6 grid-rows-auto-1fr md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-10  xl:grid-cols-4 xl:gap-16 2xl:grid-cols-4 2xl:gap-y-24">
            {allFiltered?.map((el) => (
              <Link to={`/detail/${el.id}`} key={el.id} className="h-[246px]">
                <CardFilters
                  title={el.title}
                  image_secure_url={el.image_secure_url}
                  price={el.price}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
