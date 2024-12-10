
import { useState } from 'react';
import data from './data';

export default function Accordion() {
const [selected, setSelected] = useState(null);

return <div className='wrapper'>
    <div className='accordion'>
        {
            data && data.length>0? (
                data.map((item, index) => (
                    <div className='item'>
                        <div className='title'>
                            <h3>{item.question}</h3>
                            <span>+</span>
                        </div>
                        </div>
                
            ))) :(<div>No data found</div>) 
        }
    </div>
</div>

}