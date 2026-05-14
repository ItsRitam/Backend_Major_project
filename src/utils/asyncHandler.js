const asyncHandler = (requestHandler)=>{
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next))
        .catch(err => next(err))// The next is always used to pass the error to the error handling
        //  middleware in express. Basically, if any error occurs in the requestHandler, it will be
        //  caught and passed to the next middleware, which is usually the error handling
        //  middleware in express. This way, we can centralize our error handling logic and avoid 
        // having try-catch blocks in every route handler.

        //The next is just a flag which we pass around to each of the functions after solving something -- Ritam
     }
}

export {asyncHandler}


// const asyncHandler = (fn) =>async(req,res,next)=>{
//     try{

//     }
//     catch(error){
//         res.status(err.code || 500).json({
//             sucess:false,
//             message:err.message
//         })
//     }
// }     WE are comenting this out because this is for the try catch block ,
//  we will be using the promises and fetch methods for our this project