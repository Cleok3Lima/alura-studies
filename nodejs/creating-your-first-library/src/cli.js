import chalk from "chalk"
import fs from "fs"
import getFile from "./index.js"
import validatedList from "./http-validation.js"

const path = process.argv

async function printList(validate, result, identifier = "") {
  if (validate) {
    console.log(
      chalk.yellow("Validated List"),
      chalk.black.bgGreen(identifier),
      await validatedList(result)
    )
  } else {
    console.log(
      chalk.yellow("Links List"),
      chalk.black.bgGreen(identifier),
      result
    )
  }
}

async function textProcessor(args) {
  const path = args[2]
  const validate = args[3] === "--validate"

  try {
    fs.lstatSync(path)
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log("File or directory do not exist")
      return
    }
  }

  if (fs.lstatSync(path).isFile()) {
    const result = await getFile(path)
    printList(validate, result)
  } else if (fs.lstatSync(path).isDirectory()) {
    const files = await fs.promises.readdir(path)
    files.forEach(async (fileName) => {
      const list = await getFile(`${path}/${fileName}`)
      printList(validate, list, fileName)
    })
  }
}

textProcessor(path)
