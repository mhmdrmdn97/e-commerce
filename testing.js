async function showData() {
    const response = await fetch("products.json");
    const data = await response.json();

async function getName(number) {
   name= data[number-1].fields.title;
    return name;
}
async function getPrice(number) {
    price= data[number-1].fields.price;
    return price;
}
async function getImg(number) {
    img= data[number-1].fields.image.fields.file.url;
    return img;
}
const itemsName= [];
const itemsPrice= [];
const itemsImg= [];
for(let i=1; i<9; i++){
itemsName.push(await getName(i));
itemsPrice.push(await getPrice(i));
itemsImg.push(await getImg(i));
}
console.log(itemsName[0]);
console.log(itemsPrice[0]);
console.log(itemsImg[0]);
  class Items{
    constructor(name,price,img){
        this.name= name;
        this.price= price;
        this.img= img;
    }
  }
  const items = [];
  for(let i=0; i<8; i++){
  items[i] = new Items(itemsName[i],itemsPrice[i],itemsImg[i]);
  }
  console.log(items[1].name);
  const itemsId= document.getElementById('items');
const imgy = [];
const namey = [];
const pricey = [];
  for(elem in items){
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
showData();