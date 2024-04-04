import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const ProdCard = ({ product, admin }) => {
    const navigate = useNavigate();
    const [count, setCount] = useState(0);
    return (
        <div className='flex flex-col w-72 p-5 bg-white rounded-md'>
            <button onClick={() => navigate(`/product/${product._id}`)}>
                <img className='w-64 h-64 rounded-md' src={product.image}></img>
                <p className='text-left text-gray-500 mt-1'>{product.name}</p>
                <p className='text-left font-bold text-lg'>$ {product.price}</p>
            </button>
            <div className='flex w-full justify-between mt-1'>
            <AddButton count={count} setCount={setCount}/>
            {admin && <button className='w-2/5 border border-gray-300 rounded-md' onClick={() => navigate(`/product-form/${product._id}`)}>Edit</button>}
            </div>
        </div>
    )
}

const AddButton = ({count, setCount}) => {
    return (
        count === 0 ? 
            <button className='w-2/5 bg-indigo-700 rounded-md px-2 py-1 text-white' onClick={() => setCount(count + 1)}>Add</button> : 
            <div className='w-2/5 bg-indigo-700 rounded-md px-2 py-1 text-white flex justify-between'>
                <button onClick={() => {setCount(count - 1)}}>-</button>
                <span>{count}</span>
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
    )
}

export default ProdCard;