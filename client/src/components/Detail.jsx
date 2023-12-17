import { useState } from "react";
import axios from "axios";
import CardDetail from "./Cards/CardDetail";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail, clearDetail } from "../redux/slices/detailSlice";
import TitleSection from "./TitleSection";
import { addItem } from "../redux/slices/cartSlice";
import toast, { Toaster } from 'react-hot-toast'


const Detail = () => {
  const { id } = useParams();
  const detail = useSelector((state) => state.detail.detail);
  const dispatch = useDispatch();

  const [selectedSize, setSelectedSize] = useState(null);
  const [error, setError] = useState(false);
  
  const fetchDetail = () => {
    return async function (dispatch) {
      try {
        const json = await axios.get(
          `http://localhost:3001/api/products/${id}`
        );
        const detail = json.data;
        return dispatch(getDetail(detail));
      } catch (error) {
        console.error("Error fetching detail:", error);
      }
    };
  };

  useEffect(() => {
    dispatch(fetchDetail());
    return () => {
      dispatch(clearDetail());
    };
  }, [dispatch, id]);

  const handleAddToCart = () => {
    if (selectedSize) {
      const itemToAdd = {
        id: detail.id,
        image_secure_url: detail.image_secure_url,
        inventory: detail.inventory,
        title: detail.title,
        size: selectedSize,
        unit_price: detail.price,
        description: detail.description,
        quantity: 1,
      };
      toast.success('Added to cart successfully ')
      dispatch(addItem(itemToAdd));
      setSelectedSize(null);
      setError(false);
    } else {
      toast.error('Please select a size')
      setError(true);
    }
  };

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
    setError(false); 
  };

  return (
    <div className="font-general-sans pb-[100px] lg:pb-0">
      <div className="w-full h-[60px]">
        <TitleSection title="Detail" />
      </div>
      <div className="w-auto flex justify-center items-center pt-[50px] flex-col">
        <CardDetail
          title={detail.title}
          image_secure_url={detail.image_secure_url}
          description={detail.description}
          size={detail.size}
          setSelectedSize={handleSizeSelection}
          detail={detail.price}
          handleAddToCart={handleAddToCart}
        />
      </div>
      <Toaster
      />
    </div>
  );
};

export default Detail;
