const Products = require('./products-db') 

module.exports = getAllProducts = async(req, res, next)=>{
    let products;
    try{
        products = await Products.find();
    }catch(err){
        return console.log(err)
    }
    if(!products){
        return res.status(404).json({message:"no products listed"})
    }
    return res.status(200).json({products})
}

module.exports = getOneProduct = async(req, res, next)=>{
    let product;
    try{
        product = await Products.findOne();
    }catch(err){
        return console.log(err)
    }
    if(!product){
        return res.status(404).json({message:"this product does not exist"})
    }
    return res.status(200).json({product})
}

module.exports = addProduct = async(req, res, next)=>{
    const {productName, category, description, price, productImage, availability} = req.body

    let existingUser;
    try{
        existingUser = await User.findById(User)
    }catch(err){
        console.log(err)
    }if(!existingUser){
        res.status(404).json({message:"user doenot exist"})
    }
    const product = new product({
        productName, category, description, price, productImage, availability
    })
    try{
    await mongoose.startSession();
    sessionStorage.startTransaction()
    await product.save({session})
    existingUser.Products.push(product);
    await existingUser.save({session})
    await session.commitTransaction();
    }catch(err){
        console.log(err)
        return res.status(500).json({message:err})
    }
    return res.status(200).json({product})
}

module.exports = deleteProduct = async(req, res, next)=>
{
    const id = req.params.id;
    let product
    try{
        product = await Products.findByIdAndDelete(id)
    }catch(err){
        console.log(err)
    }
    if(!product){
        return res.status(400).json({message:"unable to delete"})
    }return res.status(200).json({message:"deleted"})
    
}

module.exports = updateProduct = async(req, res, next)=>{
    let product;
    try{
        product = await Products.findByIdAndUpdate(id)
    }
    catch(err){
        console.log(err)
    }if(!product){
        return res.status(404).json({message:"not updated"})
    }return res.status(200).json({product})
}