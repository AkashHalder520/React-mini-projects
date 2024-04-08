import { useEffect, useState } from 'react'
import './Pagination.scss'
function Pagination() {
    const [products, setProducts] = useState({})
    const fetchProduct = async () => {
        await fetch('https://dummyjson.com/products?limit=100')
            .then(res => res.json()).then(resdata => setProducts(resdata?.products))
    }
    console.log(products);
    // Call the function to fetch data (optional)
    useEffect(() => {
        fetchProduct();
    }, []);
    const numberOfPages=products.length/10;

   function renderProducts(){
    // we will render 10 products per page
//per page products
 products.slice

    console.log(products,"asdfsadf");
    return( 
        <>
        {
           products.map((item,key)=>{
            return(
                <span key={key} >
                    <img  src={item.thumbnail} alt="" />
                    <h2>{item.title}</h2>
                </span>
            )
           
        })
        }
        </>
    )
   }
    return (
       <>
       <div className='renderproducts'>
        {products.length>0 ? renderProducts():'' 
        }
       </div>
       <div className='renderPageno'>
        

       </div>
       </>
    )
}

export default Pagination