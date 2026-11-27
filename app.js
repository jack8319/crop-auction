const auctions=[
    {id: 1 , crop: "wheat", price: 2400},
    {id: 2, crop: "millet", price: 2500},
    {id: 3, crop: "rice", price: 3100},
];

const costly = auctions.filter((a)=> a.price> 2450);
const names  = auctions.map(({crop}) => crop);
const wheat = auctions.find((a)=>a.id===1);
const raised = {...wheat, price: wheat.price + 100};

// console.log(costly);
// console.log(names);
// console.log(wheat.price, raised.price);

  
function placeBid(auction, amount) {
    if (amount >= auction.price + 50) {
        return {...auction, price: amount };
    }
    throw new Error ("Bid too low");

}

//console.log(placeBid(wheat,2500));

function getAuctions(){
    return new Promise ((resolve) =>{
        setTimeout(()=> resolve (auctions), 1000);});
}
async function main(){
    try{
    console.log("Loading...");
    const list= await getAuctions();
    list.forEach(({crop,price})=> console.log(`${crop}: Rs${price}`));
    placeBid(list[0],2000);
    } catch (error){
        console.log("something went wrong: ", error.message);
    }

}
main();

