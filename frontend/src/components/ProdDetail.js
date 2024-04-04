import { Navigate, useParams, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductInfo } from '../services/productService';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
    const { isAuthenticated, user } = useSelector(state => state.user);

    const { productId } = useParams();
    console.log(productId)
    const [ product, setProduct ] = useState(null);
    
    useEffect( () => {
        const fetchProduct = async () => {
            try {
                const response = await getProductInfo(productId);
                setProduct(response);
            } catch (error) {
                console.error(error);
            }
        }
        fetchProduct();
    }, [productId]); 

    let navigate = useNavigate();

    if (!isAuthenticated) {
        return <Navigate to="/signin" />;
    }

    const handEditClick = () => {
        navigate(`/product-form/${product._id}`);
    };

    return (
        product && 
        <div className="h-full w-full flex justify-around items-center bg-gray-100">
            <div className="bg-gray-100 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-6">Products Detail</h1>
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div className="px-4 py-5 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div style={{ width: '100%', height: '400px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img className='h-96' src={product.image} alt={product.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                            </div>
                            <div className="px-4 py-5 sm:p-6">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Category1</h3>
                                <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">{product.name}</h2>
                                {product.stock === 0 && <div className="flex items-center mb-4">
                                    <p className="text-xl text-gray-900 mr-4">{product.price}</p>
                                    <p style={{
                                        backgroundColor: '#FFC0CB',
                                        color: '#FF0000',
                                        fontWeight: 'bold',
                                        padding: '8px 16px',
                                        borderRadius: '20px',
                                        display: 'inline-block',
                                        fontSize: '0.9rem',
                                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                                    }}>Out of Stock</p>
                                </div>}
                                <p className="text-gray-500 mb-6">{product.description}</p>
                                <div className='flex'>
                                <AddButton />
                                {user.admin && <button onClick={handEditClick} className="ml-3 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50">
                                    Edit
                                </button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AddButton = () => {
    const [count, setCount] = useState(0);
    return (
        count === 0 ? 
            <button className='bg-indigo-700 rounded-md px-6 py-3 w-2/5 text-white font-medium' onClick={() => setCount(count + 1)}>Add To Cart</button> : 
            <div className='bg-indigo-700 rounded-md px-6 py-3 w-2/5 text-white flex justify-between'>
                <button onClick={() => {setCount(count - 1)}}>-</button>
                <span>{count}</span>
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
    )
}

export default ProductDetail;

