const authorize = (req,res,next) => {
    const { user } = req.query;
    if(user === 'Marmik'){
        req.user = {name : 'Marmik', id: 3}
        next()
    }
    else{
        res.status(401).send("<h1>Unauthorized</h1>")
    }
} 

module.exports = authorize;