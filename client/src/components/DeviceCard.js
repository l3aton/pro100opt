import '../css/devicecard.css'

const DeviceCard = ({device}) => {

    return(
        <div className='cards-container'>{device.name}</div>
    )
}

export default DeviceCard;