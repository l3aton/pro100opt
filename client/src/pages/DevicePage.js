import DeviceTypeBar from '../components/DeviceTypeBar'
import DeviceList from '../components/DeviceList';
import '../css/devicepage.css'

const DevicePage = () => {
    return(
        <div className='container-devicepage'>
            <DeviceTypeBar/>
            <DeviceList/>
        </div>
    )
}

export default DevicePage;