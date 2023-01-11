import { Link, useLocation } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";
import { useSelector } from "react-redux"
import {useDispatch} from "react-redux";
import { useState } from "react";
import { updateProduct } from "../../redux/apiCalls";



export default function Product() {
    const location = useLocation();
    const productId = location.pathname.split("/")[2];
    const product = useSelector(state => state.product.products.find(product =>  product._id === productId))

    const  [inputs, setInputs] = useState({});
    const [price, setPrice] = useState()
    const dispatch = useDispatch()
    
    const handleChange = (e) => {
      setInputs((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
      });
    };

    const handlePrice = (e) => {
      setPrice(price, e.target.value)
    }

  const handleClick = (e) => {
    const update = {...inputs}
    
    updateProduct(product._id,update,dispatch)


  }
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
       
      </div>
      <div className="productTop">
          
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img 
                  src={product.img} 
                  alt="" 
                    className="productInfoImg" />
                  <span className="productName">{product.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{product._id} </span>
                  </div>
                  
                  <div className="productInfoItem">
                      <span className="productInfoKey">in stock:</span>
                      <span className="productInfoValue">{product.inStock}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" placeholder={product.title} onChange = {handleChange} />
                  <label>Product price</label>
                  <input name = "price" type="number" placeholder={product.price} onChange = {handleChange} />
                  <label>In Stock</label>
                  <select name="inStock" id="idStock" onChange = {handleChange}>
                      <option value = "0">{product.inStock}</option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                  </select>
                  
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={product.img} 
                       alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button onClick={handleClick} className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
