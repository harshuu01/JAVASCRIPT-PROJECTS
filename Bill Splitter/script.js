const dishCost=[20,10,47,90];
let numberOfpersons= 3;

function billSplitter(dishCost,numberOfpersons){
    const totalBill= dishCost.reduce((acc,curr)=>acc+curr,0);
    const billPerperson = totalBill/numberOfpersons;
    return {totalBill,billPerperson}
}
const bill= billSplitter(dishCost,numberOfpersons);
console.log(`Total bill : ${bill.totalBill} ,Bill to be paid: ${bill.billPerperson}`)