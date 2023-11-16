import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'


const About = () => {

  const [wait, setWait] = useState(false)

  useEffect(() => {
    window.onload =fun()
    }
  )
  
  console.log(wait)
  
  const fun=()=>{
   
    setWait(true)
  }
  




const loading = () => {
  return (
<>
<SkeletonTheme  baseColor="#d2d2d2" highlightColor="#fff">

<div className='col-6'>
  <Skeleton width={400} height={400}/>
    </div>
        <div className='col-6'>
        <Skeleton width={400} height={450}/>

        </div>
</SkeletonTheme>

</>    
  )
}

const data =()=>{
  return (
    <>
            <div className='col-lg-5  '>
            <img className='img-fluid' src="https://www.dreamhost.com/blog/wp-content/uploads/2020/11/The-Perfect-About-Us-Page-Feature-750x499.jpg" />
        </div>
        <div className='col-lg-5  p-5 d-flex flex-column  align-items-center' >
            <h3>About Us</h3>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section Tut react in arabic G-Ghaly 13-10-22 .
            </p>
            </div>

    </>
  )
} 

  return (
    <div className='container p-5 d-flex align-items-center'>

    <div className='row d-flex p-5 justify-content-between align-items-center'>
    {wait? data():loading()}
    </div>

    </div>
  )
}

export default About