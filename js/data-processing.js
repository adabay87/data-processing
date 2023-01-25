//alert ("hello from data-processing!");

const queryString = window.location.search;
console.log(queryString);



if(queryString.length > 0){
    const urlParams = new URLSearchParams(queryString);
    let myData = "";
    let myCart ="";
    let myTotal =0;//will store total cost 
    console.log(urlParams)
    
    myCart += "<h3>Cart content</h3>";
   


   /* Cart contents
   Widget: $3.99
    Sprocket: $5.99
    Thingy: $1.99
    Total: $11.97*/

   
   
    urlParams.forEach(function(value, key) {
      
        if(key == "Cart"){//cart
           //alert("Cart Item: " + value)

           switch(value){
            case "Widget":
                myCart += "Widget: $3.99<br>";
                 myTotal += 3.99;
            break;
            case "Sprocket":
                myCart += "Sprocketet: $5.99<br>";
                 myTotal += 5.99;
            break;
            case " Thingy":
                myCart += " Thingy: $1.99<br>";
                 myTotal += 1.99;
            break;
           }

          
        }else{//shipping label
            let keLower = key.toLowerCase();
            key = keLower.split("_");
            // let str = ""
           let str =  key.map(word=>{
                return word.charAt(0).toUpperCase() + word.slice(1)
            }).join(' ')
            
            myData +=`<p>${str}: ${value}</p>`;
        }
      

    
      //swaps underscore for space
      
     //console.log(key, key);
    });
    myCart += "Total:" + myTotal + '<br>';
   
    myData = myCart + myData;
    myData += '<p><a href="index.html">CLEAR</a></p>';
    document.getElementById("output").innerHTML = myData;
}