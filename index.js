const Book = function (branch, bookName, author, publication, price, src) {
  this.id = books.length;
  this.branch = branch;
  this.bookName = bookName;
  this.author = author;
  this.publication = publication;
  this.price = price;
  this.src = src;
};
Book.prototype.quantity = 0;

const books = [];

books.push(
  new Book(
    'CSE',
    'XMLBible',
    'Winston',
    'Wiely',
    40.5,
    'https://th.bing.com/th/id/OIP.08D6WUgUiP4v-16BWfaN0QAAAA?pid=ImgDet&rs=1'
  )
);
books.push(
  new Book(
    'CSE',
    'AI',
    'S.Russel',
    'Princetonhall ',
    63,
    'https://th.bing.com/th/id/OIP.HJ3HZmZHQCYOdbqvM563TAAAAA?w=143&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
  )
);
books.push(
  new Book(
    'CSE',
    'Java 2',
    'Watson',
    'BPBpublications',
    35.5,
    'https://th.bing.com/th/id/OIP.DVqxguCk34Hk6mbdTzIhNgAAAA?w=202&h=286&c=7&r=0&o=5&dpr=1.3&pid=1.7'
  )
);
books.push(
  new Book(
    'IT',
    'HTML in 24 hours',
    'Sam Peter',
    'Sampublication',
    50,
    'https://th.bing.com/th/id/OIP.9f0uSbjq7DO46JJvNopihgHaI4?pid=ImgDet&rs=1'
  )
);
books.push(
  new Book(
    'ECE',
    'Digital System Design',
    'Deepak Gupta',
    'Bhavya Books',
    45,
    'https://m.media-amazon.com/images/I/51o9ni24cXL.jpg'
  )
);
books.push(
  new Book(
    'ME',
    'Engineering Mechanics',
    'R. K. Bansal',
    'Laxmi Publications',
    35,
    'https://m.media-amazon.com/images/I/91kQpEVppxL._SL1500_.jpg'
  )
);

const booksAdded = new Set();

const main = document.querySelector('.main');
const home = document.querySelector('.home');
const login = document.querySelector('.login');
const registration = document.querySelector('.registration');
const catalouge = document.querySelector('.catalouge');
const cart = document.querySelector('.cart');
const filter = document.querySelector('.filter');
let amount = 0;

//Functions
const displayBooks = function (book, id) {
  const html = `<div class="book">
    <div><img src="${book.src} alt="${book.bookName}"></div>
    <div class="info"><p>Book:${book.bookName}</br>Author:${book.author}</br>Publication:${book.publication}</p></div>
    <div><p>${book.price}</p></div>
    <div><button class ="btn" onClick="addToCart(${id})"><img src="https://cdn-icons-png.flaticon.com/512/263/263142.png">ADD TO CART</button></div>
    </div>
    `;
  main.insertAdjacentHTML('beforeend', html);
};

const displayCart = function (book) {
  amount += book.price * book.quantity;
  const html = `
  <div class="book">
    <div>
      <p>${book.bookName}</p>
    </div>
    <div><p>${book.price}</p></div>
    <div><p>${book.quantity}</p></div>
    <div><p>${book.price * book.quantity}</p></div>
  </div>`;
  main.insertAdjacentHTML('beforeend', html);
};

const addToCart = function (i) {
  books.forEach(book => {
    if (book.id === i) {
      book.quantity++;
      booksAdded.add(book);
    }
  });
};

//Event Listeners
home.addEventListener('click', () => {
  main.innerHTML =
    '<div class="description"><p>The college was established in 1998 and offers B.Tech Courses in seven disciplines of Engineering. The college also offers M.Tech in Automation and Robotics, Electronics & Communication Engineering, Computer Science, Electrical and Electronics Engineering and Mechanical Engineering.</p></div>';
});

login.addEventListener('click', () => {
  main.innerHTML = '';
});

registration.addEventListener('click', () => {
  main.innerHTML = `
  <div class="register">
    <div>
      <label for="name">Name:</label> <input type="text" id="name" />
    </div>
    <div>
      <label for="pass">Password:</label> <input type="password" id="pass" />
    </div>
    <div>
      <label for="mail">E-mail:</label> <input type="text" id="mail" />
    </div>
    <div>
      <label for="phone">Phone Number:</label><input type="text" id="phone" />
    </div>
    <div>
      <p>Sex:</p>
      <div><label for="male">Male</label><input type="radio" name="sex" id="male" /></div>
      <div><label for="female">Female</label><input type="radio" name="sex" id="female" /></div>
    </div>
    <div>
      <label for="date">Date of Birth:</label><input type="date" id="date" />
    </div>
    <div>
      <p>Languages Known:</p>
      <div><label for="english">English</label><input type="checkbox" id="english" /></div>
      <div><label for="hindi">Hindi</label><input type="checkbox" id="hindi" /></div>
      <div><label for="tamil">Tamil</label><input type="checkbox" id="tamil" /></div>
      <div><label for="telegu">Telugu</label><input type="checkbox" id="telugu" /></div>
    </div>
    <div>
      <label for="address">Address:</label><input type="text" id="address" />
    </div>  
  </div>`;
});

catalouge.addEventListener('click', () => {
  main.innerHTML = '';
  books.forEach(book => {
    displayBooks(book, book.id);
  });
});

cart.addEventListener('click', () => {
  main.innerHTML = '';
  amount = 0;
  const html = `<div class="book">
  <div>
    <p>Book Name</p>
  </div>
  <div><p>Price</p></div>
  <div><p>Quantity</p></div>
  <div><p>Amount</p></div>
</div>`;
  main.insertAdjacentHTML('beforeend', html);
  booksAdded.forEach(book => {
    displayCart(book);
  });
  const html2 = `<div class="book">
  <div>
    <p>Total Amount:</p>
  </div>
  <div><p>${amount}</p></div>
</div>`;
  main.insertAdjacentHTML('beforeend', html2);
});

filter.addEventListener('click', e => {
  if (!e.target.classList.contains('link')) return;
  main.innerHTML = '';
  const brnch = e.target.textContent;
  books
    .filter(book => book.branch === brnch)
    .forEach(book => {
      displayBooks(book, book.id);
    });
});
