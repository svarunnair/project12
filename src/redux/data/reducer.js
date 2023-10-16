
import { DELETE_CART_FAILURE, DELETE_CART_REQUIEST, DELETE_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUIEST, GET_CART_SUCCESS, GET_DATA_FAILURE, GET_DATA_REQUIEST, GET_DATA_SUCCESS, PATCH_CART_FAILURE, PATCH_CART_REQUIEST, PATCH_CART_SUCCESS, POST_CART_FAILURE, POST_CART_REQUIEST, POST_CART_SUCCESS } from "./action"





const initState={
    iserror:false,
    isloading:false,
    data:[],
    cart:[],
}

export const reducerData=(state=initState,action)=>{
    switch(action.type){
        case GET_DATA_REQUIEST:
            return({
                ...state,
                isloading:true,
                iserror:false
            })
            case GET_DATA_SUCCESS:
              
                return({
                    ...state,
                    iserror:false,
                    isloading:false,
                    data:action.payload
                })
            

                case GET_DATA_FAILURE:
                    return({
                        ...state,
                        iserror:true,
                        isloading:false
                    })



                    case POST_CART_REQUIEST:
            return({
                ...state,
                isloading:true,
                iserror:false
            })
            case POST_CART_SUCCESS:
              
                return({
                    ...state,
                    iserror:false,
                    isloading:false,
                    postCart:action.payload
                })
            

                case POST_CART_FAILURE:
                    return({
                        ...state,
                        iserror:true,
                        isloading:false
                    })



                    case GET_CART_REQUIEST:
            return({
                ...state,
                isloading:true,
                iserror:false
            })
            case GET_CART_SUCCESS:
              
                return({
                    ...state,
                    iserror:false,
                    isloading:false,
                    getCart:action.payload
                })
            

                case GET_CART_FAILURE:
                    return({
                        ...state,
                        iserror:true,
                        isloading:false
                    })


                    case DELETE_CART_REQUIEST:
                        return({
                            ...state,
                            isloading:true,
                            iserror:false
                        })
                        case DELETE_CART_SUCCESS:
                          
                            return({
                                ...state,
                                iserror:false,
                                isloading:false,
                                cartDelete:action.payload
                            })
                        
            
                            case DELETE_CART_FAILURE:
                                return({
                                    ...state,
                                    iserror:true,
                                    isloading:false
                                })

                                case PATCH_CART_REQUIEST:
                        return({
                            ...state,
                            isloading:true,
                            iserror:false
                        })
                        case PATCH_CART_SUCCESS:
                          
                            return({
                                ...state,
                                iserror:false,
                                isloading:false,
                                patchCart:action.payload
                            })
                        
            
                            case PATCH_CART_FAILURE:
                                return({
                                    ...state,
                                    iserror:true,
                                    isloading:false
                                })






                    default:
                        return({
                            ...state
                        })
    }
}