import Product from "../model/product.model.js"

//add product

export const addProduct = async (req,res) => {
    // if(!req.isAdmin) return res.status(401).send("Only admin can add product")
    try {
       const newProduct = new Product(req.body) 
       await newProduct.save()
       res.status(201).send(newProduct)
    } catch (error) {
        res.status(500).send(error)
    }
}

//getting all products
// http:localhost:4000/api/products?limit=2&genre=Arts
export const getAllProducts = async (req,res) => {
    const qGenre = req.query.genre
    const qLimit = req.query.limit || 10
    const qSort = req.query.sort
  try {
    let products
    let sortOptions ={
        createdAt: -1   //sort by newest product
    }

    if(qSort){
        sortOptions = {price: qSort === "asc" ? 1 : -1}
    }

    if(qGenre){
        products = await Product.find({
            genre: {
                $in : [qGenre]   
            }
        }).sort(sortOptions).limit(qLimit)
    }else{
        products = await Product.find().sort(sortOptions).limit(qLimit)
    }
    if(!products) return res.status(400).send("Nothing found!")
     res.status(200).send(products)    
  } catch (error) {
    res.status(500).send(error)
  }
}

//get single product
export const getSingleProduct = async (req,res) => {
    try {
        const product = await Product.findById(req.params.id)
        if(!product) return res.status(400).send("Nothing found!")
        res.status(200).send(product) 
    } catch (error) {
        res.status(500).send(error) 
    }
}

//update product
export const updateProduct = async (req,res) => {
    try {
        const updateProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
               ...req.body 
            },
            {
                new: true
            }
        )
        
       res.status(201).send(updateProduct) 
    } catch (error) {
        res.status(500).send(error)
    }
}

//delete product
export const deleteProduct = async(req,res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).send("Product deleted successfully")
    } catch (error) {
        res.status(500).send(error)   
    }
}

