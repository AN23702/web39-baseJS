//Truy cập phần tử thông qua ID
let title_1 = document.getElementById("title-1");
// console.log(title_1);

title_1.style.color = 'red';

// Truy cập phần tử thông qua class
let title_2 = document.getElementsByClassName("title-2");
// console.log(title_2);

// Truy cập phần tử thông qua tag name - thẻ
let tag_h3 = document.getElementsByTagName("h3");
// console.log(tag_h3);

for(let i = 0; i < tag_h3.length; i ++) {
    // console.log(tag_h3);
    tag_h3[i].style.color = "blue";
}



// Truy cập phần tử với querySelector
// Trả về phần tử đầu tiên nó tìm thấy

let title_4 = document.querySelector("#title-4");
let para_1 = document.querySelector(".para-1");
console.log(title_4);
console.log(para_1);


// Truy cập phần tử với querySelectorAll
// Trả về danh sách các phần tử

let para_2 = document.querySelectorAll(".para-2");
console.log(para_2);


// Truy cập phần tử thông qua quan hệ
let box_2 = document.querySelector(".box-2");

console.log(box_2.parentNode);


// Lấy nội dung của phần tử
let para_4 = document.querySelector(".para-4");
// console.log(para_4.textContent);

// Thay đổi nội dung của phần tử
para_4.innerHTML = "no moreeeeee";
para_4.style.color = "red";

// Thay đổi thuộc tính của phần tử
para_4.style.fontSize = "40px"