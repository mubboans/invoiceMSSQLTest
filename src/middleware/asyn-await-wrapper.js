const asyncHandler = fn => async (req, res, next) => {
    try{
        await fn(req, res, next)
    }
    catch(err){
        throw(err)
    };
}    

module.exports = asyncHandler