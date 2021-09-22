async function overallFunction(){

function item(name,price,img){
this.name=name;
this.price=price;
this.img=img;
}
const response = await fetch("products.json");
const data = await response.json();
console.log(data);

console.log(data[0].fields.title)
const items=[];
for(elem in data){
    x= new item(data[elem].fields.title,data[elem].fields.price,data[elem].fields.image.fields.file.url);
    items.push(x);
}

console.log(items);

}
overallFunction()