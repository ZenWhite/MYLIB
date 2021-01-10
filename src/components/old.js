//Style Import
import '../scss/app.scss';
//Scripts Imports
import BookService from './modules/api';
import bookStorage from './modules/book_storage';
import Book from './modules/book_component';
import './modules/tabs';
import WOW from 'wow.js';
//WOW Init
new WOW().init();
//UI
const searchForm = document.querySelector('.search');
const searchInput = searchForm.elements['search-input']; 
const searchContainer = document.querySelector('.search-container');
//Render LIbrary
Book.renderLib();
//Events
searchForm.addEventListener('submit', searchBooks);

async function searchBooks(e) {
    e.preventDefault();
    searchContainer.innerHTML = '';
    bookStorage.list.clear();

    const loader = setLoader();
    searchContainer.insertAdjacentHTML('afterbegin', loader);

    try {
        const booksData = await BookService.getList( searchInput.value );

        if(booksData.items && booksData.items.length !== 0) {
            const booksFragment = renderBooks( booksData.items );
            searchContainer.insertAdjacentHTML('afterbegin', booksFragment);
        } else {
            const foundMessage = '<h3 class="not-found">Ничего на найдено</h3>';
            searchContainer.insertAdjacentHTML('afterbegin', foundMessage);
        }

    } catch(err) {
        console.log(err);
        const errMessage = `<h3 class="error">Что-то пошло не так!<br/>Попробуйте позже.</h3>`
        searchContainer.insertAdjacentHTML('afterbegin', errMessage);
    }

    searchContainer.querySelector('.loader').remove();
}

function renderBooks(arr) {
    let fragment = '';

    arr.forEach( ({id, volumeInfo}) => {
        const { title, authors = [], description, 
              previewLink, imageLinks = {} }  = volumeInfo;
        const info = {
            id,
            title: validateInfo(title, 3),
            authors: validateInfo( authors[0] ),
            description: validateInfo( description, 40 ),
            link: previewLink,
            thumb: imageLinks.thumbnail || '',
            lib: JSON.parse( localStorage.getItem('book_storage') )[id] ? true: false
        };

        if( /[а-я]/gi.test( info.description ) ) {
            fragment += Book.template(info);
            bookStorage.list.set(info.id, info);
        }
    });

    return fragment;
}

function validateInfo(str = 'Отсутствует', counter = str.length) {
    str = str.split(' ');
    if(str.length > counter) {
        return str.slice(0, counter++).join(' ') + '...'; 
    }
    return str.join(' ');
}

function setLoader() {
    return `
        <div class="search-block__loader loader">
            <div class="search-block__dots flex">
                <div class="search-block__dot"></div>
                <div class="search-block__dot"></div>
                <div class="search-block__dot"></div>
            </div>
        </div>
    `;
}