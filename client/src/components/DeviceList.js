import { useContext } from 'react';
import { Context } from '../index';
import DeviceCard from './DeviceCard';
import '../css/devicelist.css'

const DeviceList = () =>{
    const {device} = useContext(Context);
    return(
        <div className='container-devicelist'>
            {device.devices.map (device => 
                <DeviceCard key={device.id} device={device}/>
            )}
        </div>
        
    )
}

export default DeviceList;