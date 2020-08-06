import React, { useState, useEffect } from 'react'
import { Breadcrumb, Card, Button } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { BsArrow90DegLeft } from 'react-icons/bs'
import './Products.css'
import { useSelector, connect } from 'react-redux'

const Products = (props) => {

   //const localData = useSelector(state => state.dataReducer)
   const data = useSelector(state => state.dataReducer)
   console.log(data)

   

   return (
      <div>
         <div className='breadcrumb-box' >
            <Breadcrumb>
               <Breadcrumb.Item href="#"><Link to='/'>HOME</Link></Breadcrumb.Item>
               <Breadcrumb.Item href="#"><Link to='#'>MEN'S</Link></Breadcrumb.Item>
               <Breadcrumb.Item active>T-SHIRTS</Breadcrumb.Item>
            </Breadcrumb>
         </div>

         <div className='product-container'  >
         {data.length>0 && data.map((item, i) => (
            <div key={i} className="product-container-box" >
            <Card style={{ width: '25rem', height: '30em', border: 'none' }}>
                  <img src={item.imageUrl} className="card-image" />
                     <div className='card-body' >
                     <Link to={`/products/${item.serialNumber}`} ><Card.Text><h4>{item.productName}</h4></Card.Text></Link>
                        Price: <b>${item.price}</b>
                        Serial number: <b>{item.serialNumber}</b>
                        Description: <b>{item.description} </b>
                        Category: {item.category}
                        <div className={(item.regionNe + item.regionSe + item.regionSw)>10 ? "card-quantity-green" : "card-quantity-red"} > {(item.regionNe + item.regionSe + item.regionSw)} left in stock </div>
                        <Link to={`/products/${item.serialNumber}`} style={{width: '100%'}} > <Button variant="outline-success" className="card-btn" >SEE DETAILS</Button> </Link>
                     </div>
               </Card>
            </div> 
         ))}  
         </div>
      </div>
   )
}

function mapStateToProps(state) {
   return {
      data: state.dataReducer
   }
}


export default connect(mapStateToProps, {})(withRouter(Products)); 