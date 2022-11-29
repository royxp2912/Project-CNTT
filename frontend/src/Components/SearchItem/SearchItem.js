import React from 'react';
import './searchItem.scss';

const SearchItem = () => {
    return (
        <div className="search-item">
            <img
                src="https://cf.bstatic.com/xdata/images/hotel/square200/386096064.webp?k=b6426ec515643d578b08002477610ceb64dc9226554deee231b0c0ad5b5ae54e&o=&s=1"
                alt=""
                className="search-img"
            />
            <div className="search-desc">
                <h1 className="search-title">Vườn Xuân Hotel</h1>
                <span className="search-distance">Cách trung tâm 1.8km</span>
                <span className="search-taxi">Free Airport Taxi</span>
                <span className="search-subtitle">Studio Apartment with Air Conditioning</span>
                <span className="search-features">Entire studio • 1 bathroom • 21m² 1 full bed</span>
                <span className="search-cancel">Free cancellation</span>
                <span className="search-cancelTitles">You can cancel later, so lock in this great price today!</span>
            </div>
            <div className="search-Detail">
                <div className="search-rate">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="search-detailtext">
                    <span className="search-price">$123</span>
                    <span className="search-fees">Includes taxes and fees</span>
                    <button className="search-buttonOP">See availability</button>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;
