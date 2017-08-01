
//Hoising Scope

console.log(a); //Undefined but why?

var a = 4;

/*
 Javascript Engine partitions the code var a = 2; into two different parts
 First part is var a; (Declaration part) and 2nd a = 4; (assignment)
 Declaration part is used during the compilation time while the
 Assignment part is used during execution time as follows:

 var a;
 
 console.log(a);

 a = 4;

*/

b = 8;

var b;

console.log(b); // 8

/*
 This is because the declaration part will be compiled first
 and then the assignment part left for execution time
 as follows;
 
 var b;

 b = 8;

 console.log(b);

 */
