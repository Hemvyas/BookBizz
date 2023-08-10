import "./hotel.css";
import { Navbar } from "../../components/navbar/Navbar";
import { Header } from "../../components/header/Header";
import { MailList } from "../../components/mailList/MailList";
import { Footer } from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/1024x768/73171931.jpg?k=e9083a97bee14346a752722ee926bd8157301f603652d93d8f230d0eea949018&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/1024x768/67469599.jpg?k=0d2999c8cb6dfa4af3359cbb3ba0cc2118eebade0500b383bfa3d58bca496399&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/1024x768/67469411.jpg?k=6730b810bd2c8d4cbb02d2120edc6aae09020c553f34ecc56e2ab2fb16ca954b&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/1024x768/67469527.jpg?k=6af10cf32967f77c7a59c0002f4334df78c82b87ad23a6dbda24929bea3cc5a4&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/1024x768/67469393.jpg?k=b98bf32047e99f529c70bef8608803c0742090b8dc88a14f8a5c371ff2b01382&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/1024x768/198910171.jpg?k=5bdbcd07a516eec35439efb7ca488085f1b880707d6954e79a295f106748a49a&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type={"list"} />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(!setOpen)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Ramada Plaza By Wyndham Palm Grove</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>
              Juhu Tara Road, Juhu Beach, Juhu, 400049 Mumbai, India –
            </span>
          </div>
          <a href="http://google.com">
            <span className="hotelDistance">Great location - show map</span>
          </a>
          <span className="hotelPriceHighlight">
            Book a stay over ₹ 14,000 at this property and get a free airport
            taxi and breakfast for 2 days
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Ramada Plaza Palm Grove</h1>
              <p className="hotelDesc">
                Featuring an outdoor pool overlooking the Arabian Sea, Ramada
                Palm Grove offers 5-star luxury on Juhu Beach. Providing free
                parking and buffet breakfast, it has a fitness center and hot
                tub.
                <br />
                <br />
                Boasting views from oversize windows, rooms at Palm Grove Ramada
                have a flat-screen TV, safe and seating area. Private bathrooms
                come with separate shower and bath areas.
                <br />
                <br />
                Guests can relax at the hotel’s steam rooms or enjoy soothing
                massages. Other facilities include a book and handicraft store,
                beauty salon and internet cafe.
                <br />
                <br />
                European, Italian and Indian cuisines are served at the
                Tangerine Cafe. Asian dishes are available at the Oriental Bowl
                Restaurant. The Shooters Bar offers drinks and snacks.
                <br />
                <br />
                Ramada Plaza Palm Grove is 3.1 mi from Chhatrapati Shivaji
                International Airport. The popular Pali Hill is located within
                2.5 mi from the hotel.
                <br />
                <br />
                Couples in particular like the location – they rated it 8.5 for
                a two-person trip.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 2-night stay!</h1>
              <span>
                <b>Top Location:</b> Highly rated by recent guests <b>(8.4)</b>
                <br />
                <br />
                <span className="hotelMiniDetailsBreakfast">
                  <span className="hmdbTitle">Breakfast Info</span>
                  <br />
                  Continental, Full English/Irish, Vegetarian, Vegan, Halal,
                  Gluten-free, Asian, American
                </span>
              </span>
              <h2>
                <b>₹ 15,075</b> (2 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
      <div className="hotelFooterContainer">
        <MailList />
        <Footer />
      </div>
    </div>
  );
};
