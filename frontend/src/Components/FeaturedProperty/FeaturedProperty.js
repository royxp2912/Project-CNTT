import React from 'react';
import './featuredProperty.scss';

const FeaturedProperty = () => {
    return (
        <div className="featuredProperty-list">
            <div className="featuredProperty-item">
                <img
                    src="https://t-cf.bstatic.com/xdata/images/hotel/square200/34405073.webp?k=8ddc5dfb562077f999427ce13fa59ef7de13fcb4bee37b7a4a3acc7ac7830e9a&o=&s=1"
                    alt=""
                    className="featuredProperty-img"
                />
                <span className="featuredProperty-name">Sugar Loft Apartments</span>
                <span className="featuredProperty-city">Rio de Janeiro</span>
                <span className="featuredProperty-price">Giá từ VND 1.116.000</span>
                <div className="featuredProperty-rated">
                    <button>9.1</button>
                    <span>Tuyệt hảo</span>
                </div>
            </div>
            <div className="featuredProperty-item">
                <img
                    src="https://t-cf.bstatic.com/xdata/images/hotel/square200/64768782.webp?k=6ce8b6ac08f2b54a21b93b7b3416dc0fd8d6b1f4ca409e5ff0819ba07181eb36&o=&s=1"
                    alt=""
                    className="featuredProperty-img"
                />
                <span className="featuredProperty-name">Zoku Amsterdam</span>
                <span className="featuredProperty-city">Amsterdam</span>
                <span className="featuredProperty-price">Giá từ VND 3.715.821</span>
                <div className="featuredProperty-rated">
                    <button>8.9</button>
                    <span>Tuyệt hảo</span>
                </div>
            </div>
            <div className="featuredProperty-item">
                <img
                    src="https://t-cf.bstatic.com/xdata/images/hotel/square200/69813393.webp?k=4c2c17bc614b66329fa6c9ed2554d2f89a911933e56b00b94508cfcc183e4d9e&o=&s=1"
                    alt=""
                    className="featuredProperty-img"
                />
                <span className="featuredProperty-name">Casa Portuguesa Prata</span>
                <span className="featuredProperty-city">Lisboa</span>
                <span className="featuredProperty-price">Giá từ VND 7.291.423</span>
                <div className="featuredProperty-rated">
                    <button>8.0</button>
                    <span>Rất tốt</span>
                </div>
            </div>
            <div className="featuredProperty-item">
                <img
                    src="https://t-cf.bstatic.com/xdata/images/hotel/square200/85257658.webp?k=3b753fffd29f020beb8747f674ce7e721496577dc3e73dc6fb03f97edb86d701&o=&s=1"
                    alt=""
                    className="featuredProperty-img"
                />
                <span className="featuredProperty-name">Leman Locke</span>
                <span className="featuredProperty-city">London</span>
                <span className="featuredProperty-price">Giá từ VND 4.732.890</span>
                <div className="featuredProperty-rated">
                    <button>8.9</button>
                    <span>Tuyệt vời</span>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProperty;
