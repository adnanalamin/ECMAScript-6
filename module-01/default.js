// Default -> if value is not provide, Take this as a default value.
function add(sum1=0,sum2=0){
    const result = sum1 + sum2;
    console.log(sum1,sum2,result);
    return result;
}

// const sum = add(5,7); // Output : 5 7 12
// const sum = add(5,); // Output : 5 undefined NaN
const sum = add(); // Output : undefined undefined NaN


// If i will expectex parameter willbe an string , so default parameter will be an empty string
function name(fristName='',lastName=''){}

// If i will expectex parameter willbe an Array , so default parameter will be an empty Array
function numbers(number = []){}

// If i will expectex parameter willbe an Object , so default parameter will be an empty Object
function persons(person = {}){}