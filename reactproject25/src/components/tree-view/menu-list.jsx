import MenuItem from "./menu-item";
import "./styles.css";

export default function MenuList({ list = [] }) {
  return (
    <ul className="menu-list-container">
      {list?.length
        ? list.map((item, index) => <MenuItem item={item} />)
        : null}
    </ul>
  );
}
