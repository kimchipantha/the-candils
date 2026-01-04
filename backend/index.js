const express = require('express')
const cors = require('cors')
const path = require('path')

// --- 1. Load Environment Variables ---
// Menggunakan path.resolve untuk memastikan file terbaca di lokal
// Di Vercel (Production), ini akan dilewati karena process.env sudah terisi dari dashboard
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
const allowedOrigins = [
  'https://the-candils.vercel.app',
  'https://the-candils.com',
  'https://www.the-candils.com',
  'http://localhost:5173',
]

const corsOptions = {
  origin: function (origin, callback) {
    // Izinkan permintaan tanpa origin (seperti Postman)
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
// Cukup gunakan ini. Middleware 'cors' otomatis menangani pre-flight (OPTIONS)
// Jadi Anda tidak perlu lagi menulis app.options('*', ...) yang bikin crash di Node v25
app.use(cors(corsOptions))

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
    mode: process.env.NODE_ENV || 'development',
  })
})

// --- 8. Global Error Handler ---
app.use((err, req, res, next) => {
  console.error('🔥 Server Error:', err)
  res.status(500).json({
    message: 'Internal Server Error',
    error: process.env.NODE_ENV === 'production' ? 'Check server logs' : err.message,
  })
})

// --- 9. Start Server ---
const PORT = process.env.PORT || 3000

// Listen hanya dijalankan di lokal. Vercel akan menangani ini secara otomatis sebagai serverless function.
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Server berjalan di port ${PORT}`)
  })
}

module.exports = app
