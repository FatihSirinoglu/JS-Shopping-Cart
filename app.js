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


const decrement = (id) => {
    let selectedItem = id
    console.log(selectedItem.id)
    console.log(basket)

    let search = basket.find((e)=> e.id === selectedItem.id);
    if (search.item === 0){
        basket.push({
            id: selectedItem.id,
            item: 1
        })
    }else {
        search.item -= 1
    }
}
const increment = (id) => {
    let selectedItem = id
    console.log(selectedItem.id)
    console.log(basket)

    let search = basket.find((e)=> e.id === selectedItem.id);
    if (search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1
        })
    }else {
        search.item += 1
    }
}
const update = () => {}