// const $tagA = document.getElementById('tagA');
// console.log($tagA.getAttribute('href'));
// console.log($tagA.href)
// $tagA.href='https://www.bing.com/ck/a?!&&p=636351e4930541faJmltdHM9MTcwMDY5NzYwMCZpZ3VpZD0zMmZmMDQ1NS0zNTcwLTYzZWEtMjZkMC0xNzQxMzQ3MTYyMDMmaW5zaWQ9NTIwMQ&ptn=3&ver=2&hsh=3&fclid=32ff0455-3570-63ea-26d0-174134716203&psq=youtube&u=a1aHR0cHM6Ly93d3cueW91dHViZS5jb20v&ntb=1';
// $tagA.setAttribute('href','https://www.bing.com/ck/a?!&&p=636351e4930541faJmltdHM9MTcwMDY5NzYwMCZpZ3VpZD0zMmZmMDQ1NS0zNTcwLTYzZWEtMjZkMC0xNzQxMzQ3MTYyMDMmaW5zaWQ9NTIwMQ&ptn=3&ver=2&hsh=3&fclid=32ff0455-3570-63ea-26d0-174134716203&psq=youtube&u=a1aHR0cHM6Ly93d3cueW91dHViZS5jb20v&ntb=1');
// $tagA.setAttribute('target','blank');
// const $h1 = document.getElementById('h1');

// $h1.style.color='red';
// $h1.style.fontSize='70px';


// const $div = document.createElement('div')
// $div.innerHTML = 'test tao the ';
// document.body.appendChild($div);

// // Xóa thẻ
// $h1.remove();

// const $G = document.getElementsByClassName('favorite-lits-item');
// $G[1].innerHTML = 'I LOVE THIS THING'

// for (let i=0; i< $G.length;i++){
//     $G[i].innerHTML = 'I LOVE THIS THING'
//     $G[i].style.color = 'red'
// }


// const text = prompt('mời bạn nhập');
// const $newGli = document.createElement('li');
// $newGli.innerText = text;
// document.getElementById('favorite-lits').appendChild($newGli);

// function notfy() {
//     alert('xin chò các bạn')
// }

// document.getElementById('b').onclick=notfy;

// document.getElementById('b').onclick= function (){
//     alert('xin chòa các bạn')
// };

// document.getElementById('b').addEventListener('click',notfy);
// document.getElementById('b').addEventListener('click',function (){
//     alert('add')
// });
// const myEmail = document.getElementById("my-email");
// myEmail.addEventListener("change", () => {
//   const email = myEmail.value;
//   const isEmailValid = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(email);

//   if (isEmailValid) {
//     myEmail.style.borderColor = "green";
//   } else {
//     myEmail.style.borderColor = "red";
//   }
// });

// document.getElementById('my-email').oninput=function (){
//        const value = document.getElementById('my-email').value;

//        if (value.includes('@gmail.com')) {
//         console.log('email đúng định dạng');
//     } else {
//         console.log('email chưa đúng định dạng');
//     }
//     };

//     const numberA = document.getElementById("number-a");
// const numberB = document.getElementById("number-b");
// const congButton = document.getElementById("cong");
// const truButton = document.getElementById("tru");


// congButton.addEventListener("click", () => {
  
//   const a = Number(numberA.value);
//   const b = Number(numberB.value);

 
//   const result = a + b;

  
//   alert("Kết quả: " + result);
// });


// truButton.addEventListener("click", () => {
  
//   const a = Number(numberA.value);
//   const b = Number(numberB.value);

 
//   const result = a - b;

  
//   alert("Kết quả: " + result);
// });


const img = document.querySelector("img");
const tangKichThuocButton = document.getElementById("tang-kich-thuoc");
const giamKichThuocButton = document.getElementById("giam-kich-thuoc");

// Bắt sự kiện click của nút tăng kích thước
tangKichThuocButton.addEventListener("click", () => {
  // Tăng kích thước của ảnh mỗi chiều lên 10px
  img.width = img.width + 10;
  img.height = img.height + 10;
});

// Bắt sự kiện click của nút giảm kích thước
giamKichThuocButton.addEventListener("click", () => {
  // Giảm kích thước của ảnh mỗi chiều đi 10px
  img.width = img.width - 10;
  img.height = img.height - 10;
});



