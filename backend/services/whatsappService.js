const axios = require('axios')

/**
 * Helper untuk format rupiah yang aman
 */
const formatCurrency = (value) => {
  if (value === undefined || value === null) return 'Rp 0'
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(value)
}

/**
 * Helper untuk membersihkan nomor telepon ke format internasional (62xxx)
 */
const formatPhoneNumber = (phone) => {
  if (!phone) return ''
  let cleaned = phone.toString().replace(/[^0-9]/g, '')
  if (cleaned.startsWith('0')) {
    cleaned = '62' + cleaned.slice(1)
  }
  return cleaned
}

const sendOrderConfirmation = async (phoneNumber, orderDetails) => {
  try {
    const API_URL = process.env.WHATSAPP_API_URL || 'https://api.fonnte.com/send'
    const API_TOKEN = process.env.WHATSAPP_API_TOKEN

    if (!API_TOKEN) {
      console.warn('⚠️ WHATSAPP_API_TOKEN belum diset.')
      return
    }

    // Proteksi jika items kosong agar tidak error .map()
    const items = orderDetails.items || []
    const itemsList = items
      .map(
        (item) =>
          `- ${item.namaProduk || 'Produk'} (${item.namaUkuran || '-'}) x${
            item.quantity || 0
          } @ ${formatCurrency(item.subtotal)}`
      )
      .join('\n')

    const message = `
Halo *${orderDetails.namaPelanggan || 'Pelanggan'}*,
Pesanan Anda *#${orderDetails.pesananId || '-'}* telah divalidasi dan sedang *DIPROSES*! 🍳

*Detail Pesanan:*
${itemsList || 'Tidak ada detail produk'}

*Total: ${formatCurrency(orderDetails.totalHarga)}*
Alamat Pengiriman: ${orderDetails.alamatPengiriman || '-'}

Terima kasih telah berbelanja di The Candil's!
    `.trim()

    const payload = {
      target: formatPhoneNumber(phoneNumber),
      message: message,
      countryCode: '62',
    }

    console.log('📤 Mengirim WA Konfirmasi ke:', payload.target)

    const response = await axios.post(API_URL, payload, {
      headers: {
        Authorization: API_TOKEN,
        'Content-Type': 'application/json',
      },
      timeout: 10000, // Timeout 10 detik agar tidak gantung di Vercel
    })

    return response.data
  } catch (error) {
    console.error('❌ WA Confirmation Error:', error.response?.data || error.message)
  }
}

const sendOrderShipped = async (phoneNumber, orderDetails) => {
  try {
    const API_URL = process.env.WHATSAPP_API_URL || 'https://api.fonnte.com/send'
    const API_TOKEN = process.env.WHATSAPP_API_TOKEN
    if (!API_TOKEN) return

    const message = `
Halo *${orderDetails.namaPelanggan || 'Pelanggan'}*,
Pesanan Anda *#${orderDetails.pesananId || '-'}* sedang *DIKIRIM*! 🚚

Kurir kami sedang menuju ke lokasi Anda.
Mohon pastikan ada penerima di alamat tujuan.
${orderDetails.trackingInfo ? `\n*Link Tracking:*\n${orderDetails.trackingInfo}\n` : ''}
*Alamat Pengiriman:*
${orderDetails.alamatPengiriman || '-'}

Terima kasih!
    `.trim()

    await axios.post(
      API_URL,
      {
        target: formatPhoneNumber(phoneNumber),
        message: message,
        countryCode: '62',
      },
      {
        headers: { Authorization: API_TOKEN },
      }
    )
  } catch (error) {
    console.error('❌ WA Shipped Error:', error.response?.data || error.message)
  }
}

const sendOrderCompleted = async (phoneNumber, orderDetails) => {
  try {
    const API_URL = process.env.WHATSAPP_API_URL || 'https://api.fonnte.com/send'
    const API_TOKEN = process.env.WHATSAPP_API_TOKEN
    if (!API_TOKEN) return

    let frontendUrl = process.env.FRONTEND_URL || 'https://the-candils.vercel.app'
    if (!frontendUrl.startsWith('http')) frontendUrl = `https://${frontendUrl}`

    const items = orderDetails.items || []
    let reviewSection = ''
    if (items.length > 0) {
      const links = items
        .map((item) => `- ${item.namaProduk}:\n  ${frontendUrl}/products/${item.produkId}`)
        .join('\n\n')
      reviewSection = `*Berikan Ulasan Produk:*\n${links}`
    }

    const message = `
Halo *${orderDetails.namaPelanggan || 'Pelanggan'}*,
Pesanan Anda *#${orderDetails.pesananId || '-'}* telah *SELESAI*! ✅

Terima kasih telah berbelanja di The Candil's.
Kami harap Anda menyukai produk kami! 🌟

${reviewSection}

Sampai jumpa di pesanan berikutnya.
    `.trim()

    await axios.post(
      API_URL,
      {
        target: formatPhoneNumber(phoneNumber),
        message: message,
        countryCode: '62',
      },
      {
        headers: { Authorization: API_TOKEN },
      }
    )
  } catch (error) {
    console.error('❌ WA Completed Error:', error.response?.data || error.message)
  }
}

const sendOrderCancelled = async (phoneNumber, orderDetails) => {
  try {
    const API_URL = process.env.WHATSAPP_API_URL || 'https://api.fonnte.com/send'
    const API_TOKEN = process.env.WHATSAPP_API_TOKEN
    if (!API_TOKEN) return

    const message = `
Halo *${orderDetails.namaPelanggan || 'Pelanggan'}*,
Pesanan Anda *#${orderDetails.pesananId || '-'}* telah *DIBATALKAN* ❌

Alasan: *${orderDetails.alasan || 'Permintaan Pelanggan / Stok Kosong'}*

Mohon maaf atas ketidaknyamanan ini. 
Jika Anda sudah melakukan pembayaran, silakan hubungi admin kami untuk proses refund.

Terima kasih.
    `.trim()

    await axios.post(
      API_URL,
      {
        target: formatPhoneNumber(phoneNumber),
        message: message,
        countryCode: '62',
      },
      {
        headers: { Authorization: API_TOKEN },
      }
    )
  } catch (error) {
    console.error('❌ WA Cancelled Error:', error.response?.data || error.message)
  }
}

module.exports = {
  sendOrderConfirmation,
  sendOrderShipped,
  sendOrderCompleted,
  sendOrderCancelled,
}
