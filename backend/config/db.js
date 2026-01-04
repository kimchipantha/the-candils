// db.js
const mysql = require('mysql2')
const path = require('path')

// -----------------------------------------------------------------
// 📌 Load Environment
// -----------------------------------------------------------------
// Di Vercel (Production), variabel dibaca langsung dari dashboard.
// Kita hanya butuh dotenv untuk environment lokal.
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({
    path: path.resolve(__dirname, '..', '.env.development'),
  })
}

// -----------------------------------------------------------------
// 📌 Konfigurasi Database (Railway Optimized)
// -----------------------------------------------------------------
const connectionConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS, // Pastikan di Vercel namanya DB_PASS
  database: process.env.DB_NAME,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3306,

  // Konfigurasi Standar Pool
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,

  // WAJIB: Aktifkan SSL untuk Railway agar tidak "Handshake Timeout"
  ssl: {
    rejectUnauthorized: false,
  },
}

// Debug output untuk Vercel Logs (Membantu tracking jika host kosong)
console.log('🔍 Database Configuration Check:')
console.log('   Host:', connectionConfig.host || 'NOT_FOUND')
console.log('   Database:', connectionConfig.database || 'NOT_FOUND')

// -----------------------------------------------------------------
// 📌 Pool Koneksi
// -----------------------------------------------------------------
const pool = mysql.createPool(connectionConfig).promise()

// Wrapper untuk handle auto-retry (Mencegah Error 500 mendadak)
const originalQuery = pool.query.bind(pool)

pool.query = async function (...args) {
  try {
    return await originalQuery(...args)
  } catch (err) {
    if (err.code === 'ECONNRESET' || err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.warn('🔄 Koneksi database terputus, mencoba ulang query...')
      return await originalQuery(...args)
    }
    throw err
  }
}

// -----------------------------------------------------------------
// 📌 Error Handling Pool
// -----------------------------------------------------------------
pool.on('error', (err) => {
  console.error('💥 Database pool error:', err.code)
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    console.log('🔄 Reconnecting...')
  }
})

// -----------------------------------------------------------------
// 📌 Test Koneksi (Hanya muncul di Log)
// -----------------------------------------------------------------
pool
  .getConnection()
  .then(async (conn) => {
    console.log('✅ Berhasil terhubung ke database Railway!')
    conn.release()
  })
  .catch((err) => {
    console.error('❌ Gagal koneksi ke database Railway:')
    console.error('   Pesan:', err.message)
    console.error('   Kode:', err.code)
  })

module.exports = pool
