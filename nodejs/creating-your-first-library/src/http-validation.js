function extractLinks(arrLinks) {
  return arrLinks.map((objectLink) => Object.values(objectLink).join())
}

async function checkStatus(URLsList) {
  const arrStatus = await Promise.all(
    URLsList.map(async (url) => {
      try {
        const response = await fetch(url)
        return response.status
      } catch (error) {
        return errorsHandler(error)
      }
    })
  )
  return arrStatus
}

function errorsHandler(error) {
  if (error.cause.code === "ENOTFOUND") {
    return "URL not found"
  } else {
    return "Something went wrong"
  }
}

export default async function validatedList(linksList) {
  const links = extractLinks(linksList)
  const status = await checkStatus(links)

  return linksList.map((obj, indice) => ({
    ...obj,
    status: status[indice],
  }))
}
