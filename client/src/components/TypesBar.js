import { useContext } from 'react';
import { Context } from '../index';
import '../css/TypeBar.css';


const TypesBar = () => {
    const {device} = useContext(Context)
    return(
        <ul className='types'>
            {device.types.map(type => 
                <li key={type.id} onClick={() => device.setSelectedType(type)} active = {type.id === device.selectedType.id} style={{cursor: 'pointer'}} >{type.name}</li>
            )}
        </ul>
    )
};

export default TypesBar;