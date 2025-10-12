import { bookModalRefs } from './refs.js';
import { toTitleCase } from './helpers.js';
import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

export function renderBookModal(book) {
  const bookTitle = toTitleCase(book.title);

  bookModalRefs.bookModalContent.innerHTML = `
      <img
        src="${book.book_image}"
        alt="${bookTitle} cover"
      />

      <header>
        <h2 id="book-modal-title">${bookTitle}</h2>
        <p class="book-modal-autor">${book.author}</p>
        <p class="price">$${book.price}</p>
      </header>

      <div class="book-modal-count">
        <button type="button" class="book-modal-btn-minus">-</button>
        <p class="btn-count">1</p>
        <button type="button" class="book-modal-btn-plus">+</button>
      </div>

      <div class="book-modal-buy">
        <button type="button">Add to Cart</button>
        <button type="button">Buy Now</button>
      </div>

      <div class="book-accordion-container">
        <section aria-labelledby="details-heading" class="ac">
          <h3 id="details-heading ac-header">
            <button type="button" class="ac-trigger">Details</button>
          </h3>
          <div class="ac-panel">
            <p class="ac-text">${book.description}</p>
          </div>
        </section>

        <section aria-labelledby="shipping-heading" class="ac">
          <h3 id="shipping-heading ac-header">
            <button type="button" class="ac-trigger">Shipping</button>
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
          <h3 id="returns-heading ac-header">
            <button type="button" class="ac-trigger">Returns</button>
          </h3>
          <div class="ac-panel">
            <p class="ac-text">
                We ship across the United States within 2–5 business days. All orders
                are processed through USPS or a reliable courier service. Enjoy free
                standard shipping on orders over $50.
            </p>
          </div>
        </section>
      </div>
  `;

  addAccordions();
}

function addAccordions() {
  new Accordion('.book-accordion-container');
}
