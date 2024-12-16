import React , { useState } from "react";
import blackheadephone from '../img/blackheadephone.webp';
import './css/Headphone.css';
import product from '../Data/product.json';
import headphone from '../Data/headphone.json';

function Headphone(){
    const[count,setcount]=useState(0);
    const[headphoneData,]=useState(headphone);
    function incrementCount(){
        setcount(count+1)
      };
      function decrementCount() {
        if(count >0){
            setcount(count-1)
        }
      };

      const[productData]=useState(product);
      function cart()
      {
            productData.items[0].count+=count;
      };

    return(
        <>
            <p className="headingheadphone">HEADPHONE</p>
            <div1>
                <leftdiv1>
                    <img src={blackheadephone} className="headephone" alt="no img"></img>
                </leftdiv1>
                <rightdiv1>
                    <p className="pclass">NEW PRODUCT</p>
                    <h1>{headphone.items[0].Name1}</h1>
                    <h1> {headphone.items[0].Name2}</h1>
                    <p className="pclass2">{headphone.items[0].body}
                    </p>
                    <h2 className="doller">{headphone.items[0].price}</h2>
                    <button className="button1" onClick={decrementCount}>-</button>
                    <button className="button1" >{count}</button>
                    <button className="button1" onClick={incrementCount}>+</button>
                    <button className="button2" onClick={cart}>ADD TO CART</button>
                </rightdiv1>
                
            </div1>
            <div2>
            <leftdiv2>
                    <h2 className="div2header">{headphone.items[1].name}</h2>
                    <p className="pclass2">{headphone.items[1].body1}
                        
                    </p>
                    <br/>
                    <p>
                        {headphone.items[1].body2}
                    </p>
                </leftdiv2>
                <rightdiv2>
                    <h2 className="div2header">IN THE BOX</h2>
                   
                        <p><span>1x</span>&nbsp;&nbsp;&nbsp;Headephone Unit</p>
                        <p><span>2x</span>&nbsp;&nbsp;&nbsp; Replacement Earcups</p>
                        <p><span>1x</span>&nbsp;&nbsp;&nbsp; User Manual</p>
                        <p><span>1x</span>&nbsp;&nbsp;&nbsp; 3.5mm 5m Audioo Cable</p>
                        <p><span>1x</span>&nbsp;&nbsp;&nbsp; Travel bag</p>
                    
                </rightdiv2>
            </div2>
           
        </>
    )
}
 export default Headphone;
