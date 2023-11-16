import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({product}) => {

   

  return (
    <div className='col-md-4 col-lg-3 col-sm-6 p-3 '>
        <div >
            
    <div className="card" style={{ objectFit:'cover'}}>
        </div>
<img loading='lazy' src={product.image} className="card-img-top " alt={product.title} style={{objectFit:'contain' , height: "250px" }} />
<div className="card-body">
<h5 className="card-title">{product.title.substring(0,30)}</h5>
<p className="card-text w-100">
    {`${product.description.substring(0, 80)} more...`}
</p>
  
<h5 >{`Price: $${product.price} `}</h5>
<Link to={`/ProductDetail/${product.id}`} className="btn btn-dark w-100">
Detail
</Link>
</div>
</div>

    </div>
  )
}

export default Product