import { useState, useEffect } from "react";
import { setFilter } from "../redux/actionsCreators";
import { useDispatch } from "react-redux";

const Dropdown = () => {
  const data = [
    { id: "all", label: "all" },
    { id: "Africa", label: "Africa" },
    { id: "Americas", label: "Americas" },
    { id: "Asia", label: "Asia" },
    { id: "Europe", label: "Europe" },
    { id: "Oceania", label: "Oceania" },
  ];
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleItemClick = (label) => {
    selectedItem == label ? setSelectedItem(null) : setSelectedItem(label);
   dispatch(setFilter(label))
  };
  
 useEffect(() => {

 }, [selectedItem])
 

  const toggleDropdown = () => setOpen(!isOpen);
  

  return (
    <div className="dropdown  dark:bg-darkElement   shadow-md  mx-auto">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedItem
          ? items.find((item) => item.id == selectedItem).label
          : "Filter by Region"}
        <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
      </div>
      <div className={`dropdown-body ${isOpen && "open"}`}>
        {items.map((item) => (
          <div
            className="dropdown-item"
            onClick={(e) => handleItemClick(e.target.id)}
            id={item.id}
          >
            <span
              className={`dropdown-item-dot ${
                item.id == selectedItem && "selected"
              }`}
            >
              •
            </span>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
