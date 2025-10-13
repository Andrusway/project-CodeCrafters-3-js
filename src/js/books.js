import axios from 'axios';

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books/';

// ******************************************************** CategoryList ******************************************
// const
const booksCategoriesList = document.querySelector('.books-categories-list');

// function api
async function getCategoryList() {
  const response = await axios.get('category-list');
  return response.data;
}

// render-function createMarkupCategoryList
function createMarkupCategoryList(array) {
  const markup = array
    .map(({ list_name }) => {
      if (list_name === '') {
        return;
      }
      return `<li class="books-categories-item">${list_name}</li>`;
    })
    .join('');

  booksCategoriesList.innerHTML = markup;
}

// CategoryList (при завантаженні сторінки)

async function showCategoryList() {
  try {
    const categories = await getCategoryList();
    categories.unshift({ list_name: 'All categories' });
    // console.log(categories);

    // render
    createMarkupCategoryList(categories);
  } catch (error) {
    console.log(error);
  }
}

showCategoryList();

// *************************************************************** Open/Close Dropdown **********************************************

const openDropdownBtn = document.querySelector(
  '.books-categories-title-wrapper'
);

openDropdownBtn.addEventListener('click', onOpenDropdownBtn);

function onOpenDropdownBtn() {
  booksCategoriesList.classList.toggle('show-books-categories-list');
}

// ********************************************** Hide/Display Show More Button **********************************************

const showMoreButton = document.querySelector('.books-show-more-button');

function displayShowMoreButton() {
  showMoreButton.classList.add('books-show-more-button-display');
}

function hideShowMoreButton() {
  showMoreButton.classList.remove('books-show-more-button-display');
}

// ************************************************** TopBooks / Books by Category ************************************************
// const
const booksList = document.querySelector('.books-list');

// ***
// Кількість книг для відображення (10 або 24)
const numberOfBooks = window.innerWidth >= 768 ? 24 : 10;

//і-я про кількість книг на сторінці
const booksNumberInfo = document.querySelector('.books-number-info');
let booksNumber = 0;
let booksTotalNumber = 0;

const addPerPage = 4;
const fromElement = 0;

let BOOKS = [];

// function api TopBooks
async function getTopBooks() {
  const response = await axios.get('top-books');
  const responseData = response.data;
  const allBooksArray = responseData.flatMap(list => list.books);
  return allBooksArray;
}

// function api Books by Category
async function getBooksByCategory(category) {
  const response = await axios.get(`category?category=${category}`);
  return response.data;
}

// render-function createMarkup TopBooks / ByCategory
function createMarkupBooksList(array) {
  const markup = array
    .map(
      ({ author, book_image, price, title, _id }) =>
        `<li class="books-item" data-id="${_id}">
          <img class="books-image" src="${book_image}" alt="${title}" width="343" />
          <div class="book-info">
            <div class="book-title-author">
              <p class="book-title">${title}</p>
              <p class="book-author">${author}</p>
            </div>
            <p class="book-price">$${price}</p>
          </div>
          <button class="books-learn-more-button" type="button">
            Learn More
          </button>
        </li>`
    )
    .join('');

  return markup;
}

// Books by Category CLICK
booksCategoriesList.addEventListener('click', onSelectedCategory);

async function onSelectedCategory(event) {
  // close DropDown
  onOpenDropdownBtn();

  const selectedCategory = event.target.textContent;
  //   console.log(selectedCategory);
  if (selectedCategory === 'All categories') {
    showTopBooks();
  } else {
    showBooksByCaregory(selectedCategory);
  }
}

// function ShowTopBooks (при завантаженні сторінки і при виборі категорії All Categories)
async function showTopBooks() {
  hideShowMoreButton();
  try {
    const allBooks = await getTopBooks();
    // console.log(allBooks);
    BOOKS = allBooks;

    // render
    const firstBooks = BOOKS.slice(fromElement, numberOfBooks);
    booksList.innerHTML = createMarkupBooksList(firstBooks);

    booksNumber = BOOKS.length > numberOfBooks ? numberOfBooks : BOOKS.length;
    booksTotalNumber = BOOKS.length;
    booksNumberInfo.textContent = `Showing ${booksNumber} of ${booksTotalNumber}`;

    if (BOOKS.length > numberOfBooks) {
      //   console.log(BOOKS.length, numberOfBooks);
      displayShowMoreButton();
    }
  } catch (error) {
    console.log(error);
  }
}

showTopBooks();

// *********** Show Books by Category (при кліку на категорію)
async function showBooksByCaregory(category) {
  hideShowMoreButton();
  try {
    const booksByCategory = await getBooksByCategory(category);
    // console.log(booksByCategory);
    BOOKS = booksByCategory;
    booksNumber = BOOKS.length > numberOfBooks ? numberOfBooks : BOOKS.length;
    booksTotalNumber = BOOKS.length;
    booksNumberInfo.textContent = `Showing ${booksNumber} of ${booksTotalNumber}`;

    if (!booksByCategory.length) {
      booksList.innerHTML = `<p>Sorry, there are no books in this category!</p>`;
      return;
    }

    // render
    const firstBooks = BOOKS.slice(fromElement, numberOfBooks);
    booksList.innerHTML = createMarkupBooksList(firstBooks);

    if (BOOKS.length > numberOfBooks) {
      //   console.log(BOOKS.length);
      displayShowMoreButton();
    }
  } catch (error) {
    console.log(error);
  }
}

// *********************************** Show More pagination ************************************
showMoreButton.addEventListener('click', onShowMoreButton);

let fromIndex = 0;
let toIndex = 0;

function onShowMoreButton() {
  //   console.log(BOOKS);
  hideShowMoreButton();

  fromIndex = booksNumber;

  booksNumber =
    BOOKS.length > booksNumber + addPerPage
      ? booksNumber + addPerPage
      : BOOKS.length;
  booksNumberInfo.textContent = `Showing ${booksNumber} of ${booksTotalNumber}`;

  toIndex = booksNumber;

  //   console.log(fromIndex, toIndex);

  // render
  const nextBooks = BOOKS.slice(fromIndex, toIndex);
  booksList.insertAdjacentHTML('beforeend', createMarkupBooksList(nextBooks));

  if (BOOKS.length > booksNumber) {
    displayShowMoreButton();
  }
}

// ************************************************* Open Book Modal (Learn More button) ******************************************
booksList.addEventListener('click', onLearnMore);

function onLearnMore(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  const selectedBook = event.target.closest('li.books-item');
  //   console.log(selectedBook);
  const bookId = selectedBook.dataset.id;
  //   console.log(bookId);

  // дописати код відкриття модального вікна !!! Book Modal !!!
}
