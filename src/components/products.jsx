import React , { useState } from "react";
import  Headerphone from '../img/Headerphone.webp';
import blackheadephone from '../img/blackheadephone.webp';
import div3image1 from '../img/div3image1.png';
import div3image2 from '../img/div3image2.png';
import div3image3 from '../img/div3image3.png';
import logo1 from '../img/headphones.png';
import logo2 from '../img/image2.jpg';
import logo3 from '../img/speakers.webp';
import headphones from '../img/headphones.png';
import image2 from '../img/earphones.webp';
import image3 from '../img/speakers.webp';
import './css/Headphone.css';
import product from '../Data/product.json';
import headphone from '../Data/headphone.json';

function Product(){
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
            <div3>
                <leftdiv3>
                    <img src={div3image1} className="div3image1" alt="no image"></img>
                    <img src={div3image2} className="div3image2" alt="no image"></img>
                </leftdiv3>
                <rightdiv3>
                    <img src={div3image3} className="div3image3" alt="no image"></img>
                </rightdiv3>
            </div3>

            <div4>
                {/*this is the container1 jsx*/}
                <div className="container1">
                    <img src={logo1} alt="" className="picture1"/>
                    <h3 className="text1">XX99 MARK I</h3>
                    
                        <button className="see1">SEE PRODUCT</button>
                    
                </div>
                {/*this is the container2 jsx*/}
                <div className="container1">
                    
                    <img src={logo2} alt="" className="picture1"/>
                    <h3 className="text1">XX99 MARK II</h3>
                    
                    <button className="see1">SEE PRODUCT</button> 
                
                </div>
                {/*this is the container3 jsx*/}
                <div className="container1">
                    <img src={logo3} alt="" className="picture1"/>
                        <h3 className="text1">ZX9 SPEAKER</h3>
                    
                        <button className="see1">SEE PRODUCT</button>
                </div>
            </div4>
            <div5>
             {/*this is the headphone div */}
            <div className="container2">
                <img src={headphones} alt="" className="image2"/>
                <h3 className="text2">HEADPHONES</h3>
                <p className="shop2"><a href="https://google.com" target="_blank" rel="noreferrer">SHOP&nbsp;&nbsp;&gt;</a></p>
            </div>

            {/*this is the earphones jsx */}
            <div className="container2">
                <img src={image2} alt="" className="image2"/>
                <h3 className="text2">EARPHONES</h3>
                <p className="shop2"><a href="https://google.com" target="_blank" rel="noreferrer">SHOP&nbsp;&nbsp;&gt;</a></p>
            </div>

            {/*this is the speaker jsx */}
            <div className="container2">
                <img src={image3} alt="" className="image2"/>
                <h3 className="text2">SPEAKERS</h3>
                <p className="shop2"><a href="https://google.com" target="_blank" rel="noreferrer">SHOP&nbsp;&nbsp;&gt;</a></p>
            </div>

        </div5>

        <div6>
                <leftdiv6>
                    <h1>{headphoneData.items[2].info_head1}</h1>
                    <h1><span>{headphoneData.items[2].info_head2}</span> {headphoneData.items[2].info_head3}</h1>   
                    <p>{headphoneData.items[2].info_body}</p>  
                </leftdiv6>
                <rightdiv6>
                <img src={Headerphone} className="headephone" alt="A man listening to music with headphone"></img>
                    
                </rightdiv6>
        </div6>
           
        </>
    )
}
export default Product;
