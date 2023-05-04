import "./Product.css";
export const Product = ({ src, title, price, isVeteran }) => {
  
  const isAdmin = false;

  const onBuyMeNowClick = () => {
    alert(`thank you, i am ${price}$ reacher`);
  };

  const onEditProductClick = () => {
    console.log("moving to edit product page");
  };


  return (
    <div className="product-card">
      <div className="product-image">
        <img src={src} alt="product" />
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>${price}</h6>
        {!isVeteran ? (
          <button onClick={onBuyMeNowClick}>BUY ME NOW</button>
        ) : (
          <button onClick={onEditProductClick}>EDIT PRODUCT</button>
        )}
      </div>
    </div>
  );
};
