// import getData from "../../hooks/Fetch";
import {useEffect, useState} from "react"
import axios from "axios"
import "./featured.css";

export const Featured = () => {
  const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
      const fetchData=async()=>{
        setLoading(true);
        try {
          const res=await axios.get("http://localhost:5000/api/hotels/countCity?cities=Manali,Darjeeling,Indore")
          setData(res.data);
        } catch (error) {
          console.log(error);
        }
        setLoading(false);
      }
      fetchData();
    },[]);


  return (
    <div className="mainContainer">
    {loading?("Loading...."):
    (
      <>
      <div className="featured">
        <div className="featuredItem">
          <img
            src="https://static.toiimg.com/photo/77760011.cms"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Manali</h1>
            <h2> {data[0]} Properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://www.bihartrip.com/pub/media/catalog/product/cache/cab15b78dac35e1077797ee439f6374a/d/a/darjeeling_tour_package_from_patna.jpg"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Darjeeling</h1>
            <h2>{data[1]}  Properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://static.toiimg.com/thumb/47067385/Indore_ed.jpg?width=1200&height=900"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Indore</h1>
            <h2>{data[2]}  Properties</h2>
          </div>
        </div>
      </div>
      <div className="featured">
        <div className="featuredItem">
          <img
            src="https://cf.bstatic.com/xdata/images/city/600x600/684622.jpg?k=f9eacb40b8f7c8560afc74cdcfe2e7028e5117a36a0d8d3356f735ea3ac20f4f&o="
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Gurgaon</h1>
            <h2>1139 Properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o="
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Mumbai</h1>
            <h2>1651 Properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://q-xx.bstatic.com/xdata/images/region/600x600/49646.jpg?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o="
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Goa</h1>
            <h2>5252 Properties</h2>
          </div>
        </div>
      </div>
     </>
     )
      }
    </div>
  );
};
