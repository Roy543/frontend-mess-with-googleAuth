import React, {useEffect,useState} from 'react'
//import axios from 'axios';
import MenuCard from './MenuCard';
import {itemContext} from '../App';
import MealMenu from './MealMenu';
import Menu from './Menu';
//import {itemContext} from '../App';
var store =require('store');

function RestaurantMenu() {
  const [items,setitems]=useState(store.get('items') ?? []);
  const [loading,setLoading]=useState(store.get('loading') ?? true);
  const [error, setError]=useState(store.get('error') ?? '');


  useEffect(()=>{
    //console.log("Restaurant menu rendered");
    if(items.length ===0){
      fetch('menu1.json')
      .then(response => response.json())
      .then(data => {
        console.log('data 1', data)
        store.set('error', '');
        store.set('loading', false);
        store.set('items', data);
        setLoading(false);
        setError('');    
        setitems(data);
      })
      
      //fetch url 
   // axios.get('https://my-json-yumito-server.herokuapp.com/menu')
    //.then(response =>{
     // store.set('error', '');
     // store.set('loading', false);
     /* store.set('items', response.data);
      setLoading(false);
      setError('');    
      setitems(response.data);
    })*/
    .catch((e)=>{
      store.set('loading', false);
      store.set('error', e.message);
      setError(e.message);
    });
  <div>
    breakfast

    </div>
  
  }
},[items])
    
    return ((
     error!=="" ? <h2 className="text-center text-danger border border-dark p-2 position-absolute top-50 start-50 translate-middle">{`${error}. Please try after sometime`}</h2> : loading === false ?
      (<div className="container-fluid menuLayout">
        {items && items.map((item) =>
        (<div key={item.id} className="container d-flex flex-column">
        <div className="h3 tt" id={item.category}>{item.category}</div>     
        <div className="menuCardWrapper d-flex flex-wrap">
        {item.items && item.items.map(i=>
          <MenuCard data={i} key={i.id}/>  
          )}    
        </div>
        </div> )
        )}
        <div>
          <div className='menuCard d-flex justify-content-between flex-wrap' >
            <div className=" p-2">
          <h4>Dosa</h4></div>
          <div className="py-2">
          <h5>Type - Breakfast</h5></div>
          <div className="menuCardImg position-relative">
               <img alt="" className="img-fluid img-rounded" src={"https://b.zmtcdn.com/data/pictures/7/18896837/9bfc04732beb60e473f1833848447d5f.jpg?output-format=webp"}/>
                <span className="position-absolute top-0 end-0 bg-primary badge" style={{padding:"10px"}}></span>
           </div>
           </div>
          <div className="menuCard d-flex justify-content-between flex-wrap">
          <h4 className='p-2'>Pohe</h4>
          <div className='d-inline-flex align-items-center flex-grow-1'>Breakfast</div>
          </div>
        </div>
        </div>) :
        (
          <div className="spinnerBlock d-flex justify-content-center">
          <div className="spinner-grow text-secondary" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-danger" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-warning" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
</div>
        )
      
    )
  
        )
  
}

export default React.memo(RestaurantMenu)
