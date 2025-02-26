import Products from "../model/productModel.js";

export const createProduct = async (req, res) => {
    try {
        const { name, category, image, description, price, countInStock } = req.body;
        const product = new Products({
            name, category, image, description, price, countInStock
        })
        await product.save();


        return res.status(201).json({
            message: "Product Created SuccessFully",
            success: true,
            product
        })

    } catch (error) {
        console.error('Error creating product:', error);
        return res.status(500).json({ message: 'Server error. Please try again later.' });
    }
}

export const GetAllProducts = async (req, res) => {
    try {
        const product = await Products.find() // Fetch all products from the database

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Get the total number of products in the database
        const totalProducts = await Products.countDocuments();
        return res.status(200).json({
            success: true,
            totalProducts: totalProducts,
            product
        })

    } catch (e) {
        console.error("Error Fetching products", e);
        return res.status(500).json({
            message: " Server error. please try again latere.",
            success: false
        });

    }
}
export const GetProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Products.findById(id); // Fetch One products from the database

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        return res.status(200).json({ product })

    } catch (e) {
        console.error("Error Fetching products", e);
        return res.status(500).json({ message: " Server error. please try again latere." });
    }
}


export const UpdateProductById = async (req, res) => {

    try {
        const { id } = req.params;
        const { name, category, description, image, price, countInStock } = req.body;

        const product = await Products.findByIdAndUpdate(
            id,
            { name, category, description, image, price, countInStock },
            { new: true } // Return the updated product
        )

        if (!product) {
            return res.status(404).json({ message: "Product NOt Found" })
        }
        // Get the total number of products in the database
        const totalProducts = await Products.countDocuments();
        return res.status(200).json({
            message: 'Product Updated Successfully.',
            success: true,
            totalProducts: totalProducts,
            product
        })

    } catch (error) {
        console.error("Error Updating Product", error);
        return res.status(500).json({
            message: "Server Err please try again..",
            success: false
        })
    }
}


export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Products.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: "Product Not Found" });
        }
        return res.status(200).json({
            message: "Deleted Product successFully",
            success: true
        })



    } catch (error) {
        console.error("Error deleting Product", error);
        return res.status(500).json({
            message: "Server Err please try again..",
            success: false
        })
    }
}