const pool = require("./pool");

async function getAllBooks() {
  const { rows } = await pool.query("SELECT id, title FROM books;");
  return rows;
}

async function getBook(id) {
    const { rows } = await pool.query("SELECT books.title, authors.name AS author, books.pages, books.summary, string_agg(DISTINCT tags.tag, ', ') AS tags, string_agg(DISTINCT genres.genre, ', ') AS genres FROM books INNER JOIN booktags ON books.id=booktags.book_id INNER JOIN tags ON booktags.tag_id=tags.id INNER JOIN authors ON books.author_id=authors.id INNER JOIN bookgenres ON books.id=bookgenres.book_id INNER JOIN genres ON bookgenres.genre_id=genres.id WHERE books.id=$1 GROUP BY authors.name, books.pages, books.summary, books.title;", [id]);
    return rows;
}

async function getAllAuthors() {
  const { rows } = await pool.query("SELECT * FROM authors;");
    return rows;
}

async function getAuthorName(id) {
    const { rows } = await pool.query("SELECT name FROM authors WHERE id=$1", [id]);
    return rows;
}

async function getAuthorBooks(id) {
    const { rows } = await pool.query("SELECT books.title FROM authors INNER JOIN books ON authors.id=books.author_id WHERE author_id=$1;", [id]);
    return rows;
}

async function getAllUsers() {
    const { rows } = await pool.query("SELECT * FROM users;");
    return rows;
}

async function getUserName(id) {
    const { rows } = await pool.query("SELECT name FROM users WHERE id=$1", [id]);
    return rows;
}

async function getUserBooks(id) {
    const { rows } = await pool.query("SELECT books.title, booksread.rating FROM users INNER JOIN booksread ON users.id=booksread.user_id INNER JOIN books ON booksread.book_id=books.id WHERE user_id=$1;", [id]);
    return rows;
}

async function addAuthor(name) {
    await pool.query("INSERT INTO authors (name) VALUES ($1)", [name]);
}

async function addUser(name) {
    await pool.query("INSERT INTO users (name) VALUES ($1)", [name]);
}

module.exports = {
  getAllBooks,
  getBook,
  getAllUsers,
  getUserName,
  getUserBooks,
  getAllAuthors,
  getAuthorName,
  getAuthorBooks,
  addUser,
  addAuthor
};
