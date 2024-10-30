function countSheeps(list) {
    
    const count = list.filter(item => item === true).length;
    let result;
    if (count > 0){
        result = `There are ${count} sheep in total`;
    }
    else{
        result = "UPS!!! Wolfs eaten Sheeps";
    }
    return result ;
}
let list = [ false, false, false ];
console.log(countSheeps(list));