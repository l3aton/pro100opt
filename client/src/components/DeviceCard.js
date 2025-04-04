import '../css/devicecard.css'  
import React from 'react';

const DeviceCard = ({device}) => {

    return(
        <div className='cards-container'>
            <img src={process.env.REACT_APP_API_URL + device.img} alt="product-photo" className='product-photo'/>
            <div className='device-name'>{device.name}</div>
            <div>{device.price + ' грн'}<button className='buy-button'>Купити</button></div>
            
        </div>
    )
}

export default DeviceCard;