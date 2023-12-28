// const listName = [];

// const username = localStorage.getItem("username");


// document.querySelector(".username").textContent = username;



// document.getElementById('insert').onclick = function () {
//     const name = document.getElementById('name').value;
    
//     localStorage.setItem('name', name);

//     const tagLi = document.createElement('li');
//     tagLi.innerText = name;

//     document.getElementById('renader-name').appendChild(tagLi);
// };

document.getElementById('v').onclick = () => {
    const name = document.getElementById ('name').value;
    if(name.length>=4) {
        alert('thành công');
        location.href = 'https://play.google.com/store/apps/details?id=com.google.android.apps.translate&hl=vi&gl=US';
    } else {
        alert('ko đung')
    }
}