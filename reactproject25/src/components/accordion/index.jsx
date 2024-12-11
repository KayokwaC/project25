
import { useState } from 'react';
import data from './data';
import './style.css';

export default function Accordion() {
const [selected, setSelected] = useState(null);
const [multiSelectEnabled, setMultiSelectEnabled] = useState(false);
const [selectedItems, setSelectedItems] = useState([]);


function handleSingleSelection(currentId){
    // nullify the selected state if the currentId is the same as the selected
    setSelected(currentId === selected? null: currentId);
}

function handleMultiSelection(currentId){

    if(!multiSelectEnabled){
        return;
    }
    if(selectedItems.length === 0){
        setSelectedItems([currentId]);
        return;
    }
    // nullify the selected state if the currentId is the same as the selected
    selectedItems.includes(currentId)? setSelectedItems(selectedItems.filter((id)=> id !== currentId)): setSelectedItems([...selectedItems, currentId]);
  
}

function enableMultiSelection(value){
    setMultiSelectEnabled(value);
    setSelectedItems([]);
    setSelected(null);
}

return <div className='wrapper'>
    <h1>Accordion</h1>
    <button onClick={()=>enableMultiSelection(!multiSelectEnabled)}>Enable Multi Selection</button>
    <div className='accordion'>
        {
            data?.length>0? (
                data.map((item, index) => (
                    <div className='accordion-item'>
                        <div onClick={multiSelectEnabled?(()=>handleMultiSelection(item.id)):(()=>handleSingleSelection(item.id))} className='title'>
                            <h3>{item.question}</h3>
                            <span>+</span>
                        </div>
                        {(selected === item.id || selectedItems.includes(item.id))? <div className='content'>
                            <div>{item.answer}</div>
                        </div>:null}
                        </div>
                
            ))) :(<div>No data found</div>) 
        }
    </div>
</div>

}