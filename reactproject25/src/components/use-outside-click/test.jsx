import { useState, useRef } from "react";
import useOutsideClick from ".";

export default function UseOutsideClickTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div>
      {showContent ? (
        <div ref={ref} style={{ border: "2px solid red", padding: "10px", width: "200px", display: "inline-block" }}>
          <h1>This is random Content</h1>
          <p>Click outside to hide</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}
