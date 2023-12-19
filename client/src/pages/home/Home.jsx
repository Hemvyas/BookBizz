import "./home.css";
import { Navbar } from "../../components/navbar/Navbar";
import { Header } from "../../components/header/Header";
import { Featured } from "../../components/featured/Featured";
import { PropertyList } from "../../components/propertyList/PropertyList";
import { FeaturedProperties } from "../../components/featuredProperties/FeaturedProperties";
import { MailList } from "../../components/mailList/MailList";
import { Footer } from "../../components/footer/Footer";

export const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="homeImgContainer">
        <img
          src="https://r-xx.bstatic.com/xdata/images/xphoto/2880x900/246998635.jpeg?k=839ba018b07012d23c2ca628bb409ba62ad5ffed3fe7ee5b434a72d1e7ba76e9&o="
          alt=""
          className="homeImg"
        />
      </div>

      <Header />

      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by Property Type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes Guests Love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};
