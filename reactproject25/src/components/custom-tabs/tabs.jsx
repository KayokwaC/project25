import React, { useState } from "react";
import "./tabs.css";
export default function Tabs({ content, onChange }) {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    function handleOnChange(index) {
        setActiveTabIndex(index);
       onChange(index);
    }
  return (
    <div className="wrapper">
      <div className="heading">
        {content.map((item, index) => (
          <div className={`tab-item ${activeTabIndex=== index ? "active": ""}`} key={index} onClick={() => handleOnChange(index)}>
           
            <span className="label"> {item.title}</span>
          </div>
        ))}
      </div>

      <div className="content" style={{ color: "red" }}>
        {content[activeTabIndex]?.content}
      </div>
    </div>
  );
}
