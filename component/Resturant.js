import React , {useState} from 'react';
import './style.css' ;
import Menu from './menuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueCategory = [...new Set(Menu.map((curElem) => {
  return curElem.category;
})
),
"All",
];
//console.log(uniqueCategory);

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueCategory);
  const filterItem = (category) => {
    if( category === "All"){
      setMenuData(Menu);
      return;
    }
    const UpdatedList = Menu.filter((curElem) => {
      return curElem.category === category;

    });
    setMenuData(UpdatedList);
  };
 // console.log(menuData);
 // console.log(setMenuData);
    return (
      <>
      <Navbar filterItem ={filterItem} menuList ={menuList} />
      <MenuCard menuData= {menuData}/>
      </>

     );
};

export default Resturant;