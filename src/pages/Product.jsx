import ProductCart from "../components/ProductCart";
import React, { useState } from "react";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { createDataFunc } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";


const Product = () => {

    const {modal}=useSelector(state=>state.modal);
    const{data}=useSelector(state=>state.data);
    const dispatch=useDispatch();

    const [productInfo,setProductInfo]=useState({name:"",price:"",url:""});

    //resim ekleme işlemi için
        const onChangeFunc=(e,type)=>{
            if(type=="url"){
              //resmi url dönüştürdük
                setProductInfo(prev=>({...prev,[e.target.name]:URL.createObjectURL(e.target.files[0])}))
            }
            else
            {
                setProductInfo(prev=>({...prev,[e.target.name]:e.target.value}))
            }
        }


  const buttonFunc=()=>{
  dispatch(createDataFunc(productInfo))


}
  //modal içerisindeki elemanları content modal ile gönderiyoruz.
  const contentModal=(
    <>
       <Input type={"text"} placeholder={"Ürün Ekle"} name={"name"} id={"name"} onChange={e=>onChangeFunc(e,"name")}/>
       <Input type={"text"} placeholder={"Fiyat Ekle"} name={"price"} id={"price"} onChange={e=>onChangeFunc(e,"price")}/>
       <Input type={"file"}placeholder={"Resim Seç"} name={"url"} id={"url"} onChange={e=>onChangeFunc(e,"url")}/>
        <Button btnText={"Ürün Oluştur"} onClick={buttonFunc()}/>
    </>
  )
  return (
    <div>
      <ProductCart />
      {modal && <Modal content={contentModal} title="Ürün Oluştur" />}
    </div>
  );
};

export default Product;
