const errorMiddleware = async(err, req, res, next)=>{
    console.log(err)
    return res.send(500).json({msg: "something went wrong, try again"})
}

module.export= errorMiddleware()