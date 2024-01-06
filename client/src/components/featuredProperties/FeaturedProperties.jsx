import { useEffect, useState } from "react";
import "./featuredProperties.css";
import axios from "axios";

export const FeaturedProperties = () => {

  const [data,setData]=useState([])
  const [loading,setLoading]=useState(false)

 const getFeatured=async()=>{
  setLoading(true);
  try {
    const res=await axios.get("http://localhost:5000/api/hotels?featured=true")
    console.log(res.data);
    setData(res.data)
  } catch (error) {
    console.log(error);
  }
  setLoading(false)
 }

 useEffect(()=>{
  getFeatured();
 },[])

  return (
    <div className="fp">
    {loading?("Loading..."):(
      <>
      {data.map((item)=>(
        <div className="fpItem" key={item._id}>
        <img
          src={item.img[0]}
          alt=""
          className="fpImg"
        />
        <span className="fpName">{item.name}</span>
        <span className="fpCity">{item.city}</span>
        <span className="fpPrice">Starting from Rs. {item.price}</span>
        {item.rating && <div className="fpRating">
          <button>{item.rating}</button>
          <span>Excellent</span>
        </div>}
      </div>
      ))}  
      </>
    )
    }
    </div>
  );
};
