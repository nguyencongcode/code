// import {renderStudents} from './features.mjs'

// const dataStudents = [
//    {
//     id: 1,
//     name: 'Văn Công',
//     gender: 'nam',
//     math_score: 10,
//     english_score: 10,
//     literature_score: 10,
//     average_score: 10,
//    },
//    {
//     id: 2,
//     name: 'Văn nam',
//     gender: 'nam',
//     math_score: 10,
//     english_score: 10 ,
//     literature_score: 10,
//     average_score: 10,
//    },
// ];

// renderStudents(dataStudents);

import dataStudents, {
	renderStudents,
	createStudent,
	searchStudent,
} from './features.mjs';

document
	.getElementById('create-student')
	.addEventListener('click', createStudent);

// Cách 1: sử dụng onclick cho button search
// document
// 	.getElementById('search-student')
// 	.addEventListener('click', searchStudent);

// Cách 2: sử dụng oninput cho input nhập keyword
document.getElementById('keyword').oninput = searchStudent;

renderStudents(dataStudents);
