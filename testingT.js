
let cartCounter =0;
let cart = document.querySelector('.cart-items')

async function getData(url){
    
    // let response = await fetch(url, {
    //     "method": "GET",
    //     "headers": {
    //         "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
    //         "x-rapidapi-key": "43a82c01fcmsh0a6ca645b047610p1fa831jsn085b4a8eaaa9"
    //     }
    // })
   let response = await fetch("https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=asia2&lang=en&currentpage=0&pagesize=30&categories=men_all&concepts=H%26M%20MAN", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
		"x-rapidapi-key": "43a82c01fcmsh0a6ca645b047610p1fa831jsn085b4a8eaaa9"
	}
})
.catch(err => {
	console.error(err);
});
        let data = await response.json();
        return data
    }
    
    function displayData(){
        const productsDisplay = document.querySelector(".products-center")
        getData("https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=asia2&lang=en&currentpage=0&pagesize=30&categories=men_all&concepts=H%26M%20MAN").then(data=>{
          data.results.forEach(element => {
              productsDisplay.innerHTML += 
              ` <div class = "pr">
              <img class="pr-image" src=${element.images[0].url}/>
              <h3>${element.name}</h3>
              <h3>${element.price.formattedValue.substring(1)}</h3>
              
              
              </div>`;
              
          });
        })
        }
    
    
    
    
    
        // catch(err => {
        //     console.error(err);
            
        // });
    
        function handleCartOrders(){

            document.querySelector(".pr").addEventListener((evt) => {
        
                cart.innerHTML = cartCounter++;
            })
        
        
        }
            
    
    
    
    
    displayData();
    handleCartOrders()
    
    
    
    
    
    
    
    
    
    
    
        // catch(err => {
        //     console.error(err);
            
        // });
    
        
    
    
    

    
    
    
    
    
    