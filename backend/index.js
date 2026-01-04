const express = require('express')
const cors = require('cors')
const path = require('path')

// --- 1. Load Environment Variables ---
// Di Vercel (Production), variabel dibaca langsung dari dashboard (System Env).
// Kita hanya menggunakan dotenv jika berjalan di komputer lokal (Development).
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({
    path: path.resolve(__dirname, '.env.development'),
  })
}

// --- 2. Cloudinary Config ---
const cloudinary = require('cloudinary').v2
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

// --- 3. Import Routes ---
const authRoutes = require('./routes/auth')
const productRoutes = require('./routes/productRoutes')
const reviewRoutes = require('./routes/reviewRoutes')
const pesananRoutes = require('./routes/pesananRoutes')
const cartRoutes = require('./routes/cart')
const homeRoutes = require('./routes/homeRoutes')
const salesRoutes = require('./routes/salesRoutes')
const userRoutes = require('./routes/userRoutes')

const app = express()

// --- 4. Konfigurasi CORS ---
// Gunakan array sederhana agar Vercel lebih mudah memproses header
const allowedOrigins = [
  'https://the-candils.vercel.app',
  'https://the-candils.com',
  'https://www.the-candils.com',
  'http://localhost:5173',
]

const corsOptions = {
  origin: function (origin, callback) {
    // Izinkan jika tidak ada origin (seperti Postman atau server-to-server)
    if (!origin) return callback(null, true)

    if (allowedOrigins.indexOf(origin) !== -1 || origin.startsWith('http://localhost')) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
}

// --- 5. Middleware ---
app.use(cors(corsOptions))
// Tambahkan middleware khusus untuk menangani pre-flight request (OPTIONS)
app.options('*', cors(corsOptions))

app.use(express.json())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

// --- 6. Routes ---
app.use('/api/auth', authRoutes)
app.use('/api/products/:produkId/reviews', reviewRoutes)
app.use('/api/products', productRoutes)
app.use('/api/pesanan', pesananRoutes)
app.use('/api/cart', cartRoutes)
app.use('/api/sales', salesRoutes)
app.use('/api/home', homeRoutes)
app.use('/api/users', userRoutes)

// --- 7. Default Route ---
app.get('/', (req, res) => {
  res.send({
    message: 'API is running...',
    env: process.env.NODE_ENV,
  })
})

// --- 8. Global Error Handler ---
// Penting untuk mencegah server crash total yang menyebabkan Error 500
app.use((err, req, res, next) => {
  console.error('🔥 Server Error:', err)
  res.status(500).json({
    message: 'Internal Server Error',
    error: process.env.NODE_ENV === 'production' ? 'See logs' : err.message,
  })
})

// --- 9. Start Server ---
const PORT = process.env.PORT || 3000
// Periksa apakah server dijalankan di Vercel (sebagai module) atau lokal
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`)
  })
}

module.exports = app
