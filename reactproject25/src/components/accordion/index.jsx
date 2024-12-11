
import { useState } from 'react';
import data from './data';

export default function Accordion() {
const [selected, setSelected] = useState(null);

function handleSingleSelection(currentId){
    // nullify the selected state if the currentId is the same as the selected
    setSelected(currentId === selected? null: currentId);
}

return <div className='wrapper'>
    <div className='accordion'>
        {
            data?.length>0? (
                data.map((item, index) => (
                    <div className='item'>
                        <div onClick={()=>handleSingleSelection(item.id)} className='title'>
                            <h3>{item.question}</h3>
                            <span>+</span>
                        </div>
                        {selected === item.id? <div className='content'>
                            <div>{item.answer}</div>
                        </div>:null}
                        </div>
                
            ))) :(<div>No data found</div>) 
        }
    </div>
</div>

}