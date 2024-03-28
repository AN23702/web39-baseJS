/*Object
+ Là 1 danh sách các item: mỗi item là 1 cặp name-value
+ value là các dữ liệu cơ bản, function hay cũng có thể là 1 object khác*/

    // Khởi tạo object

//     let user = {
//         name: "Nguyen Van A",
//         age: 22,
//     };

//     console.log(user);

//     // Truy cập các thuộc tính của object

//     let user_2 = {
//         name: "Nguyen Van B",
//         email: "b@gmail.com",
//         age: 25,
//     };

//     console.log(user_2.name);
//     console.log(user_2.email);
//     console.log(user_2.age);

//     // Thay đổi giá trị thuộc tính trong object

//     let user_3 = {
//         name: "Nguyen Thi C",
//         age: 28,
//         email: "nguyenthic@gmail.com",
//     }

//     user_3.name = "Nguyen Duc An";
//     user_3.age = 22;
//     user_3.email = "nguyenducan23702@gmail.com";

//     user_3.address = "Ha Noi";     // Thêm thuộc tính mới cho object

//     delete user_3.age;             // Xóa 1 thuộc tính trong object

//     console.log(user_3);


// // Các phương thức khi làm việc với Array
// let arrNumber = [1, 2, 3, 4, 5];

//     // Phương thức .map
//     // value: giá trị phần tử
//     // index: chỉ số phần tử
//     arrNumber.map((value, index) => {
//     console.log("Giá trị của mảng là:",value);
//     console.log("Chỉ số các phần tử của mảng là:",index);
//     })


    // Phương thức .filter()

    // Cách truyền thống
    // let oddNumber = [11, 13, 16, 19, 20, 23];

    // let result = [];
    // oddNumber.forEach((item, index) => {
    //     // console.log(item);

    //     if((item % 2) !=0) {
    //         // console.log("Số lẻ:", item)
    //         result.push(item);
    //     }
    // });

    // console.log(result);


    // Sử dụng filter - dùng nhiều
    // let oddNumber_2 = [1, 5, 8, 99];

    // // const isOdd = oddNumber_2.filter((value, index) => {
    // //     // console.log("Giá trị của các phần tử trong mảng:", value);
    // //     // console.log("Giá trị của các chỉ số phần tử trong mảng:", index);

    // //     return (value % 2) !=0;
    // // })
    // const isOdd = oddNumber_2.filter(value => (value % 2) != 0);
    // console.log(isOdd);


    // Phương thức reduce() - ít dùng nên không cần nhớ
    // let numbers = [1,2,3,4,5];

    // const result_2 =  numbers.reduce((total, value) => {
    //     // console.log(total);
    //     // console.log(value);
    //     return total = total + value;
    // }, 0);

    // console.log(result_2);


    // Phương thức find()
    // let arr = [1,2,3,4,5,6,7];

    // let result_3 = arr.find((value, index) =>{
    //     return value > 4
    // })

    // console.log(result_3);

    // Phương thức findIndex()


// Một số phương thức của Object
let student = {
    name: "Nguyen Duc An",
    age: 22,
    email: "nguyenducan23702@gmail.com"
};

