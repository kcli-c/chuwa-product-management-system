import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../services/productService';
import ProdCard from './ProdCard';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProdList = () => {
    const { isAuthenticated, user } = useSelector(state => state.user);

    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [pageNo, setPageNo] = useState(1);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getAllProducts();
                setProducts(response);
            } catch (error) {
                console.error(error);
            }
        }
        fetchProducts();
    }, [])

    return (
        <div className='flex flex-col'>
            {user.admin && <button onClick={() => navigate("/product-form")}>Add product</button>}
            <div className='grid grid-cols-4 grid-rows-2 gap-y-8 place-items-center'>
                {products.slice((pageNo-1) * 8, (pageNo * 8)).map((product) => { 
                    return <ProdCard product={product} admin={user.admin}/> 
                })}
            </div>
            <input value={pageNo} onChange={(e) => setPageNo(e.target.value)}/>
        </div>
    )

}

export default ProdList;