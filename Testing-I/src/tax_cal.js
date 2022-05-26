
function taxCal(x){
    if(x<250000){
        return "no tax"
    }
    if(x<=500000){
        let rebate = Math.floor(x/2);
        let amount = x-rebate;
        let tax = Math.floor(amount*0.1);
        return tax;
    }
    if(x<=1000000){
        let rebate = Math.floor(x*0.3);
        let amount = x-rebate;
        let tax = Math.floor(amount*0.2);
        return tax;
    }
    if(x>1000000){
        let rebate = Math.floor(x*0.1);
        let amount = x-rebate;
        let tax = Math.floor(amount*0.3);
        return tax;
    }

}


module.exports = taxCal;