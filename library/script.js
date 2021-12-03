let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages; 
  this.isRead = isRead;
  this.info = function() {
    let allInfo = `${title} by ${author}, ${pages} pages, `;
    if(read === true) {
      allInfo += 'read';
    } else {
      allInfo += 'not read yet';
    }
    console.log(allInfo);
    return allInfo
  }
}

function displayBooks(){
  let table = document.geteElementById('display-table');
  for(let i=0; i < myLibrary.length; i++){
    table.appendChild 
  }
}

//popup for adding books
document.getElementById('add-button').addEventListener("click", () => 
  document.querySelector('.modal-bg').style.display = "flex"
);
document.querySelector('.close').addEventListener("click", () =>
  document.querySelector('.modal-bg').style.display = "none"
);

// add a book
document.getElementById('book-form').addEventListener("submit", addBookToLibrary);
function addBookToLibrary(e) {
  e.preventDefault();
  
  //create boook and add to array
  const form = e.target;
  const title = form.title.value;
  const author = form.author.value;
  const pages = form.pages.value;
  const isRead = form.status.value;
  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
  document.querySelector('.modal-bg').style.display = "none";
  form.reset();

  //display to table 
  const table = document.getElementById('display-table');
  const newRow = document.createElement('tr');
  newRow.setAttribute('data-index', myLibrary.length-1);
  const titleColumn = document.createElement('td');
  titleColumn.textContent =  title;
  const authorColumn = document.createElement('td');
  authorColumn.textContent = author;
  const pagesColumn = document.createElement('td');
  pagesColumn.textContent = pages; 
  const statusColumn = document.createElement('td');
  const statusButton = createStatusButton(isRead);
  statusColumn.appendChild(statusButton);
  const deleteColumn = document.createElement('td');
  const deleteButton = createDeleteButton();
  deleteColumn.appendChild(deleteButton);

  table.appendChild(newRow);
  newRow.appendChild(titleColumn);
  newRow.appendChild(authorColumn);
  newRow.appendChild(pagesColumn);
  newRow.appendChild(statusColumn);
  newRow.appendChild(deleteColumn);
}

function createStatusButton (status){
  const statusButton = document.createElement('button');
  statusButton.textContent = status; 
  statusButton.classList.add('status-button');
  statusButton.addEventListener("click", changeStatus);
  return statusButton 
}

function changeStatus(e){
  let currentStatus = e.currentTarget.textContent; 
  if(currentStatus == 'Read'){
    e.currentTarget.textContent = 'Not Read';
  }
  else if(currentStatus == 'Not Read'){
    e.currentTarget.textContent = 'Read';
  }
}

function createDeleteButton (){
  const deleteButton = document.createElement('button');
  deleteButton.textContent = "Delete";
  deleteButton.classList.add('status-button');
  deleteButton.addEventListener('click', deleteBook);
  return deleteButton
}

function deleteBook(e){
  let row = e.currentTarget.parentElement.parentElement;
  myLibrary.splice(row.getAttribute('data-index'),1);
  row.remove();
}
