// let books = [];

// function validateInput(title, author, year, genre) {
//     let isValid = true;
//     document.getElementById('title-error').textContent = title ? "" : "Không được bỏ trống";
//     document.getElementById('author-error').textContent = author ? "" : "Không được bỏ trống";
//     document.getElementById('year-error').textContent = (year && !isNaN(year)) ? "" : "Phải là năm hợp lệ";
//     document.getElementById('genre-error').textContent = genre ? "" : "Không được bỏ trống";
//     if (!title || !author || !year || isNaN(year) || !genre) {
//         isValid = false;
//     }
//     return isValid;
// }

// function renderBooks(filteredBooks = books) {
//     const list = document.getElementById("book-list");
//     list.innerHTML = "";
//     filteredBooks.forEach((book, index) => {
//         list.innerHTML += `
//             <tr>
//                 <td>${book.title}</td>
//                 <td>${book.author}</td>
//                 <td>${book.year}</td>
//                 <td>${book.genre}</td>
//                 <td>
//                     <button onclick="editBook(${index})">Sửa</button>
//                     <button onclick="deleteBook(${index})">Xóa</button>
//                 </td>
//             </tr>
//         `;
//     });
// }

// function addBook() {
//     const title = document.getElementById("title").value.trim();
//     const author = document.getElementById("author").value.trim();
//     const year = document.getElementById("year").value.trim();
//     const genre = document.getElementById("genre").value.trim();

//     if (!validateInput(title, author, year, genre)) return;

//     books.push({ title, author, year, genre });
//     renderBooks();
//     clearForm();
// }

// function clearForm() {
//     document.getElementById("title").value = "";
//     document.getElementById("author").value = "";
//     document.getElementById("year").value = "";
//     document.getElementById("genre").value = "";
// }

// function editBook(index) {
//     const book = books[index];
//     document.getElementById("title").value = book.title;
//     document.getElementById("author").value = book.author;
//     document.getElementById("year").value = book.year;
//     document.getElementById("genre").value = book.genre;
//     books.splice(index, 1);
//     renderBooks();
// }

// function deleteBook(index) {
//     if (confirm("Bạn có chắc muốn xóa sách này không?")) {
//         books.splice(index, 1);
//         renderBooks();
//     }
// }

// function searchBooks() {
//     const query = document.getElementById("search").value.toLowerCase();
//     const filtered = books.filter(book => book.title.toLowerCase().includes(query));
//     renderBooks(filtered);
// }
