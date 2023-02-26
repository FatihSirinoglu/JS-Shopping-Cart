const shopEl = document.getElementById("shop")

let shopItems = [
    {
        id:"setup1123417891",
        name:"setup1",
        price: 4250 ,
        image: "./images/1.jpg",
        desc: "best quality alskdnpqwn lkansdlka wd a lkandw" 
    },
    {
        id:"setup11568561",
        name:"setup2",
        price: 5250 ,
        image: "./images/2.jpg",
        desc: "best quality  mmakwd lawooa "
    },
    {
        id:"setup112311",
        name:"setup3",
        price: 6250 ,
        image: "./images/3.jpg",
        desc: "best quality awoppa wşmm mm a aaaaawqod "
    },
    {
        id:"setup645611",
        name:"setup4",
        price: 7250 ,
        image: "./images/4.jpg",
        desc: "very best quality ğppq  q qğöğğmğm qlmwmqw mmasömdq 213 "
    }
]
let basket = []

const generateShop = () => {
    return (shop.innerHTML = shopItems.map((e)=>{
        return `
    <div id="product-id-${e.id}" class="item">
        <img width="200" height="300" src=${e.image} alt="">    
        <div class="details">
            <h4>${e.name}</h4>
            <p>${e.desc}</p>
            <div class="price-quantity">
                <h2>${e.price}</h2>
                <div class="buttons">
                    <i onclick="decrement(${e.id})" class="bi bi-dash-lg"></i>
                    <div id="${e.id}" class="quantity">0</div>
                    <i onclick="increment(${e.id})" class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>      
    </div>
`;
    }).join(""))
}
generateShop()


let increment = (id) => {
    let selectedItem = id

    // We should define a search function because we need to check if the item is already in the basket or not. If it is already in the basket than we just need to decrement the quantity as 1
    let search = basket.find((x)=>x.id===selectedItem.id)
    if(search === undefined){
        // if search cant find the item that already exist than to the push action
        basket.push({
            id:selectedItem.id,
            item:1
        })
    } else{
        // if we find the item that already exist then do this
        search.item += 1
    }
    // console.log("increment")
    // console.log(id)
    // console.log(selectedItem.id)
    
    // After 'push'
    // console.log(basket) 
    update(selectedItem.id)

}
let decrement = (id) => {
    let selectedItem = id
    let search = basket.find((x)=>x.id===selectedItem.id)
    if(search.item === 0)return;
     else{
        // if we find the item that already exist then do this
        search.item -= 1
    }
    // console.log("decrement")
    // console.log(id)
    // console.log(selectedItem.id)
    
    // After 'push'
    // console.log(basket) 
    // here is a bug; if item bigger than 0 then clicking decrement is working but if item quantity is equal to 0 then it is turning an error that item cant read. 
    update(selectedItem.id)
}
let update = (id) => {
    // this function should run every time clicked the increment and decrement buttons
    let search = basket.find((x)=>x.id===id)
    console.log(search.item)
    document.getElementById(id).innerHTML = search.item
    calculation() 
}

let calculation = () => {
    // calculation function should always run when the update function runs
    document.getElementById("cart-amount").innerHTML = basket.map((x)=>x.item).reduce((x,y)=>x+y,0)
    // reduce x is previus value , reduce y is the next value and x always includes the previus values summery. The 0 is defult value.
}