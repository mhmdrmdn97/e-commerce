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
const itemsId= document.getElementById('items');
const imgy = [];
const namey = [];
const pricey = [];
for(elem in data){
    const containerCreate = document.createElement('div');
const container = itemsId.appendChild(containerCreate);
container.className = 'item';

    const imgName = document.createElement('div');
    imgName.style.cssText = `background: url(${items[elem].img}); background-position: center;background-repeat: no-repeat;background-size: cover; height: 10rem;`
 imgy[elem] =container.appendChild(imgName);
    const divName = document.createElement('div');
    divName.style.cssText = `padding-left:40%; font-size:2rem; padding-bottom:3%;`;
    namey[elem] =container.appendChild(divName);
namey[elem].innerHTML= items[elem].name;
    const divPrice = document.createElement('div');
    divPrice.style.cssText = `padding-left:40%; font-size:2rem;padding-bottom:2%;`;
 pricey[elem] =container.appendChild(divPrice);
pricey[elem].innerHTML= `${items[elem].price}$`;
}
}
overallFunction()