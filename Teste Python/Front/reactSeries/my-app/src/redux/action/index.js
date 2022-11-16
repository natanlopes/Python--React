

// para adiciona o item do carinho
export const addCart = (product) =>{
    return {
       type :"ADDITEM",
       payload : product
    }
}
// deleta o item do carinho
export const delCart = (product) =>{
    return {
       type :"DELITEM",
       payload : product
    }
}