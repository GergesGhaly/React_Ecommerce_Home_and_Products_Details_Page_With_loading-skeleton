import React, { useEffect, useState } from 'react'
import Product from './Product'


const ProductList = () => {

    const [data,setData] = useState([])
    const [catgory,setCatgory] = useState([])


const categoryName= () => {
    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCatgory(json))

}

const fetchData= async()=>{
const res= await fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(json=>setData(json))


}

 const specifiCategory=(catName)=>{
    fetch(`https://fakestoreapi.com/products/category/${catName}`)
    .then(res=>res.json())
    .then(json=>setData(json))

 }


  useEffect(()=>{
    if(data.length === 0){
        fetchData()
    }else{
        specifiCategory()
    }
    categoryName()
  },[])


  return (
    <>
    
    <h1 className='text-center p-4'>Our Products</h1>
    <div className='p-4 m-4 d-flex justify-content-center align-items-center'>
        
     <button onClick={()=>fetchData()} type="button" className="btn btn-dark">All</button> 
    {
        catgory.map((el)=>{
            return (
                <button key={el} onClick={()=>specifiCategory(el)} type="button" class="btn btn-dark">{el}</button>

            )
        })
    }
    </div>
    <div className='container'>
        <div className='row d-flex d-flex justify-content-center align-items-center'>
          
            {
         
                data.map((product)=>{
                    return <Product product={product} key={product.id}/> 
                })
            }

        </div>
    </div>
    </>
  )
}

export default ProductList