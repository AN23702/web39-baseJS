console.log("Hello world");

/*Phạm vi biến toàn cục
Được khai báo bên ngoài function hoac la ben ngoai block
Có thể sử dụng trong toàn chương trình*/
let name = "Nguyen Van A";
console.log(name);

/*Phạm vi biến trong 1 function - cục bộ
Giúp tổng hợp các logic
Khai báo biến trong function thì chỉ sử dụng trong function
Khai báo biến toàn cục vẫn có thể dùng trong function*/

/*Khai báo function*/
function hello() {
    // Logic
    console.log("Khong duoc bo cuoc");
} 

hello();

//Vd2 Khai bao function
function hi() {
    let height = 180;
    console.log(height);
} 

hi();

/*Phạm vi biến ở trong khối-block-cục bộ*/ 

// VD3 Khai bao 1 function
function sayHello() {
    console.log("Buoi toi tot lanh");
    city = "Ha Noi"; /*Biến biến cục bộ thành biến toàn cục bằng cách xóa từ khóa khai báo*/

}
sayHello();
console.log(city);

/*Các kiểu dữ liệu cơ bản
+ String: chuỗi text và ký tự
+ Number: chứa các chữ số 0-9, không có khoảng trắng, có dấu - */
let a = "Thoi tiet nhu loz";
let b = "Tra mua he day";
let message = "Sặp rai "+
"ma dờ phắc cơ";

console.log(a);
console.log(b); 
console.log(message);

// Nối chuỗi
let firstName = "Nguyễn ";
let lastName = "Đức An";
let fullName = firstName + lastName;

console.log(fullName);

// Template String ES6- nên dùng khi thao tác với chuỗi vì nó hiển thị cả ký tự
let friend = "Hiền";
 
console.log(`Xin chào, đây là ${friend} thối`);

