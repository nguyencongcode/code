// let student={
//     name= "cong"

// }
// for (let h in student)
// console.log('giá trị dc duyệt ',student);
// 
// function hello(name) {
//     const a = "Hello world, " + name;
//     console.log(a);
//   }
  
//   hello("Bard"); // in ra màn hình "Hello world, Bard"

// function square(a, b) {
//     return (a + b) ** 2;
//   }
  
//   const result = square(5, 10);
//   console.log(result)

// function nhap_a() {
//     let a;
//     do {
//       a = Number(prompt("Nhập a: "));
//     } while (a <= 0);
//     return a;
//   }
//   const result = nhap_a();
//   console.log("Kết quả: " + result);

// function g(a, b, c) {
    
//     if (a <= 0 || b <= 0 || c <= 0) {
//       return false;
//     }
//     return a + b > c && a + c > b && b + c > a;
//   }
//   const result =g(3, 4, 5);
// console.log(result);


// function h(a, b, c) {
//     if (a === 0) {
//       throw new Error("Hệ số a phải khác 0");
//     }
//     let delta = b * b - 4 * a * c;
//     if (delta > 0) {
//       return [
//         (-b + Math.sqrt(delta)) / (2 * a),
//         (-b - Math.sqrt(delta)) / (2 * a),
//       ];
//     } else if (delta === 0) {
//       return [-b / (2 * a)];
//     } else {
//       return [];
//     }
//   }
//   const result = h(1, 2, 1);
// console.log(result);

// function b(day, month, year) {
//     if (day < 1 || day > 31) {
//       return false;
//     }
  
//     if (month < 1 || month > 12) {
//       return false;
//     }
//     if (month === 2) {
//       if (year % 4 === 0 && year % 100 !== 0) {
//         if (day > 29) {
//           return false;
//         }
//       } else if (year % 400 === 0) {
//         if (day > 29) {
//           return false;
//         }
//       } else {
//         if (day > 28) {
//           return false;
//         }
//       }
//     }
  
//     return true;
//   }
//   const result = b(21, 11, 2023);
// console.log(result);


// const b = {
//     name: 'nguyên văn công',
//      class : 10,
//      tuổi :20,
//      cân : 1000,
// }
// console.log ()

// const action = Number(prompt("Nhập action: "));
// const ten_kho_hang = prompt("Nhập tên kho hàng: ");
// const dia_chi = prompt("Nhập địa chỉ: ");
// const nguoi_so_huu = prompt("Nhập người sở hữu: ");

// // Khai báo mảng các mặt hàng
// const mat_hang = [
//   {
//     ma_mat_hang: 1,
//     ten_mat_hang: "Bút",
//     loai_mat_hang: "Văn phòng phẩm",
//     gia_ca: 10000,
//   },
//   {
//     ma_mat_hang: 2,
//     ten_mat_hang: "Sách",
//     loai_mat_hang: "Học tập",
//     gia_ca: 20000,
//   },
// ];

// // Xử lý các thao tác
// switch (action) {
//   case 1: // Cập nhật thông tin kho hàng
//     ten_kho_hang = prompt("Nhập tên kho hàng mới: ");
//     dia_chi = prompt("Nhập địa chỉ mới: ");
//     nguoi_so_huu = prompt("Nhập người sở hữu mới: ");
//     break;
//   default:
//     // Xử lý các thao tác khác
//     break;
// }

// // In thông tin kho hàng
// console.log("Tên kho hàng: " + ten_kho_hang);
// console.log("Địa chỉ: " + dia_chi);
// console.log("Người sở hữu: " + nguoi_so_huu);
// console.log("Các mặt hàng trong kho: ");
// for (const mat_hang_item of mat_hang) {
//   console.log("Mã mặt hàng: " + mat_hang_item.ma_mat_hang);
//   console.log("Tên mặt hàng: " + mat_hang_item.ten_mat_hang);
//   console.log("Loại mặt hàng: " + mat_hang_item.loai_mat_hang);
//   console.log("Giá cả: " + mat_hang_item.gia_ca);
// }




// const tenKhoHang = "Kho hàng ABC";
// const diaChi = "123 Lê Văn Lương, Hà Nội";
// const nguoiSuuHuu = "Nguyễn Văn A";
// const danhSachMatHang = [];

// // Hàm nhập thông tin mặt hàng
// function nhapThongTinMatHang() {
//   const maMatHang = prompt("Nhập mã mặt hàng: ");
//   const tenMatHang = prompt("Nhập tên mặt hàng: ");
//   const loaiMatHang = prompt("Nhập loại mặt hàng: ");
//   const giaCa = Number(prompt("Nhập giá cả: "));

//   // Kiểm tra xem mã mặt hàng đã tồn tại hay chưa
//   for (const matHang of danhSachMatHang) {
//     if (matHang.maMatHang === maMatHang) {
//       alert("Mã mặt hàng đã tồn tại. Vui lòng nhập lại.");
//       return;
//     }
//   }

//   // Thêm mặt hàng mới vào danh sách
//   const matHangMoi = {
//     maMatHang,
//     tenMatHang,
//     loaiMatHang,
//     giaCa,
//   };
//   danhSachMatHang.push(matHangMoi);
// }

// // Hàm in thông tin các mặt hàng
// function inThongTinMatHang() {
//   console.log("Danh sách các mặt hàng trong kho:");
//   for (const matHang of danhSachMatHang) {
//     console.log(`
//       Mã mặt hàng: ${matHang.maMatHang}
//       Tên mặt hàng: ${matHang.tenMatHang}
//       Loại mặt hàng: ${matHang.loaiMatHang}
//       Giá cả: ${matHang.giaCa}
//     `);
//   }
// }

// // Hàm chính
// function main() {
//   // Hiển thị menu
//   console.log(`
//     1. Nhập thông tin mặt hàng
//     2. In thông tin các mặt hàng
//     3. Thoát
//   `);

//   // Lặp lại cho đến khi người dùng chọn thoát
//   while (true) {
//     // Nhập action
//     const action = prompt("Chọn action: ");

//     // Thực hiện action tương ứng
//     switch (action) {
//       case "1":
//         nhapThongTinMatHang();
//         break;
//       case "2":
//         inThongTinMatHang();
//         break;
//       case "3":
//         alert("Thoát chương trình.");
//         return;
//       default:
//         alert("Action không hợp lệ.");
//     }
//   }
// }

// // Khởi chạy chương trình
// main();


