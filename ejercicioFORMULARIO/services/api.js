export const createProduct= async(product)=>{
    try {
        const response = await fetch('http://localhost:3000/productos',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: product
        });
        const createdProduct = await response.json();
        return createdProduct;
    } catch (e) {
        console.log("Error: ",e);
    }

}
const updateProduct=()=>{
    
}
export const listProduct=async()=>{
    try{
        const response = await fetch('http://localhost:3000/productos');
        const productsData = await response.json();
        return productsData
        console.log("List products: ", productsData);
    }catch(e){
        console.log("Error: ",e);
    }
    
}
const deleteProduct=()=>{
    
}
