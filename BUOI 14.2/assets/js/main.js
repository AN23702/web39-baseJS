// Call dữ liệu trên sever và nó trả về data 
const data = [
    {
        name: "Áo Polo thể thao basic FSTP027",
        src: "https://product.hstatic.net/200000690725/product/fstp027-16_53595911632_o_412207133a5048fa9caade37660c5c33_master.jpg",
    },

    {
        name: "Áo Polo can phối thân FSTP006",
        src: "https://torano.vn/products/ao-polo-can-phoi-than-3-fstp006",
    },

    {
        name: "Áo Polo can phối thân FSTP004",
        src: "https://torano.vn/products/ao-polo-can-phoi-than-3-fstp004",
    },

];

// Bước 1: Truy cập phần tử
let rowProduct = document.querySelector(".row-js");

// Buoc 2: Lap qua mang data

let HTML = ``;
data.forEach((value,index) => {
    // console.log(value);


    HTML += `
    <div class="coloumn coloumn-4">

    <div class="box-images">
      <img src="${value.src}" alt="SP 1">
    </div>
    <div class="box-content">
      <h3>San pham 1</h3>
    </div>

  </div>
    `;
});
console.log(HTML);

// Buoc 3: Do du lieu vao HTML
rowProduct.innerHTML = HTML;