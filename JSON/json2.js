var employee = {
    id:101,
    name:"naincy kamnani",
    age:19,
    gender:"female",
    address:{
        street:"c.g road",
        city:"Ahmedabad",
        state:"Gujarat",
        country:"India",
        pincode:380012
    },
    salary:35000,
    department:"HR",
    email:"naincy@gmail.com",
    mobile:[873645947,6767283473]
}

console.log(employee);
console.log(employee.id);
console.log(employee.name);
console.log(employee.age);
console.log(employee.gender);
console.log(employee.address);
console.log(employee.address.street);
console.log(employee.address.city);
console.log(employee.address.state);
console.log(employee.address.country);
console.log(employee.address.pincode);
console.log(employee.salary);
console.log(employee.department);
console.log(employee.email);
console.log(employee.mobile);
// console.log(employee.mobile[0]);
// console.log(employee.mobile[1]);


for(let i=0;i<employee.mobile.length;i++)
{
    console.log(employee.mobile[i]);
}















