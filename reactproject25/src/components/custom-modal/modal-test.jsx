import React, {useState} from 'react';
import Modal from './modal';

export default function ModalTest() {
    const [showModal, setShowModal] = useState(false);

    function closeModal() {
        setShowModal(false);
    }

    return ( <div>
           <button onClick={() => setShowModal(!showModal)}>Show Modal Popup</button>
         
           {
           showModal? <Modal show={showModal} onClose={closeModal} body={<div>Customized body sent as a prop</div>}/>: null
           } 
        </div>
    )
}