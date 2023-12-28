// export const renderStudents = (listStudents) => {
//     let rowHTML ='';
//     for (let student of listStudents) {
//         rowHTML +=
//        `<tr>
//        <th scope="row">${student.id}</th>
//        <td>${student.name}</td>
//        <td>${student.gender}</td>
//        <td>${student.math_score}</td>
//        <td>${student.english_score}</td>
//        <td>${student.literature_score}</td>
//        <td>${student.average_score}</td>
//      </tr>\n` ;
//     }
//     document.getElementById('show-students').innerHTML =rowHTML;
// };

// export const createStudents = () => {
//     const id = document.getElementById('id').value = '';
//     const name = document.getElementById('name').value = '';
//     const gender = document.getElementById('gender').value = '';
//     const math_score = document.getElementById('math_score').value = '';
//     const  english_score = document.getElementById('english_score').value = '';
//     const literature_score = document.getElementById('literature_score').value = '';
//     const  average_scored = document.getElementById('average_score').value = '';

//     const newStudent = {
//         id,
//         name,
//         gender,
//         math_score,
//         english_score,
//         literature_score,
//         average_scored,
//     }
//     dataStudents.push(newStudent)
//     console.log(dataStudents)
//     renderStudents(dataStudents)
//     clearInput();
// };

// const clearInput =() =>{
//     const id = document.getElementById('id').value = '';
//     const name = document.getElementById('name').value = '';
//     const gender = document.getElementById('gender').value = '';
//     const math_score = document.getElementById('math_score').value = '';
//     const english_score = document.getElementById('english_score').value = '';
//     const literature_score = document.getElementById('literature_score').value = '';
//     const average_scored = document.getElementById('average_score').value = '';
// }
// export default dataStudents;



const getData = async () => {
	const response = await fetch(
		'https://657b0dc8394ca9e4af1384cf.mockapi.io/api/schema',
		{
			method: 'GET',
		}
	);
	const data = await response.json();
	console.log('response: ', data);
};




// chữa bài 
const dataStudents = [
	{
		id: 1,
		name: 'Quốc Khánh',
		gender: 'nam',
		math_score: 10,
		english_score: 10,
		literature_score: 10,
		average_score: 10,
	},
	{
		id: 2,
		name: 'Hữu Huy',
		gender: 'nam',
		math_score: 10,
		english_score: 10,
		literature_score: 10,
		average_score: 10,
	},
];

export const renderStudents = (listStudent) => {
	let rowsHTML = '';
	for (let student of listStudent) {
		rowsHTML += `
        <tr>
            <th scope="row">${student.id}</th>
            <td>${student.name}</td>
            <td>${student.gender}</td>
            <td>${student.math_score}</td>
            <td>${student.english_score}</td>
            <td>${student.literature_score}</td>
            <td>${student.average_score}</td>
            <td>
                <button type="button" class="btn btn-success ml-2 mr-2">Update</button>
                <button type="button" class="btn btn-danger ml-2 mr-2" onclick="deleteStudent()">Delete</button>
            </td>
        </tr>`;
	}
	window.deleStudent= deleStudent;
	document.getElementById('show-student').innerHTML = rowsHTML;
};

// Create
export const createStudent = () => {
	// Bước 1: gán sự kiện onclick cho button "Create student"
	// Bước 2: lấy được toàn bộ giá trị người dùng đã nhập ở các ô input
	const id = document.getElementById('id').value;
	const name = document.getElementById('name').value;
	const gender = document.getElementById('gender').value;
	const math_score = document.getElementById('math_score').value;
	const english_score = document.getElementById('english_score').value;
	const literature_score = document.getElementById('literature_score').value;
	// Bước 3: tạo 1 object student mới
	const newStudent = {
		id,
		name,
		gender,
		math_score,
		english_score,
		literature_score,
	};
	// Bước 4: thêm object vừa tạo vào trong mảng
	dataStudents.push(newStudent);
	// Bước 5: gọi lại hàm renderStudents để in ra dữ liệu mới nhất
	console.log(dataStudents);
	renderStudents(dataStudents);
	// Bước 6: clear input
	clearInput();
};

// Delete
const deleteStudent = () => {
	console.log('abc');
	// Bước 1: gán sự kiện onclick cho button delete
	// Bước 2: xác định được id của học sinh cần xóa
	// Bước 3: xóa học sinh đó khỏi danh sách (xóa object khỏi mảng)
	// Bước 4: gọi lại hàm renderStudents để in ra dữ liệu mới nhất
};

// Search
export const searchStudent = () => {
	// Bước 1: lấy được keyword người dùng nhập trong input
	const keyword = document.getElementById('keyword').value;
	// Bước 2: sử dụng hàm filter để lọc ra những kết quả có chứa keyword đó
	const studentsSearch = dataStudents.filter((student) => {
		return student.name.toLowerCase().includes(keyword.toLowerCase());
	});
	// Bước 3: gọi lại hàm renderStudents và truyền vào hàm dữ liệu vừa tìm được
	renderStudents(studentsSearch);
};

// clear input
const clearInput = () => {
	document.getElementById('id').value = '';
	document.getElementById('name').value = '';
	document.getElementById('gender').value = '';
	document.getElementById('math_score').value = '';
	document.getElementById('english_score').value = '';
	document.getElementById('literature_score').value = '';
};

export default dataStudents;
