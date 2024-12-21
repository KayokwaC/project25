import MenuList from "./menu-list";
import { useState } from "react";

export default function MenuItem({ item }) {
  const [displayChildren, setDisplayChildren] = useState({});

  function handleToggleChildren(label) {
    setDisplayChildren({
      ...displayChildren,
      [label]: !displayChildren[label],
    });
  }

  return (
    <li>
      <div style={{ display: "flex", gap: "20px" }}>
        <p> {item.label}</p>
        {item?.children && item.children.length > 0? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayChildren[item.label] ? "-" : "+"}
          </span>
        ) : null}
      </div>
      {item.children && item.children.length > 0 && displayChildren[item.label]? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
