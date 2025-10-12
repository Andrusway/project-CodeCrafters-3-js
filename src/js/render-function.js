import { bookModalRefs } from './refs.js';
import { toTitleCase } from './helpers.js';
import Accordion from 'accordion-js';

export function renderBookModal(book) {
  const bookTitle = toTitleCase(book.title);

  bookModalRefs.bookModalContent.innerHTML = `
      <img
        class="book-modal-cover-img"
        src="${book.book_image}"
        alt="${bookTitle} cover"
      />

      <div class="book-modal-product-info">
        <header>
          <h2 class="book-modal-title">${bookTitle}</h2>
          <p class="book-modal-author">${book.author}</p>
          <p class="book-modal-price">$${book.price}</p>
        </header>

        <div class="book-modal-count">
          <button type="button" class="book-modal-qty-btn book-modal-btn-minus" aria-label="Decrease quantity">-</button>
          <p class="btn-count">1</p>
          <button type="button" class="book-modal-qty-btn book-modal-btn-plus" aria-label="Increase quantity">+</button>
        </div>

        <div class="book-modal-buy-container">
          <button type="button" class="book-modal-add-btn">Add to Cart</button>
          <button type="button" class="book-modal-buy-btn">Buy Now</button>
        </div>

        <div class="book-accordion-container">
          <section aria-labelledby="details-heading" class="ac">
            <h3 id="details-heading" class="ac-header"">
              <button type="button" class="ac-trigger" aria-expanded="false">
                Details
                <svg class="ac-btn-ico" width="24" height="24" aria-hidden="true">
                  <use href="./img/sprite.svg#icon-chevron-down"></use>
                </svg>
              </button>
            </h3>
            <div class="ac-panel">
              <p class="ac-text">${book.description}</p>
            </div>
          </section>

          <section aria-labelledby="shipping-heading" class="ac">
            <h3 id="shipping-heading" class="ac-header">
              <button type="button" class="ac-trigger" aria-expanded="false">
                Shipping
                <svg class="ac-btn-ico" width="24" height="24" aria-hidden="true">
                  <use href="./img/sprite.svg#icon-chevron-down"></use>
                </svg>
              </button>
            </h3>
            <div class="ac-panel">
              <p class="ac-text">
                We ship across the United States within 2–5 business days. All orders
                are processed through USPS or a reliable courier service. Enjoy free
                standard shipping on orders over $50.
              </p>
            </div>
          </section>

          <section aria-labelledby="returns-heading" class="ac">
            <h3 id="returns-heading" class="ac-header">
              <button type="button" class="ac-trigger" aria-expanded="false">
                Returns
                <svg class="ac-btn-ico" width="24" height="24" aria-hidden="true">
                  <use href="./img/sprite.svg#icon-chevron-down"></use>
                </svg>
              </button>
            </h3>
            <div class="ac-panel">
              <p class="ac-text">
                  You can return an item within 14 days of receiving your order,
                  provided it hasn’t been used and is in its original condition.
                  To start a return, please contact our support team — we’ll guide
                  you through the process quickly and hassle-free.
              </p>
            </div>
          </section>
        </div>
      </div>
  `;

  addAccordions();
}

function addAccordions() {
  new Accordion('.book-accordion-container', {
    showMultiple: true,
  });
}
