import app from "./app.js"

const start = async () => {
  try {
    await app.listen({ port: 3000, host: "localhost" })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()

export default start
