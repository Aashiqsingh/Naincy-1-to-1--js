var product = {
    id:123,
    name:"Iphone",
    price:74898,
    isAvailable:true,
    color:["red","green","blue","white","pink"],
    review:"5 rating",
    category:"Phone",
    manufacturer:"Apple",
    stock:100,
    discription:{
        warranty:"5 years",
        battery:"5000mh",
        screenSize:"6.5 inch",
        memorySize:"64GB",
        camera:"12MP",
        connectivity:"Wifi, Bluetooth, NFC",
        processor:"A14 Bionic",
        display:"OLED",
        os:"iOS 12",
        chipset:"A14 Bionic",
        gpu:"PowerVR GX1650",
        storage:"512GB",
        weight:"1.57kg",
    }
}

console.log(product);
console.log(product.name);
console.log(product.price);
console.log(product.isAvailable);
console.log(product.color);

for(let i=0;i<product.color.length;i++)
{
    console.log(product.color[i]);
}

console.log(product.review);

console.log(product.category);

console.log(product.manufacturer);

console.log(product.stock);

console.log(product.discription);

console.log(product.discription.warranty);

console.log(product.discription.battery);

console.log(product.discription.screenSize);

console.log(product.discription.memorySize);

console.log(product.discription.camera);

console.log(product.discription.connectivity);

console.log(product.discription.processor);

console.log(product.discription.display);

console.log(product.discription.os);

console.log(product.discription.chipset);

console.log(product.discription.gpu);

console.log(product.discription.storage);

console.log(product.discription.weight);






