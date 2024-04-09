import { useEffect, useState } from 'react'
import './Pagination.scss'
function Pagination() {
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const fetchProduct = async () => {
        await fetch('https://dummyjson.com/products?limit=100')
            .then(res => res.json()).then(resdata => setProducts(resdata?.products))
    }
    console.log(products);
    // Call the function to fetch data (optional)
    useEffect(() => {
        fetchProduct();
    }, []);
    const numberOfPages = products.length / 10;
    function pagenNumber() {
        const pageNumbers = [];
        for (let index = 1; index <= numberOfPages; index++) {
            pageNumbers.push(index);
        }
        return pageNumbers
    }
    function handeClick(event) {
        event.preventDefault()
        let value = event.target.value
        console.log(value);
        setCurrentPage(value)

    }
    function renderProducts() {
        // we will render 10 products per page
        //per page products
        const start = (currentPage - 1) * 10;
        const end = start + 10;
        return products.slice(start, end).map((item, index) => (
            <div key={index}>
                <img src={item.thumbnail} alt="" />
                <h2>{item.title}</h2>
            </div>
        ));
       
    }


    return (
        <>
            <div className='renderproducts'>
                {products.length > 0 ? renderProducts() : 'loading......'}
            </div>
            <div className='renderPageno'>
                {
                    pagenNumber().map((i, key) => {
                        return (
                            <button
                                className={i==currentPage? 'paginationBtn active':'paginationBtn'}  
                                key={key}
                                onClick={handeClick}
                                value={i}
                            >{i}</button>
                        )
                    })
                }


            </div>
        </>
    )
}

export default Pagination