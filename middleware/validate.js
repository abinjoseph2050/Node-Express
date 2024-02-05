function Validate(req, res, next){
    if(req.token === 123) {
        console.log('Token Approved!');
        next()
        return;
    }
}

module.exports = Validate; 