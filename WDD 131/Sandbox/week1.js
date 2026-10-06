console.log("Hello World!")

const PI = 3.14;
let radius = 3;
                  
const one = 1;
const two = '2';
                    

let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
console.log(student); //does not work, can't access a block variable outside the block
                    


function double(x){
    return x *2;
}

const double2 = function(x){
    return x * 2;
}

const double3 = (x) => x * 2 

function modifyList(list,callback){
    list.forEach(callback)
}

modifyList([1,2,3], double);
modifyList([1,2,3], function(x) { return x * 2 });
modifyList([1,2,3], (x) => x * 2 );
