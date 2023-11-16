import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const ProductDetail = () => {

    const [item,setItem] = useState({})
    const [wait,setWait] = useState(false)
    const [btn,setBtn] = useState('Add To Cart')
    
    const {id} =useParams()


    useEffect(()=>{

      const fetcData =async ()=>{
        setWait(true)
        const respo= await fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(json=>setItem(json))
        setWait(false)
        console.log(item)
      }
      fetcData()
      
    },[])
  
  

// const handelbtn=(product)=>{
//   if(btn==="Add To Cart"){
//     setBtn('Delet From Cart')
//   }else{
//     setBtn('Add To Cart')
//   }
// }


const data =()=>{
  return(
    <div className='row' key={item.id}>
    <div className='col-md-6 col-sm-12  p-4 d-flex justify-content-center align-items-center' style={{maxHeight:'100vh'}}>
        <img src={item.image}  style={{width:'70%',objectFit:'cover'}} alt=""/>
    </div>
    
    <div className='col-md-6 col-sm-12 p-4 d-flex flex-column justify-content-center align-items-center'>
    <h1 className="card-title">{item.title}</h1>
    <p className="card-text w-100">
{item.description}
<h2>{`Price: $${item.price} `}</h2>
{/* <a onClick={handelbtn(item)} href="#" className="btn btn-dark w-100">
{btn}
</a> */}


</p>

</div>

</div>

  )
}



const loading =()=>{
  return(
    <SkeletonTheme  baseColor="#d2d2d2" highlightColor="#fff">
        
           <div className='col-md-6 col-sm-12'>
           <Skeleton duration={0.5} width={500} height={400}/>
           </div>
           <div className='col-md-6 col-sm-12'>
           <Skeleton duration={0.5} width={450} height={50}/>
           <Skeleton width={450} height={100}/>
           <Skeleton duration={0.5} width={150} height={50}/>
           <Skeleton duration={0.5} width={450} height={50}/>
           </div>

        
    </SkeletonTheme>


  ) 

}



  return (


    <div className='container custom p-4 ' >
      {wait? loading():data()}
    </div>
  )
}

export default ProductDetail