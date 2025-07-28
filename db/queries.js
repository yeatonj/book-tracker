const pool = require("./pool");

async function getAllBooks() {
  const { rows } = await pool.query("SELECT books.title, authors.name, books.pages, books.summary FROM books INNER JOIN authors ON books.author_id=authors.id;");
  return rows;
}

module.exports = {
  getAllBooks,
};
