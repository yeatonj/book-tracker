const pool = require("./pool");

async function getAllBooks() {
  const { rows } = await pool.query("SELECT books.title, authors.name AS author, books.pages, books.summary, string_agg(DISTINCT tags.tag, ', ') AS tags, string_agg(DISTINCT genres.genre, ', ') AS genres FROM books INNER JOIN booktags ON books.id=booktags.book_id INNER JOIN tags ON booktags.tag_id=tags.id INNER JOIN authors ON books.author_id=authors.id INNER JOIN bookgenres ON books.id=bookgenres.book_id INNER JOIN genres ON bookgenres.genre_id=genres.id GROUP BY authors.name, books.pages, books.summary, books.title;");
  return rows;
}

// async function getAllAuthors() {
//   const { rows } = await pool.query("SELECT books.title, authors.name AS author, books.pages, books.summary FROM books INNER JOIN authors ON books.author_id=authors.id;");
//   return rows;
// }

async function getAllUsers() {
    const { rows } = await pool.query("SELECT * FROM users;");
    return rows;
}

async function getUserBooks(id) {
    const { rows } = await pool.query("SELECT books.title, booksread.rating FROM users INNER JOIN booksread ON users.id=booksread.user_id INNER JOIN books ON booksread.book_id=books.id WHERE user_id=$1;", [id]);
    return rows;
}

module.exports = {
  getAllBooks,
  getAllUsers,
  getUserBooks
};
