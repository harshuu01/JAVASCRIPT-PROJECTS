const customer= {
    name:"Harry",
    balance: 10000,
}

const deposit = function(amount){
    this.balance +=amount;
    console.log(`deposit of ${amount}successful. New Balance is ${this.balance}` );

}
const withdraw = function(amount){
    if(this.balance <amount){
        console.log("Insufficient Balance WIthdraw Failed")}
        else{
            this.balance-=amount;
            console.log(`withdraw of ${amount} successful. New Balance ${this.balance}`)
        };
    
}
withdraw.call(customer,2000);
deposit.call(customer, 4000);