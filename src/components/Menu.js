import React,{useContext,useEffect, useState} from 'react'
import Cart from './Cart'
import CategoryBar from './CategoryBar'
import RestaurantMenu from './RestaurantMenu'
import {itemContext} from '../App';
var store =require('store');

const Menu = () => {

    const [menu,secretmenu ] = useState([
        {
            _id: 1,
            name: "Apple",
            amount: 1,
            mealtype: "Breakfast"
        },
        {
            _id: 2,
            name: "Boiled Eggs",
            amount: 2,
            mealtype: "Breakfast"
        },
        {
            _id: 3,
            name: "Sandwhich",
            amount: 1,
            mealtype: "Breakfast"
        }
    ])
    return (
        <div>
            <h1>List of the food items</h1>
            <ul>
                {menu.map(menu => {
                    return(<li key={menu._id}>{menu.name}</li>)
                })}
            </ul>
        </div>
    )
}



/*

function Menu() {
    const iL = useContext(itemContext);
    const orderedItems =store.get('orderedItems');
    let {list}=iL.state ?? orderedItems ;
    //console.log("menu rendered");
    // navbar scrollup and down logic
    //let prev= window.scrollY;
   
    useEffect(()=>{ 
        let prev= window.scrollY;  
        const scrolling = ()=>{
            let current = window.scrollY;
            const catBar = document.getElementById("categoryBar");
            //const loggedbar = document.getElementsByClassName("loggedBar");
            console.log(prev, current,"p","c")
            if (prev > current && current <10) {
                if(catBar){
                    catBar.style.top = "85px";
                }
              } 
            else{
                if(catBar){
                   document.getElementById('categoryBar').style.top = "0" ;
                }
            }
              prev = current;
        }   
         document.addEventListener('scroll', scrolling)
         return ()=> document.removeEventListener('scroll', scrolling);
         
        },[])
    return (
        <div>
            <CategoryBar/>
            <RestaurantMenu/>
            {list && (list.length>0 ? <Cart/> : <></>)}
        </div>
    )
}*/

export default React.memo(Menu)
