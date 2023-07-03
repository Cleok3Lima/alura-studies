# File Processing and Link Validation Project

This project is a JavaScript application that allows processing text files and extracting the links contained within them. Additionally, it provides the ability to validate the links by checking their status through HTTP requests.

## Features

- Text file processing and link extraction.
- Link validation through HTTP requests.
- Presentation of results in the console.

## Requirements

- Node.js installed on your machine.

## Installation

1. Download or clone this repository to your computer.
2. Open the terminal and navigate to the root folder of the project.
3. Run the command `npm install` to install the project dependencies.

## Usage

The application can be executed using the command `node cli.js`, followed by two mandatory parameters:

1. Path to the file or directory to be processed.
2. (Optional) `--validate` to perform link validation.

Example usage to process a file:

```
node cli.js file.md
```

or

```
npm run cli
```

Example usage to process a file and validate the links:

```
node cli.js file.md --validate
```

or

```
npm run cli:validate
```

Example usage to process a directory:

```
node cli.js directory/
```

## Results

After executing the command, the application will display the results in the console. It will show a list of the links found in the processed files, along with the status of each link if the `--validate` option was used.

## Used Libraries

- [fs](https://nodejs.org/api/fs.html): A Node.js native library for interacting with the file system.
- [chalk](https://www.npmjs.com/package/chalk): A library for styling text in the console.
- [node-fetch](https://www.npmjs.com/package/node-fetch): A library for making HTTP requests in Node.js.

## Author

Alura

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
