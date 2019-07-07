class Grocery {
    fullList: string;
    constructor(public brand: string, public product: string, public quantity: number) {
        this.fullList = "Brand: " + brand + ", Product: " + product + ", Quantity1: " + quantity;
    }
}

interface List {
    brand: string;
    product: string;
    quantity: number;
}

function productsList(list:List) {
        return "Product: " + list.product + ", Brand: " + list.brand + ", Quantity: " + list.quantity;
}

let productArray = new Grocery("Bread","Bunny Bread", 10);

document.body.textContent = productsList(productArray);