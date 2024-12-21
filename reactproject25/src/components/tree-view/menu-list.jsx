import MenuItem from "./menu-item";

export default function MenuList({list = []}) {
    return <div className="menu-list-container">

{list?.length ?

list.map((item, index)=><MenuItem item={item}/>):null}

        </div>

}