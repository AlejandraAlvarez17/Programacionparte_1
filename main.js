import ProductsManager from "./datos.js";

class ProductManager {
    constructor (){
        this.products=[];
        this.Id=0;       
    }
    


    addProduct(title,description,price,thumbnail,code,stock)
    {
        const isvalid= this.validarElProductInput(title,description,price,thumbnail,code,stock);


        if (title,description,price,thumbnail,code,stock){
            console.log("Faltan campos");
            return null;
        }
         else 
             if(this.products.some(product=>product.code===code)){
                console.error("El producto con el mismo codigo ya existe en la base de datos");
              return null;
             } else{
            const newProduct = {
            id:this.Id++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock

                };
                this.products.push(newProduct);
                return newProduct;
              }   
             }

             getproduct (){ 
                console.log(this.products);
             return this.products;
            }
            getProductById(id){
                let product=this.products.find(product.id===id);
                if (product){
                    console.log(product)
                    return product;
                }  
                else {
                    console.log("El productono existe");


                }
              }
            }






       
 




 














