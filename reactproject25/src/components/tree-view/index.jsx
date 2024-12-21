import MenuList from "./menu-list";

export default function TreeView({menus = []}) {
  return (
    <div className="tree-view-container">
      <h1>TreeView</h1>
      <MenuList list={menus}/>
    </div>
  );
}