import React from "react";

const Product = ({ product, onAddToCart }) => {

    // 💰 Calculate final price
    const finalPrice = product.discount
        ? (product.price - (product.price * product.discount) / 100).toFixed(2)
        : product.price;

    return (
        <div className="product-card">

            {/* 🔥 Badge */}
            {product.isBestSeller && (
                <span className="product-badge">Best Seller</span>
            )}

            {/* 🔻 Discount */}
            {product.discount && (
                <span className="discount">-{product.discount}%</span>
            )}

            {/* 🖼 Image */}
            <img src={product.image} alt={product.name} />

            {/* 📦 Info */}
            <div className="product-info">
                <h3 className="product-title">{product.name}</h3>

                {/* 💰 Price */}
                <div>
                    {product.discount ? (
                        <>
                            <span
                                style={{
                                    textDecoration: "line-through",
                                    color: "#94a3b8",
                                    marginRight: "8px",
                                }}
                            >
                                ${product.price}
                            </span>
                            <span className="product-price">${finalPrice}</span>
                        </>
                    ) : (
                        <span className="product-price">${product.price}</span>
                    )}
                </div>

                {/* 🛒 Button */}
                <button
                    className="btn-buy"
                    onClick={() => onAddToCart(product)}
                >
                    Buy Now
                </button>
            </div>
        </div>
    );
};

export default Product;