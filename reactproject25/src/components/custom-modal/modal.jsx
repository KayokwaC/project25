import './modal.css';


export default function Modal({ id, onClose, header, body, footer}) {
  // const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div id={id || "modal"} className="modal">
      <div className="modal-content">
        <div className="header">
            <span className="close-modal-icon" onClick={onClose}>&times;</span>
            <h2>{header || "Header"}</h2>
        </div>
        <div className="body">
            <p>{body || "This is out modal Body"}</p>
        </div>
        <div className="footer">
            <h2>{footer || "This is our footer"}</h2>
        </div>
      </div>
    </div>
  );
}
