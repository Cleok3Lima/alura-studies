# Library Manager

This is a Node.js project that provides a simple API for managing authors, books, and publishers. The API allows you to perform various operations such as listing authors, books, and publishers, adding new entries, updating existing entries, and deleting entries.

## Getting Started

To run this project on your local machine, follow the instructions below:

### Prerequisites

- Node.js: Make sure you have Node.js installed on your machine. You can download it from the official website: [https://nodejs.org](https://nodejs.org)

### Installation

1. Clone the repository or download the source code:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd <project-directory>
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Set up the database connection:

   - Create a MongoDB database and obtain the connection URI.

   - Open the `src/config/dbConnect.js` file and replace `<YOUR-DB-URI>` with your actual MongoDB connection URI.

5. Insert script in `package.json`:

```
"scripts": {
  "dev": "nodemon server.js",
  <other-scripts>
}
```

6. Start the server:

   ```
   npm run dev
   ```

   The server should now be running on `http://localhost:3000`.

## API Endpoints

The API exposes the following endpoints:

### Authors

- **GET /authors** - List all authors.
- **GET /authors/:id** - Get a specific author by ID.
- **POST /authors** - Create a new author.
- **PUT /authors/:id** - Update an existing author.
- **DELETE /authors/:id** - Delete an author.

### Books

- **GET /books** - List all books.
- **GET /books/:id** - Get a specific book by ID.
- **GET /books/search?publisher=:publisher** - List books by publisher.
- **POST /books** - Create a new book.
- **PUT /books/:id** - Update an existing book.
- **DELETE /books/:id** - Delete a book.

### Publishers

- **GET /publishers** - List all publishers.
- **GET /publishers/:id** - Get a specific publisher by ID.
- **POST /publishers** - Create a new publisher.
- **PUT /publishers/:id** - Update an existing publisher.
- **DELETE /publishers/:id** - Delete a publisher.

## Examples

### List Authors

**Request:**

```
GET /authors
```

**Response:**

```json
[
  {
    "id": "1",
    "name": "John Doe",
    "nationality": "USA"
  },
  {
    "id": "2",
    "name": "Jane Smith",
    "nationality": "UK"
  },
  ...
]
```

### Create Book

**Request:**

```
POST /books
Content-Type: application/json

{
  "title": "The Great Gatsby",
  "author": "1",
  "publisher": "2",
  "numberOfPages": 218
}
```

**Response:**

```json
{
  "id": "1",
  "title": "The Great Gatsby",
  "author": "1",
  "publisher": "2",
  "numberOfPages": 218
}
```

### Update Publisher

**Request:**

```
PUT /publishers/2
Content-Type: application/json

{
  "name": "Penguin Books"
}
```

**Response:**

```json
{
  "message": "Publisher successfully updated."
}
```

### Delete Author

**Request:**

```
DELETE /authors/1
```

**Response:**

```json
{
  "message": "Author successfully deleted"
}
```

## Error Handling

- If an error occurs during the processing of a request, the server will respond with an appropriate error message and the corresponding HTTP status code.
- Error messages will be returned in the following format:

  ```json
  {
    "message": "Error message here"
  }
  ```

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- This project was created as part of a Node.js course.
