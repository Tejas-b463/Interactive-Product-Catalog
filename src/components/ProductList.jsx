const ProductList = ({ item }) => {
  return (
    <div key={item.id} className="product normal">
      <div className="product-header">
        <img src={item.image} alt="product" />
      </div>
      <div className="product-details">
        <h4 className="item-price">{item.title}</h4>
        <div className="product-item">
          <p className="item-price">${item.price}</p>
          <p className="item-price">{item.category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
