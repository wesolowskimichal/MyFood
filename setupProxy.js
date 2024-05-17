const { createProxyMiddleware } = require('http-proxy-middleware')
const express = require('express')

const app = express()

app.use(
  '/api',
  createProxyMiddleware({
    target: 'http://127.0.0.1:8000/api/',
    changeOrigin: true
  })
)

// const PORT = process.env.PORT || 3000;
const PORT = 3000
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${3000}`)
})
