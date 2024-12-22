import React, { useState } from "react";
export default function Tabs({ content, onChange }) {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <div className="wrapper">
      <div className="heading">
        {content.map((item, index) => (
          <div key={index} onClick={() => onChange(index)}>
            {item.title}
            <span className="label">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="content">
        {content[activeTabIndex]?.content}
      </div>
    </div>
  );
}
