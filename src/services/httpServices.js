import axios from "axios";
 import logger from './logService'
import {toast} from'react-toastify';
axios.interceptors.response.use(null,error=>{
    const expectedError =   error.response
                            &&error.response.status>=404
                            &&error.response.status<500;
    if(!expectedError ){
    logger.log(error);
    toast("unexpected error");
    }
    return Promise.reject(error)
  
  });

  export default{
      get : axios.get,
      put: axios.put,
      post:axios.post,
      delete:axios.delete
  }