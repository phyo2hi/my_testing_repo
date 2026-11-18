let number = prompt("Enter the number: ")
let numberOfMultiply=prompt("Enter the number u want to multiply: ")
let i =1;
while (i <= numberOfMultiply){
    let result= number*i;
    document.write(`${number} x ${i} = ${result}<br>`);
    i++;
    
    
}
console.log("done")
