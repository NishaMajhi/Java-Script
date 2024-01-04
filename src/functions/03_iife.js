// iife  - Immediate Involked Function Expression 
// when we want to execute function immdiately then we use iife
// to prevent the polution in a block of code(Function) from global scope 


//() - defination () - calling
(function one(name) {
    console.log(`${name} from function one`);
})("Nisha");  //always use semi-colon (;) afer a iife


((name) => {
    console.log(`${name} from function two`);
})("Neha")
