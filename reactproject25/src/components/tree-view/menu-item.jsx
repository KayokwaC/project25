import MenuList from "./menu-list";
import {useState} from 'react';
export default function MenuItem({ item }) {
    const [displayChildren, setDisplayChildren] = useState({});
  return (
    <li>
      <div style={{display: 'flex', gap: '20px'}}>
      <p> {item.label}</p>
      {
        (item?.children && item.children.length>0) ? (<span>+</span>): null
      }
      </div>
      {item.children && item.children.length>0 ? (<MenuList list={item.children} />): null}
    </li>
  );
}
