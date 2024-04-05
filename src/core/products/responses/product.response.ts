export class CategoryResponseType {
    name: string;
    description: string;
}
export class TagsResponseType {
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
}

export class VariantResponseType {
    variant_identification: string;
    image: string[];
    description: string;
    color: string;
    tags: TagsResponseType[];
    createdAt: string;
    updatedAt: string;
}
export class ProductResponseType {
    pattern_identification: string
    title: string
    isExclusive: boolean
    price: number
    variants: VariantResponseType[];
    type: string;
    categories: CategoryResponseType[];
    createdAt: string;
    updatedAt: string;
}


export class ProductFormatedReponseType {
    name: string;
    description: string;
    products: ProductResponseType[]
}