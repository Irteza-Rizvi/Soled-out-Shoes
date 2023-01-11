import { loginFailure, loginStart, loginSuccess, logout } from "./userRedux";
import { publicRequest } from "../requestMethods"
import { getProductStart, 
    getProductFailure, 
    getProductSuccess, 
    deleteProductStart, 
    deleteProductSuccess, 
    deleteProductFailure ,
    updateProductStart,
    updateProductSuccess,
    updateProductFailure,
    addProductStart,
    addProductSuccess,
    addProductFailure,

} from "./productRedux";

export const login = async(dispatch, user)=>{
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login",user)
        dispatch(loginSuccess(res.data))
    }catch(err){
        dispatch(loginFailure());
    }
};

export const logoutUser = () => dispatch => {
    localStorage.removeItem('useLogin')
    dispatch({type:logout})
}

export const getProducts   = async(dispatch)=>{
    dispatch(getProductStart());
    try{
        const res = await publicRequest.get("/products");
        dispatch(getProductSuccess(res.data));
    } catch (err) {
        dispatch(getProductFailure());
    }
};

export const deleteProduct = async(id,dispatch)=>{
    dispatch(deleteProductStart());
    try{
        const res = await publicRequest.delete(`/products/${id}`);
        dispatch(deleteProductSuccess(id));
    } catch (err) {
        dispatch(deleteProductFailure());
    }
};

export const updateProduct = async(id,product,dispatch)=>{
    dispatch(updateProductStart());
    try{
        const res = await publicRequest.put(`/products/${id}`,product);
        dispatch(updateProductSuccess(id, product));
    } catch (err) {
        dispatch(updateProductFailure());
    }
};

export const addProduct = async(product,dispatch)=>{
    dispatch(addProductStart());
    try{
        const res = await publicRequest.post(`/products/`, product);
        dispatch(addProductSuccess(res.data));
    } catch (err) {
        dispatch(addProductFailure());
    }
};