import { Link, useNavigate, useLocation } from 'react-router-dom';

const ProdCard = ({ product, admin }) => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col w-72 p-5 bg-white rounded-md'>
            <button onClick={() => navigate(`/product/${product._id}`)}>
                <img className='w-full rounded-md' src={product.image}></img>
                <p className='text-left text-gray-500 mt-1'>{product.name}</p>
                <p className='text-left font-bold text-lg'>$ {product.price}</p>
            </button>
            <div className='flex w-full justify-between mt-1'>
            <button className='w-2/5 bg-indigo-700 rounded-md px-2 py-1 text-white '>Add</button>
            {admin && <button className='w-2/5 border border-gray-300 rounded-md' onClick={() => navigate(`/product-form/${product._id}`)}>Edit</button>}
            </div>
        </div>
    )
}

export default ProdCard;