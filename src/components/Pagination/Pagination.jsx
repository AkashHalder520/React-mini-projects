import React, { useEffect, useState } from 'react'

function Pagination() {
    const [products, setProducts] = useState({})
    const fetchProduct = async () => {
        await fetch('https://dummyjson.com/products?limit=100')
            .then(res => res.json()).then(resdata => setProducts(resdata))
    }
    console.log(products);
    // Call the function to fetch data (optional)
    useEffect(() => {
        fetchProduct();
    }, []);
   
    return (
       <>
       <div>
        
       </div>
       </>
    )
}

export default Pagination