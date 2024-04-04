import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../services/productService';
import ProdCard from './ProdCard';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProdList = () => {
    const { isAuthenticated, user } = useSelector(state => state.user);

    const [products, setProducts] = useState([]);
    const [originalOrder, setOriginalOrder] = useState([]);
    const [pageNo, setPageNo] = useState(1);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getAllProducts();
                setOriginalOrder(response);
                setProducts(response);
                
            } catch (error) {
                console.error(error);
            }
        }
        fetchProducts();
    }, [])

    const navigate = useNavigate();

    if (!isAuthenticated) {
        return <Navigate to="/signin" />;
    }

    const handleSelectChange = (e) => {
        const value = e.target.value;
        if (value === "la") {
            setProducts(originalOrder)
        } else if (value === "lh") {
            setProducts(products.slice().sort((a, b) => a.price - b.price));
        } else if (value === "hl") {
            setProducts(products.slice().sort((a, b) => b.price - a.price));
        }
    }

    return (
        <div className='flex flex-col'>
            {user.admin && <div className='flex justify-between items-center'>
                <span className='ml-5 text-2xl font-bold'>Products</span>
                <div>
                    <select onChange={handleSelectChange} className='px-3 py-2 mr-3'>
                        <option value="la">Last added</option>
                        <option value="lh">Price: low to high</option>
                        <option value="hl">Price: high to low</option>
                    </select>
                    <button className='mr-5 bg-indigo-700 px-3 py-2 my-3 rounded-md text-white' onClick={() => navigate("/product-form")}>Add product</button>
                </div>
                </div>
            }
            <div className='grid grid-cols-4 grid-rows-2 gap-y-8 place-items-center'>
                {products.slice((pageNo-1) * 8, (pageNo * 8)).map((product) => { 
                    return <ProdCard product={product} admin={user.admin}/> 
                })}
            </div>
            <div className='flex justify-end mt-5'>
                <PageButton pageNo={pageNo} setPageNo={setPageNo} maxVal={Math.ceil(products.length / 8)}/>
            </div>
        </div>
    )

}

const PageButton = ({pageNo, setPageNo, maxVal}) => {
    return (
        <div className='mr-5 w-28 bg-indigo-700 rounded-md px-2 py-1 text-white flex justify-between'>
            <button onClick={() => {setPageNo(Math.max(1, pageNo - 1))}}>-</button>
            <span>{pageNo}</span>
            <button onClick={() => setPageNo(Math.min(maxVal, pageNo + 1))}>+</button>
        </div>
    )
}

export default ProdList;