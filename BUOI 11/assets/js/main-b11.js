// Function giúp tập hợp các đoạn code để sử dụng nhanh chóng
    //Khai báo 1 function
    function hello() {
        console.log("Hello world");
    }

    //Thực thi function
    hello();

//Function tham số và đối số
// Tham số Parameters: Đặt tên tuỳ ý
// Đối số Argument
//Nên sử dụng tối đa 3 tham số


function hi(name, age) { //name age: tham số
    console.log(`Xin chào! Mình là ${name}, năm nay mình ${age} tuổi!`);
}

hi("An", 22); //Giá trị truyền vào: đối phó
hi("Tuyết", 1);

//VD Function tính toán
function sum(yearOfBirth, thisYear) {
    console.log(`Năm nay tôi ${thisYear-yearOfBirth} tuổi!`)
}

sum(2002,2024);
sum(2004,2024);

/*Các loại function
+ Function không có tham số: ít dùng
+ Function có tham số: ít dùng
+ Function trả về kết quả: dùng nhiều*/

function sum1(a,b,c) {
return (a + b + c);
}

let data = sum1(23,7,2);
console.log(data);

// Câu lệnh có điều kiện
/*
Lớn hơn >
Bé hơn <
Lớn hơn hoặc bằng >=
Bé hơn hoặc bằng <=

Gán giá trị =
So sánh giá trị ==
So sánh giá trị + kiểu dữ liệu ===
*/
// let money = 30000;
// if(money > 27000) {
//     console.log('Bạn đã đủ tiền dapho')
// }

//Câu lệnh điều kiện if-else
let hour = 5;
if (hour < 12) {
    console.log("Buoi sang")
} else {
    console.log("Buoi chieu")
}

// Câu lệnh điều kiện if - else if - else
let time = 10;

if (time < 12) {
    console.log("Chao buoi sang")
} else if (time >= 12 && time < 19){  /*&& Và*/
    console.log("Chao buoi chieu")
} else {
    console.log("Chao buoi toi")
}

// Switch case
let money = 10000

switch (money) {
    case 12000 : {
        console.log("Ca phe sua");
        break;
    }
    case 10000 : {
        console.log("Ca phe da");
        break;
    }
    case 8000 : {
        console.log("Sting dau");
        break;
    }
    case 2000 : {
        console.log("Ca phe sua");
        break;
    }
    default : {
        console.log("Di ve nha");
        break;
    }
}

/*else if và switch case khác nhau thê nào
else if xác định giá trị tại một khoảng
switch case xác định giá trị chính xác*/ 

// First class function - chức năng hạng nhất

// Function có thể gán cho biến
function sum2(a,b) {
    return (a+b);
}

// console.log(sum2(1,2)); //Cách 1

let sumFn = sum2(1,2); //Cách 2  function gán cho bi
console.log(sumFn);

// Function này có thể là tham số của function khác
let isSum = function sum3(a,b) {
    return (a+b);
}

function sum4(isSum,c) {
    return isSum + c
}

let result = sum4(isSum(1,3), 5);
console.log(result);

// Arrow function cú pháp viết các function 
    // ES5 như các ví dụ ở trên

    // ES6 - khai báo và sử dụng function
    let sayHi = () => {
        console.log("Sap ve roi");
    }
    sayHi();

    // ES6 - tinh tong 3 so
    let sum5 = (a,b,c) => {
        return (a+b+c);
    }
    console.log(sum5(1,2,3));