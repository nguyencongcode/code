// const listNumber = [1,2,3]
// const a = ['a','b','c']
// const b = ['a','b','c']
// console.log(a+b)
// console.log(a==b)

// const a = [1,2,3,4,5,6,7,8,9]
// for (let i=0;i<a.length; i++)
// if (a[i] %2===0)
// console.log(a[i])

// 
// let sum =0;
// for (let i=0;i<a.length;i++) {
//     sum = sum+ a[i]
// }
// console.log(sum);

// 
// 
// function tinh_gia_tri_trung_binh(s) {
//     let sum = 0;
//     for (let i = 0; i < s.length; i++) {
//       sum += s[i];
//     }
//     return sum / s.length;
//   }
  
//   const s = [-3, -10, 20, 86, 4, 17, 23, -12, 100];
//   let trung_binh = tinh_gia_tri_trung_binh(s);
//   console.log("Giá trị trung bình của mảng là: " + trung_binh);

// function loc_so_nguyen_to(s) {
//     return s.filter(n => is_so_nguyen_to(n));
//   }
  
//   function is_so_nguyen_to(n) {
//     if (n < 2) {
//       return false;
//     }
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//       if (n % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
  
//   const s = [-3, -10, 20, 86, 4, 17, 23, -12, 100];
//   let so_nguyen_to = loc_so_nguyen_to(s);
//   console.log("Các số nguyên tố trong mảng là: " + so_nguyen_to);

// function kiem_tra_tat_ca_phan_tu_lon_hon_20(s) {
//     for (let i = 0; i < s.length; i++) {
//       if (s[i] <= 20) {
//         return false;
//       }
//     }
//     return true;
//   }
  
//   const s = [-3, -10, 20, 86, 4, 17, 23, -12, 100];
//   let ket_qua = kiem_tra_tat_ca_phan_tu_lon_hon_20(s);
//   console.log("Kết quả: " + ket_qua);

// 

// function in_hinh_chu_nhat(m, n) {
//     for (let i = 0; i < n; i++) {
//       console.log("*".repeat(m));
//     }
//   }
  
//   in_hinh_chu_nhat(10,3);

// function tim_boi_chung_nho_nhat(m, n) {
//     while (n !== 0) {
//       const temp = m % n;
//       m = n;
//       n = temp;
//     }
//     return m;
//   }
  
//   function main() {
//     const m = parseInt(prompt("Nhập vào số m: "));
//     const n = parseInt(prompt("Nhập vào số n: "));
//     const boi_chung_nho_nhat = tim_boi_chung_nho_nhat(m, n);
//     console.log("Bội chung nhỏ nhất của m và n là: " + boi_chung_nho_nhat);
//   }