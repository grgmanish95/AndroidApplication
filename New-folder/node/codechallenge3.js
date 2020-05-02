var tipss= function tips(billAmount){
    if (billAmount < 50){
        return (20/100)*billAmount;
        
    }

    else if (billAmount >= 50 && billAmount <200 ) {
        return (15/100)*billAmount;
    }
    else{
        return (10/100)*billAmount;
    }
}


tips(124);
tips(48);
tips(268);

console.log(tipss);