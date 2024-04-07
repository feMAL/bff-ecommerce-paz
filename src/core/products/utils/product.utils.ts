import { CategoryResponseType, ProductFormatedReponseType, ProductResponseType } from "../responses/product.response";

export class ProductUtils {

    constructor() {

    }

    formatProducts ( products : ProductResponseType[] ): ProductFormatedReponseType[]{ 

        const result :ProductFormatedReponseType[] = [];
        
        const allCategories: CategoryResponseType[] = []

        const unknownCategory: CategoryResponseType = {
            name: "unknown",
            description: "pattern without category"
        }

        allCategories.push(unknownCategory);

        products.map(({categories})=> {
            if(categories.length > 0) {
                categories.map((category) => {
                    const existCategory = allCategories.find((savedCategory) => savedCategory.name === category.name); 
                    if(!existCategory){
                        allCategories.push(category);
                    }
                })
            }
        })

        allCategories.map((category) => {
            const productByCategory = [];
            if(category.name === "unknown"){
                products.map( (product) => {
                    const exist = product.categories.length === 0
                    if(exist){
                        productByCategory.push(product);
                    }
                });
            }else {
                products.map( (product) => {
                    const exist = product.categories.find((productCategory) => (productCategory.name === category.name));
                    if(exist){
                        productByCategory.push(product);
                    }
                });
            }
            result.push({
                ...category,
                products: productByCategory
            })
        })

        return result.filter((category) => (
            category.products.length !== 0 ? true : false
        ));
    }

}