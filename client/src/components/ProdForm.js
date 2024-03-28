import React, { useState, useEffect } from 'react';
import { createProduct, updateProduct } from "../service/productService";

const ProductForm = ({ product, onSubmit }) => {
    // Initialize form fields with product data if it exists, otherwise with default values
    const [name, setName] = useState(product?.name || '');
    const [description, setDescription] = useState(product?.description || '');
    const [category, setCategory] = useState(product?.category || 'Category1');
    const [price, setPrice] = useState(product?.price || '');
    const [stock, setStock] = useState(product?.stock || '');
    const [imageLink, setImageLink] = useState(product?.image || '');
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);


    // If the component is used for editing, it will receive a product prop and set the form fields accordingly
    useEffect(() => {
        if (product) {
            setName(product.name);
            setDescription(product.description);
            setCategory(product.category);
            setPrice(product.price);
            setStock(product.stock);
            setImageLink(product.image);
        }
    }, [product]);

    const handleImageUpload = (e) => {
        // Logic to handle image upload, probably involving setting the state of imageLink to the uploaded image's URL
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name,
            description,
            category,
            price: parseFloat(price),
            stock: parseInt(stock, 10),
            image: imageLink
        };
        if (typeof onSubmit === 'function') {
            onSubmit(formData);
        }
        try {
            let savedProduct;
            if (product?._id) {
                // Update existing product
                savedProduct = await updateProduct(product._id, formData);
            } else {
                // Create new product
                savedProduct = await createProduct(formData);
            }
            // If you have a state or context to update the product list in the UI, do it here
            // Also, you can redirect or show a success message
            setFeedbackMessage('Product saved successfully!');
            setIsFeedbackVisible(true);
        } catch (error) {
            // Handle errors, possibly showing a message to the user
            setFeedbackMessage(`Error saving the product: ${error.message}`);
            setIsFeedbackVisible(true);
            console.error('Error saving the product:', error);
        }
        setIsFeedbackVisible(true);
        setTimeout(() => setIsFeedbackVisible(false), 5000); // Hide after 5 seconds
    };

    return (
        <div className="h-screen w-screen flex justify-around items-center bg-gray-100">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">
                {product?._id ? 'Edit Product' : 'Create Product'}
                </h1>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    {isFeedbackVisible && (
                        <div className={`my-4 text-sm ${feedbackMessage.startsWith('Error') ? 'text-red-500' : 'text-green-500'}`}>
                            {feedbackMessage}
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Product name
                            </label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Product Description
                            </label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                rows="3"
                            ></textarea>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Category
                                </label>
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                >
                                    <option>Category1</option>
                                    {/* Other category options */}
                                </select>
                            </div>
                            <div className="w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Price
                                </label>
                                <input
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    type="number"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    In Stock Quantity
                                </label>
                                <input
                                    value={stock}
                                    onChange={(e) => setStock(e.target.value)}
                                    type="number"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Add Image Link
                                </label>
                                <div className="flex">
                                    <input
                                        value={imageLink}
                                        onChange={(e) => setImageLink(e.target.value)}
                                        type="text"
                                        className="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="http://"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleImageUpload}
                                        className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline"
                                    >
                                        Upload
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="border-dashed border-2 border-gray-200 rounded flex justify-center items-center py-8">
                            {imageLink ? (
                                <img src={imageLink} alt="Product preview" className="max-h-48" />
                            ) : (
                                <span className="text-gray-500">image preview!</span>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                        >
                            Add Product
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default ProductForm;

ProductForm.defaultProps = {
    onSubmit: async (formData) => {
        console.log('No onSubmit prop provided. Form data:', formData);
        // Default action if no onSubmit provided
    }
};
