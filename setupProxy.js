const { createProxyMiddleware } = require('http-proxy-middleware')
const express = require('express')

const app = express()

// Proxy for API requests
app.use(
  '/api',
  createProxyMiddleware({
    target: 'http://127.0.0.1:8000/api/',
    changeOrigin: true
  })
)

// Proxy for media requests
app.use(
  '/media',
  createProxyMiddleware({
    target: 'http://127.0.0.1:8000/media/',
    changeOrigin: true
  })
)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`)
})
