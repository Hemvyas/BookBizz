import "./featured.css";

export const Featured = () => {
  return (
    <div className="mainContainer">
      <div className="featured">
        <div className="featuredItem">
          <img
            src="https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>New Delhi</h1>
            <h2>2926 Properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://cf.bstatic.com/xdata/images/city/600x600/684501.jpg?k=225f7713b3f47f0c2c580c34c35582ba70331757bcc8dc32e7f17072c80805ff&o="
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Agra</h1>
            <h2>407 Properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://cf.bstatic.com/xdata/images/city/600x600/684657.jpg?k=66dc5035b43e9bb86b756e381e4fec2558064af4a63a8af17836725a854c03ee&o="
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Jaipur</h1>
            <h2>1526 Properties</h2>
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
    </div>
  );
};
