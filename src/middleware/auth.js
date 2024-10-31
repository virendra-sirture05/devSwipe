const adminAuth = (req,res,next) =>{
    const token = 'xyz123';
    const isAuthorized = token === 'xyz';
    if(!isAuthorized){
        res.status(401).send('unauthorized');
    }
    else next();
}

const userAuth = (req,res,next)=>{
    const token = '12323';
    const isUser = token === '123';
    if(!isUser){
        res.status(404).send('kya he be');
    }
    else next();
}

module.exports = {
    adminAuth,
    userAuth
}