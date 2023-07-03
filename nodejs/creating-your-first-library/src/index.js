import fs from "fs"
import chalk from "chalk"

function handleError(error) {
  throw new Error(chalk.red(error.code, `Can't find file`))
}

function extractLinks(text) {
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm
  const captures = [...text.matchAll(regex)]
  const results = captures.map((capture) => ({ [capture[1]]: capture[2] }))
  return results.length !== 0 ? results : "Tehre is no links in the file"
}

// SYNC
// function getFile(fileURL) {
//   const encoding = "utf-8"
//   fs.readFile(fileURL, encoding, (error, text) => {
//     if (error) {
//       handleError(error)
//     }
//     console.log(chalk.green(text))
//   })
// }

// Promises with then
// function getFile(fileURL) {
//   const encoding = "utf-8"
//   fs.promises
//     .readFile(fileURL, encoding)
//     .then((text) => console.log(chalk.green(text)))
//     .catch(handleError)
// }

// ASYNC/AWAIT
async function getFile(fileURL) {
  try {
    const encoding = "utf-8"
    const text = await fs.promises.readFile(fileURL, encoding)
    return extractLinks(text)
  } catch (error) {
    handleError(error)
  } finally {
    console.log(chalk.yellow("done"))
  }
}

export default getFile
