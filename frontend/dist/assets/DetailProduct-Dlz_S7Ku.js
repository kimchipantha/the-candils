import {
  d as T,
  c as M,
  h as w,
  a,
  o as r,
  b as e,
  f as I,
  F as A,
  r as C,
  n as S,
  Y as Z,
  C as ee,
  w as q,
  t as v,
  e as J,
  j as z,
  v as V,
  ac as Q,
  O as G,
  aj as te,
  m as E,
  P as se,
  q as ae,
  x as D,
  z as re,
  R as O,
} from './index-BWtGjQtB.js'
const oe = { class: 'bg-white rounded-lg shadow-md overflow-hidden' },
  le = { class: 'relative aspect-square bg-gray-100' },
  ne = ['src', 'alt'],
  ie = { key: 1, class: 'w-full h-full flex items-center justify-center' },
  de = { key: 0, class: 'p-4 flex gap-2 overflow-x-auto' },
  ue = ['onClick'],
  ce = ['src', 'alt'],
  ge = T({
    __name: 'ProductImage',
    props: { product: {} },
    setup(P) {
      const s = P,
        n = M(() =>
          s.product.foto ? [s.product.foto, s.product.foto, s.product.foto, s.product.foto] : [],
        ),
        g = w(0),
        i = M(() => n.value[g.value] || s.product.foto),
        u = () => {
          g.value > 0 ? g.value-- : (g.value = n.value.length - 1)
        },
        k = () => {
          g.value < n.value.length - 1 ? g.value++ : (g.value = 0)
        }
      return (
        console.log('✅ ProductImage component mounted!'),
        (f, p) => (
          r(),
          a('div', oe, [
            e('div', le, [
              f.product.foto
                ? (r(),
                  a(
                    'img',
                    {
                      key: 0,
                      src: i.value,
                      alt: f.product.namaProduk,
                      class: 'w-full h-full object-cover',
                    },
                    null,
                    8,
                    ne,
                  ))
                : (r(),
                  a('div', ie, [
                    ...(p[0] ||
                      (p[0] = [e('span', { class: 'text-gray-400' }, 'No Image Available', -1)])),
                  ])),
              n.value.length > 1
                ? (r(),
                  a(
                    'button',
                    {
                      key: 2,
                      onClick: u,
                      class:
                        'absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all',
                    },
                    [
                      ...(p[1] ||
                        (p[1] = [
                          e(
                            'svg',
                            {
                              class: 'w-6 h-6 text-gray-800',
                              fill: 'none',
                              stroke: 'currentColor',
                              viewBox: '0 0 24 24',
                            },
                            [
                              e('path', {
                                'stroke-linecap': 'round',
                                'stroke-linejoin': 'round',
                                'stroke-width': '2',
                                d: 'M15 19l-7-7 7-7',
                              }),
                            ],
                            -1,
                          ),
                        ])),
                    ],
                  ))
                : I('', !0),
              n.value.length > 1
                ? (r(),
                  a(
                    'button',
                    {
                      key: 3,
                      onClick: k,
                      class:
                        'absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all',
                    },
                    [
                      ...(p[2] ||
                        (p[2] = [
                          e(
                            'svg',
                            {
                              class: 'w-6 h-6 text-gray-800',
                              fill: 'none',
                              stroke: 'currentColor',
                              viewBox: '0 0 24 24',
                            },
                            [
                              e('path', {
                                'stroke-linecap': 'round',
                                'stroke-linejoin': 'round',
                                'stroke-width': '2',
                                d: 'M9 5l7 7-7 7',
                              }),
                            ],
                            -1,
                          ),
                        ])),
                    ],
                  ))
                : I('', !0),
            ]),
            n.value.length > 1
              ? (r(),
                a('div', de, [
                  (r(!0),
                  a(
                    A,
                    null,
                    C(
                      n.value,
                      (y, _) => (
                        r(),
                        a(
                          'button',
                          {
                            key: _,
                            onClick: (c) => (g.value = _),
                            class: S([
                              'flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all',
                              g.value === _
                                ? 'border-[#BAB772] ring-2 ring-[#BAB772] ring-opacity-50'
                                : 'border-gray-200 hover:border-gray-300',
                            ]),
                          },
                          [
                            e(
                              'img',
                              {
                                src: y,
                                alt: `${f.product.namaProduk} ${_ + 1}`,
                                class: 'w-full h-full object-cover',
                              },
                              null,
                              8,
                              ce,
                            ),
                          ],
                          10,
                          ue,
                        )
                      ),
                    ),
                    128,
                  )),
                ]))
              : I('', !0),
          ])
        )
      )
    },
  }),
  ve = { class: 'w-full' },
  pe = { class: 'text-3xl md:text-4xl font-bold text-gray-900 mb-4' },
  me = { class: 'text-lg text-gray-600 mb-6 leading-relaxed' },
  he = { class: 'mb-6' },
  be = { class: 'text-3xl font-bold text-orange-600' },
  ke = { key: 0, class: 'ml-2 text-sm text-gray-500' },
  fe = { key: 0, class: 'mb-6' },
  ye = { class: 'flex flex-wrap gap-3' },
  xe = ['onClick'],
  we = { key: 0, class: 'text-xs ml-1' },
  _e = { key: 1, class: 'mb-6 text-sm text-gray-500' },
  $e = { class: 'mb-8' },
  Be = { class: 'flex items-center space-x-3' },
  Ie = ['disabled'],
  Ae = ['max'],
  Ce = ['disabled'],
  Pe = { class: 'text-sm text-gray-500 mt-2' },
  Re = { class: 'flex flex-col sm:flex-row gap-3' },
  Me = ['disabled'],
  Ue = ['disabled'],
  je = T({
    __name: 'ProductInfo',
    props: { product: {} },
    setup(P) {
      const s = P,
        n = Z(),
        g = ee(),
        i = w(null),
        u = w(1),
        k = 'https://backend-candils.vercel.app/api/cart',
        f = M(() => {
          const d = parseFloat(s.product.hargaUnit) || 0,
            m = parseFloat(i.value?.hargaTambahan) || 0
          return (d + m) * u.value
        }),
        p = M(
          () =>
            s.product.stok > 0 &&
            (!s.product.ukurans || s.product.ukurans.length === 0 || i.value !== null),
        ),
        y = () => {
          let d = localStorage.getItem('cartSessionId')
          if (!d) {
            const m = Date.now(),
              b = Math.random().toString(36).substring(2, 15)
            ;((d = `session_${m}_${b}`), localStorage.setItem('cartSessionId', d))
          }
          return d
        },
        _ = (d) => {
          i.value = d
        },
        c = () => {
          u.value < s.product.stok && u.value++
        },
        h = () => {
          u.value > 1 && u.value--
        },
        B = () => {
          ;(u.value > s.product.stok && (u.value = s.product.stok), u.value < 1 && (u.value = 1))
        },
        R = (d) =>
          d == null || isNaN(d)
            ? 'Rp -'
            : new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(d),
        F = async () => {
          if (!p.value) {
            s.product.stok <= 0
              ? g.error('Maaf, stok produk ini habis.')
              : s.product.ukurans &&
                s.product.ukurans.length > 0 &&
                !i.value &&
                g.warning('Silakan pilih varian ukuran terlebih dahulu.')
            return
          }
          const m = {
            cartSessionId: y(),
            produkId: s.product.produkId,
            ukuranId: i.value?.ukuranId || null,
            jumlah: u.value,
          }
          console.log('🛒 Add to Cart (Sending to API):', m)
          try {
            const U = await (
              await fetch(`${k}/add`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(m),
              })
            ).json()
            U.success
              ? (g.success(
                  `Berhasil menambahkan ${m.jumlah}x ${s.product.namaProduk} ke keranjang!`,
                ),
                window.dispatchEvent(new Event('cartUpdated')),
                (u.value = 1),
                s.product.ukurans && s.product.ukurans.length > 1 && (i.value = null))
              : g.error(`Gagal menambahkan: ${U.message || 'Error tidak diketahui'}`)
          } catch (b) {
            ;(console.error('Error adding to cart:', b),
              g.error('Terjadi kesalahan. Tidak dapat terhubung ke server.'))
          }
        },
        N = () => {
          if (!p.value) {
            s.product.stok <= 0
              ? g.error('Maaf, stok produk ini habis.')
              : s.product.ukurans &&
                s.product.ukurans.length > 0 &&
                !i.value &&
                g.warning('Silakan pilih varian ukuran terlebih dahulu.')
            return
          }
          const d = parseFloat(s.product.hargaUnit) || 0,
            m = parseFloat(i.value?.hargaTambahan) || 0,
            b = d + m,
            U = f.value,
            j = {
              items: [
                {
                  keranjangItemId: 0,
                  produkId: s.product.produkId,
                  ukuranId: i.value?.ukuranId || null,
                  jumlah: u.value,
                  harga_satuan: b,
                  subtotal: U,
                  namaProduk: s.product.namaProduk,
                  namaUkuran: i.value?.namaUkuran || null,
                  foto: s.product.foto,
                  deskripsi: s.product.deskripsi,
                  cartSessionId: '',
                },
              ],
              isDirectCheckout: !0,
            }
          ;(sessionStorage.setItem('directCheckoutData', JSON.stringify(j)),
            console.log('⚡ Menyimpan data direct checkout dan navigasi...', j),
            n.push('/checkout'))
        }
      return (
        q(
          () => s.product,
          (d) => {
            ;(d && d.ukurans && d.ukurans.length > 0 && d.ukurans.length === 1
              ? (i.value = d.ukurans[0])
              : (i.value = null),
              (u.value = 1))
          },
          { immediate: !0 },
        ),
        (d, m) => (
          r(),
          a('div', ve, [
            e('h1', pe, v(d.product.namaProduk), 1),
            e('p', me, v(d.product.deskripsi || 'Tidak ada deskripsi.'), 1),
            e('div', he, [
              e('span', be, v(R(f.value)), 1),
              i.value ? (r(), a('span', ke, ' (' + v(i.value.namaUkuran) + ') ', 1)) : I('', !0),
            ]),
            d.product.ukurans && d.product.ukurans.length > 0
              ? (r(),
                a('div', fe, [
                  m[1] ||
                    (m[1] = e(
                      'h3',
                      { class: 'text-lg font-semibold text-gray-900 mb-3' },
                      'Pilih Ukuran',
                      -1,
                    )),
                  e('div', ye, [
                    (r(!0),
                    a(
                      A,
                      null,
                      C(
                        d.product.ukurans,
                        (b) => (
                          r(),
                          a(
                            'button',
                            {
                              key: b.ukuranId,
                              onClick: (U) => _(b),
                              class: S([
                                'px-6 py-3 border-2 rounded-lg font-medium transition-all duration-200',
                                i.value?.ukuranId === b.ukuranId
                                  ? 'border-[#BAB772] bg-[#FAFAD2] text-[#8f8c4b]'
                                  : 'border-gray-300 text-gray-700 hover:border-gray-400',
                              ]),
                            },
                            [
                              J(v(b.namaUkuran) + ' ', 1),
                              b.hargaTambahan > 0
                                ? (r(), a('span', we, ' (+' + v(R(b.hargaTambahan)) + ') ', 1))
                                : I('', !0),
                            ],
                            10,
                            xe,
                          )
                        ),
                      ),
                      128,
                    )),
                  ]),
                ]))
              : (r(), a('div', _e, 'Produk ini tidak memiliki varian ukuran.')),
            e('div', $e, [
              m[4] ||
                (m[4] = e(
                  'h3',
                  { class: 'text-lg font-semibold text-gray-900 mb-3' },
                  'Jumlah',
                  -1,
                )),
              e('div', Be, [
                e(
                  'button',
                  {
                    onClick: h,
                    disabled: u.value <= 1,
                    class:
                      'w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed',
                  },
                  [
                    ...(m[2] ||
                      (m[2] = [
                        e(
                          'svg',
                          {
                            class: 'w-5 h-5',
                            fill: 'none',
                            stroke: 'currentColor',
                            viewBox: '0 0 24 24',
                          },
                          [
                            e('path', {
                              'stroke-linecap': 'round',
                              'stroke-linejoin': 'round',
                              'stroke-width': '2',
                              d: 'M20 12H4',
                            }),
                          ],
                          -1,
                        ),
                      ])),
                  ],
                  8,
                  Ie,
                ),
                z(
                  e(
                    'input',
                    {
                      'onUpdate:modelValue': m[0] || (m[0] = (b) => (u.value = b)),
                      type: 'number',
                      min: '1',
                      max: d.product.stok,
                      onInput: B,
                      class:
                        'w-16 h-10 text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BAB772] focus:border-transparent',
                    },
                    null,
                    40,
                    Ae,
                  ),
                  [[V, u.value, void 0, { number: !0 }]],
                ),
                e(
                  'button',
                  {
                    onClick: c,
                    disabled: u.value >= d.product.stok,
                    class:
                      'w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed',
                  },
                  [
                    ...(m[3] ||
                      (m[3] = [
                        e(
                          'svg',
                          {
                            class: 'w-5 h-5',
                            fill: 'none',
                            stroke: 'currentColor',
                            viewBox: '0 0 24 24',
                          },
                          [
                            e('path', {
                              'stroke-linecap': 'round',
                              'stroke-linejoin': 'round',
                              'stroke-width': '2',
                              d: 'M12 6v6m0 0v6m0-6h6m-6 0H6',
                            }),
                          ],
                          -1,
                        ),
                      ])),
                  ],
                  8,
                  Ce,
                ),
              ]),
              e('p', Pe, 'Tersedia ' + v(d.product.stok) + ' stok', 1),
            ]),
            e('div', Re, [
              e(
                'button',
                {
                  onClick: F,
                  disabled: !p.value,
                  class:
                    'flex-1 bg-white border-2 border-[#BAB772] text-[#BAB772] hover:bg-[#FAFAD2] disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed font-semibold py-4 px-6 rounded-lg transition-colors duration-200 text-lg',
                },
                v(
                  p.value
                    ? '🛒 Tambah ke Keranjang'
                    : d.product.stok <= 0
                      ? 'Stok Habis'
                      : 'Pilih Ukuran',
                ),
                9,
                Me,
              ),
              e(
                'button',
                {
                  onClick: N,
                  disabled: !p.value,
                  class:
                    'flex-1 bg-[#BAB772] hover:bg-[#a8a668] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 text-lg',
                },
                v(
                  p.value
                    ? '⚡ Checkout Sekarang'
                    : d.product.stok <= 0
                      ? 'Stok Habis'
                      : 'Pilih Ukuran',
                ),
                9,
                Ue,
              ),
            ]),
          ])
        )
      )
    },
  }),
  De = { class: 'bg-white rounded-lg p-8' },
  Se = { class: 'text-gray-700 text-base leading-relaxed whitespace-pre-wrap' },
  Te = T({
    __name: 'ProductDetails',
    props: { product: {} },
    setup(P) {
      return (s, n) => (
        r(),
        a('div', De, [
          n[0] ||
            (n[0] = e(
              'h2',
              { class: 'text-2xl font-bold text-gray-900 mb-6' },
              ' Deskripsi Lengkap ',
              -1,
            )),
          e('p', Se, v(s.product.deskripsi || 'Tidak ada deskripsi untuk produk ini.'), 1),
        ])
      )
    },
  }),
  Fe = Q(Te, [['__scopeId', 'data-v-48d2ed37']]),
  Le = { class: 'bg-white rounded-lg shadow-sm p-8' },
  Ne = { class: 'mb-8' },
  Ee = { class: 'flex items-center gap-4 mb-4' },
  ze = { class: 'flex gap-1' },
  Ve = { class: 'text-3xl font-bold text-gray-900' },
  He = { class: 'text-gray-600 mb-6' },
  Ge = { class: 'space-y-2' },
  Oe = { class: 'text-sm text-gray-600 w-3' },
  qe = { class: 'flex-1 h-2 bg-gray-200 rounded-full overflow-hidden' },
  Je = { class: 'text-sm text-gray-600 w-12 text-right' },
  Qe = { key: 0, class: 'space-y-6 mb-8' },
  Ke = { class: 'flex items-start justify-between mb-3' },
  We = { class: 'flex items-center gap-3' },
  Ye = { class: 'font-semibold text-gray-900' },
  Xe = { class: 'text-sm text-gray-500' },
  Ze = { class: 'flex gap-1' },
  et = { class: 'text-gray-700 leading-relaxed mb-2' },
  tt = { key: 0, class: 'mt-3 mb-3' },
  st = ['src', 'onClick'],
  at = { class: 'flex items-center justify-end' },
  rt = { class: 'text-xs text-gray-500' },
  ot = { key: 0, class: 'text-center mt-6' },
  lt = { key: 1, class: 'text-center py-12 mb-8' },
  nt = { class: 'mb-6' },
  it = { class: 'flex gap-2' },
  dt = ['onClick'],
  ut = { class: 'mb-6' },
  ct = { class: 'mb-6' },
  gt = { class: 'mb-6' },
  vt = { class: 'flex items-start gap-4' },
  pt = { key: 0, class: 'relative group' },
  mt = ['src'],
  ht = { key: 0, class: 'text-xs text-gray-500 mt-2' },
  bt = ['disabled'],
  kt = { key: 0, class: 'flex items-center justify-center gap-2' },
  ft = { key: 1 },
  yt = { key: 0, class: 'mt-4 p-4 bg-red-50 border border-red-200 rounded-lg' },
  xt = { class: 'text-sm text-red-600' },
  wt = { key: 1, class: 'mt-4 p-4 bg-green-50 border border-green-200 rounded-lg' },
  _t = T({
    __name: 'ProductReviewsRatings',
    props: { product: {}, reviews: {}, hasMore: { type: Boolean } },
    emits: ['reviewAdded', 'loadMore'],
    setup(P, { emit: s }) {
      const n = P,
        g = s,
        i = w({ rating: 0, namaReviewer: '', komentar: '' }),
        u = w(!1),
        k = w(null),
        f = w(!1),
        p = w(null),
        y = w(null),
        _ = w(null),
        c = M(() => n.reviews.length),
        h = M(() =>
          n.reviews.length === 0
            ? '0.0'
            : (n.reviews.reduce((t, l) => t + l.rating, 0) / n.reviews.length).toFixed(1),
        ),
        B = M(() => n.reviews),
        R = M(
          () =>
            i.value.rating > 0 &&
            i.value.namaReviewer.trim() !== '' &&
            i.value.komentar.trim() !== '',
        ),
        F = (o) => n.reviews.filter((t) => t.rating === o).length,
        N = (o) => (c.value === 0 ? 0 : (F(o) / c.value) * 100),
        d = (o) => {
          if (!o) return '?'
          const t = o.trim().split(' ')
          if (t.length > 1 && t[0] && t[1]) {
            const l = t[0].length > 0 ? t[0][0] : '',
              $ = t[1].length > 0 ? t[1][0] : '',
              x = (l + $).trim().toUpperCase()
            return x.length > 0 ? x : '?'
          } else if (t[0] && t[0].length > 0) return t[0].substring(0, 2).toUpperCase()
          return '?'
        },
        m = (o) => {
          const t = [
            '#BAB772',
            '#8B9467',
            '#7A8450',
            '#9BA882',
            '#6B7B5E',
            '#A8B68F',
            '#8FA67D',
            '#7D9B6B',
            '#6B8559',
            '#597047',
          ]
          if (!o) return t[0]
          const l = o.charCodeAt(0) % t.length
          return t[l]
        },
        b = (o) => {
          if (!o) return 'Tanggal tidak valid'
          const t = new Date(o)
          return isNaN(t.getTime())
            ? 'Tanggal tidak valid'
            : t.toLocaleDateString('id-ID', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })
        },
        U = (o) => {
          if (!o) return 'Tanggal tidak valid'
          const t = new Date(o)
          if (isNaN(t.getTime())) return 'Tanggal tidak valid'
          const $ = Math.floor((new Date().getTime() - t.getTime()) / 1e3)
          if ($ < 0) return 'Baru saja'
          let x = $ / 31536e3
          return x > 1
            ? Math.floor(x) + ' tahun lalu'
            : ((x = $ / 2592e3),
              x > 1
                ? Math.floor(x) + ' bulan lalu'
                : ((x = $ / 86400),
                  x > 1
                    ? Math.floor(x) + ' hari lalu'
                    : ((x = $ / 3600),
                      x > 1
                        ? Math.floor(x) + ' jam lalu'
                        : ((x = $ / 60),
                          x > 1 ? Math.floor(x) + ' menit lalu' : Math.floor($) + ' detik lalu'))))
        },
        j = (o) => (o ? (o.startsWith('http') ? o : `https://backend-candils.vercel.app${o}`) : ''),
        K = (o) => {
          window.open(j(o), '_blank')
        },
        W = () => {
          p.value?.click()
        },
        Y = (o) => {
          const t = o.target
          if (t.files && t.files.length > 0) {
            const l = t.files[0]
            if (l.size > 2 * 1024 * 1024) {
              ;(alert('Ukuran file terlalu besar (maksimal 2MB)'), (t.value = ''))
              return
            }
            ;((y.value = l), (_.value = URL.createObjectURL(l)))
          }
        },
        H = () => {
          ;((y.value = null),
            _.value && (URL.revokeObjectURL(_.value), (_.value = null)),
            p.value && (p.value.value = ''))
        },
        X = async () => {
          if (R.value) {
            ;((u.value = !0), (k.value = null), (f.value = !1))
            try {
              const o = n.product.produkId
              if (!o) throw new Error('ID Produk tidak valid')
              const t = new FormData()
              ;(t.append('namaReviewer', i.value.namaReviewer.trim()),
                t.append('rating', String(i.value.rating)),
                t.append('komentar', i.value.komentar.trim()),
                y.value && t.append('foto', y.value),
                console.log('📤 Submitting review to API:', { produkId: o, hasFile: !!y.value }))
              const l = await te(o, t)
              ;(console.log('✅ Review submitted successfully:', l),
                (i.value = { rating: 0, namaReviewer: '', komentar: '' }),
                H(),
                (f.value = !0),
                g('reviewAdded'),
                setTimeout(() => {
                  f.value = !1
                }, 5e3))
            } catch (o) {
              if ((console.error('❌ Error submitting review:', o), o.response)) {
                const t = o.response.status,
                  l = o.response.data?.message || o.response.data?.error || 'Gagal mengirim ulasan.'
                t === 400
                  ? (k.value = `Input tidak valid: ${l}`)
                  : t === 404
                    ? (k.value = 'Produk tidak ditemukan.')
                    : t === 500
                      ? (k.value = 'Terjadi kesalahan pada server. Silakan coba lagi nanti.')
                      : (k.value = l)
              } else
                o.request
                  ? (k.value = 'Tidak dapat terhubung ke server. Periksa koneksi internet Anda.')
                  : (k.value = o.message || 'Terjadi kesalahan. Silakan coba lagi.')
            } finally {
              u.value = !1
            }
          }
        }
      return (
        console.log('✅ ProductReviewsRatings component mounted!'),
        (o, t) => (
          r(),
          a('div', Le, [
            t[18] ||
              (t[18] = e(
                'h2',
                { class: 'text-2xl font-bold text-gray-900 mb-8' },
                ' Ulasan Pelanggan ',
                -1,
              )),
            e('div', Ne, [
              e('div', Ee, [
                e('div', ze, [
                  (r(),
                  a(
                    A,
                    null,
                    C(5, (l) =>
                      e(
                        'svg',
                        {
                          key: l,
                          class: S([
                            'w-8 h-8 fill-current',
                            o.reviews.length > 0 ? 'text-yellow-400' : 'text-gray-300',
                          ]),
                          viewBox: '0 0 20 20',
                        },
                        [
                          ...(t[3] ||
                            (t[3] = [
                              e(
                                'path',
                                {
                                  d: 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z',
                                },
                                null,
                                -1,
                              ),
                            ])),
                        ],
                        2,
                      ),
                    ),
                    64,
                  )),
                ]),
                e('div', null, [
                  e('span', Ve, v(h.value), 1),
                  t[4] || (t[4] = e('span', { class: 'text-gray-600 ml-2' }, 'dari 5 bintang', -1)),
                ]),
              ]),
              e('p', He, v(c.value) + ' ulasan pelanggan', 1),
              e('div', Ge, [
                (r(),
                a(
                  A,
                  null,
                  C([5, 4, 3, 2, 1], (l) =>
                    e('div', { key: l, class: 'flex items-center gap-4' }, [
                      e('span', Oe, v(l), 1),
                      t[5] ||
                        (t[5] = e(
                          'svg',
                          {
                            class: 'w-5 h-5 text-gray-300 fill-current flex-shrink-0',
                            viewBox: '0 0 20 20',
                          },
                          [
                            e('path', {
                              d: 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z',
                            }),
                          ],
                          -1,
                        )),
                      e('div', qe, [
                        e(
                          'div',
                          {
                            class: 'h-full bg-[#BAB772] rounded-full transition-all duration-300',
                            style: G({ width: `${N(l)}%` }),
                          },
                          null,
                          4,
                        ),
                      ]),
                      e('span', Je, v(F(l)), 1),
                    ]),
                  ),
                  64,
                )),
              ]),
            ]),
            o.reviews && o.reviews.length > 0
              ? (r(),
                a('div', Qe, [
                  (r(!0),
                  a(
                    A,
                    null,
                    C(
                      B.value,
                      (l) => (
                        r(),
                        a(
                          'div',
                          {
                            key: l.ulasanId,
                            class: 'border-b border-gray-200 pb-6 last:border-b-0',
                          },
                          [
                            e('div', Ke, [
                              e('div', We, [
                                e(
                                  'div',
                                  {
                                    class:
                                      'w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-lg',
                                    style: G({ backgroundColor: m(l.namaReviewer) }),
                                  },
                                  v(d(l.namaReviewer)),
                                  5,
                                ),
                                e('div', null, [
                                  e('p', Ye, v(l.namaReviewer || 'User Anonim'), 1),
                                  e('p', Xe, v(U(l.tanggalUlasan)), 1),
                                ]),
                              ]),
                              e('div', Ze, [
                                (r(),
                                a(
                                  A,
                                  null,
                                  C(5, ($) =>
                                    e(
                                      'svg',
                                      {
                                        key: $,
                                        class: S([
                                          'w-4 h-4',
                                          $ <= l.rating
                                            ? 'text-yellow-400 fill-current'
                                            : 'text-gray-300 fill-current',
                                        ]),
                                        viewBox: '0 0 20 20',
                                      },
                                      [
                                        ...(t[6] ||
                                          (t[6] = [
                                            e(
                                              'path',
                                              {
                                                d: 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z',
                                              },
                                              null,
                                              -1,
                                            ),
                                          ])),
                                      ],
                                      2,
                                    ),
                                  ),
                                  64,
                                )),
                              ]),
                            ]),
                            e('p', et, v(l.komentar || 'User tidak memberikan komentar.'), 1),
                            l.foto
                              ? (r(),
                                a('div', tt, [
                                  e(
                                    'img',
                                    {
                                      src: j(l.foto),
                                      alt: 'Foto Ulasan',
                                      class:
                                        'h-32 w-auto object-cover rounded-lg border border-gray-200 cursor-pointer hover:opacity-90 transition-opacity',
                                      onClick: ($) => K(l.foto),
                                    },
                                    null,
                                    8,
                                    st,
                                  ),
                                ]))
                              : I('', !0),
                            e('div', at, [e('span', rt, v(b(l.tanggalUlasan)), 1)]),
                          ],
                        )
                      ),
                    ),
                    128,
                  )),
                  o.hasMore
                    ? (r(),
                      a('div', ot, [
                        e(
                          'button',
                          {
                            onClick: t[0] || (t[0] = (l) => o.$emit('loadMore')),
                            class:
                              'text-[#BAB772] hover:text-[#A3A065] font-medium transition-colors',
                          },
                          ' Lihat Ulasan Lainnya ',
                        ),
                      ]))
                    : I('', !0),
                ]))
              : (r(),
                a('div', lt, [
                  ...(t[7] ||
                    (t[7] = [
                      e(
                        'svg',
                        {
                          class: 'w-20 h-20 text-gray-300 mx-auto mb-4',
                          fill: 'none',
                          stroke: 'currentColor',
                          viewBox: '0 0 24 24',
                        },
                        [
                          e('path', {
                            'stroke-linecap': 'round',
                            'stroke-linejoin': 'round',
                            'stroke-width': '2',
                            d: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z',
                          }),
                        ],
                        -1,
                      ),
                      e(
                        'h3',
                        { class: 'text-lg font-semibold text-gray-700 mb-2' },
                        'Belum Ada Ulasan',
                        -1,
                      ),
                      e(
                        'p',
                        { class: 'text-gray-500' },
                        'Jadilah yang pertama memberikan ulasan untuk produk ini!',
                        -1,
                      ),
                    ])),
                ])),
            t[19] || (t[19] = e('div', { class: 'border-t border-gray-200 my-8' }, null, -1)),
            e('div', null, [
              t[17] ||
                (t[17] = e(
                  'h3',
                  { class: 'text-xl font-bold text-gray-900 mb-6' },
                  'Tulis Ulasan',
                  -1,
                )),
              e('div', nt, [
                t[9] ||
                  (t[9] = e(
                    'label',
                    { class: 'block text-sm font-medium text-gray-700 mb-2' },
                    ' Rating Anda ',
                    -1,
                  )),
                e('div', it, [
                  (r(),
                  a(
                    A,
                    null,
                    C(5, (l) =>
                      e(
                        'button',
                        {
                          key: l,
                          onClick: ($) => (i.value.rating = l),
                          type: 'button',
                          class: 'transition-transform hover:scale-110',
                        },
                        [
                          (r(),
                          a(
                            'svg',
                            {
                              class: S([
                                'w-8 h-8',
                                l <= i.value.rating
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300 fill-current',
                              ]),
                              viewBox: '0 0 20 20',
                            },
                            [
                              ...(t[8] ||
                                (t[8] = [
                                  e(
                                    'path',
                                    {
                                      d: 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z',
                                    },
                                    null,
                                    -1,
                                  ),
                                ])),
                            ],
                            2,
                          )),
                        ],
                        8,
                        dt,
                      ),
                    ),
                    64,
                  )),
                ]),
              ]),
              e('div', ut, [
                t[10] ||
                  (t[10] = e(
                    'label',
                    { class: 'block text-sm font-medium text-gray-700 mb-2' },
                    ' Nama Anda ',
                    -1,
                  )),
                z(
                  e(
                    'input',
                    {
                      'onUpdate:modelValue': t[1] || (t[1] = (l) => (i.value.namaReviewer = l)),
                      type: 'text',
                      placeholder: 'Masukkan nama Anda',
                      class:
                        'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BAB772] focus:border-[#BAB772] outline-none transition-all',
                    },
                    null,
                    512,
                  ),
                  [[V, i.value.namaReviewer]],
                ),
              ]),
              e('div', ct, [
                t[11] ||
                  (t[11] = e(
                    'label',
                    { class: 'block text-sm font-medium text-gray-700 mb-2' },
                    ' Ulasan Anda ',
                    -1,
                  )),
                z(
                  e(
                    'textarea',
                    {
                      'onUpdate:modelValue': t[2] || (t[2] = (l) => (i.value.komentar = l)),
                      rows: '5',
                      placeholder: 'Bagikan pengalaman Anda dengan produk ini...',
                      class:
                        'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BAB772] focus:border-[#BAB772] outline-none transition-all resize-none',
                    },
                    null,
                    512,
                  ),
                  [[V, i.value.komentar]],
                ),
              ]),
              e('div', gt, [
                t[14] ||
                  (t[14] = e(
                    'label',
                    { class: 'block text-sm font-medium text-gray-700 mb-2' },
                    ' Foto Produk (Opsional) ',
                    -1,
                  )),
                e(
                  'input',
                  {
                    type: 'file',
                    ref_key: 'fileInput',
                    ref: p,
                    accept: 'image/*',
                    class: 'hidden',
                    onChange: Y,
                  },
                  null,
                  544,
                ),
                e('div', vt, [
                  e(
                    'button',
                    {
                      type: 'button',
                      onClick: W,
                      class:
                        'flex items-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#BAB772] transition-all text-gray-600 hover:text-[#BAB772]',
                    },
                    [
                      t[12] ||
                        (t[12] = e(
                          'svg',
                          {
                            class: 'w-5 h-5',
                            fill: 'none',
                            stroke: 'currentColor',
                            viewBox: '0 0 24 24',
                          },
                          [
                            e('path', {
                              'stroke-linecap': 'round',
                              'stroke-linejoin': 'round',
                              'stroke-width': '2',
                              d: 'M12 4v16m8-8H4',
                            }),
                          ],
                          -1,
                        )),
                      e('span', null, v(y.value ? 'Ganti Gambar' : 'Pilih Gambar'), 1),
                    ],
                  ),
                  _.value
                    ? (r(),
                      a('div', pt, [
                        e(
                          'img',
                          {
                            src: _.value,
                            alt: 'Preview',
                            class: 'h-16 w-16 object-cover rounded-lg border border-gray-200',
                          },
                          null,
                          8,
                          mt,
                        ),
                        e(
                          'button',
                          {
                            onClick: H,
                            class:
                              'absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600 transition-colors',
                            title: 'Hapus Gambar',
                          },
                          [
                            ...(t[13] ||
                              (t[13] = [
                                e(
                                  'svg',
                                  {
                                    class: 'w-3 h-3',
                                    fill: 'none',
                                    stroke: 'currentColor',
                                    viewBox: '0 0 24 24',
                                  },
                                  [
                                    e('path', {
                                      'stroke-linecap': 'round',
                                      'stroke-linejoin': 'round',
                                      'stroke-width': '2',
                                      d: 'M6 18L18 6M6 6l12 12',
                                    }),
                                  ],
                                  -1,
                                ),
                              ])),
                          ],
                        ),
                      ]))
                    : I('', !0),
                ]),
                y.value ? (r(), a('p', ht, ' File terpilih: ' + v(y.value.name), 1)) : I('', !0),
              ]),
              e(
                'button',
                {
                  onClick: X,
                  disabled: !R.value || u.value,
                  class:
                    'w-full bg-[#BAB772] hover:bg-[#A3A065] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]',
                },
                [
                  u.value
                    ? (r(),
                      a('span', kt, [
                        ...(t[15] ||
                          (t[15] = [
                            e(
                              'svg',
                              {
                                class: 'animate-spin h-5 w-5 text-white',
                                xmlns: 'http://www.w3.org/2000/svg',
                                fill: 'none',
                                viewBox: '0 0 24 24',
                              },
                              [
                                e('circle', {
                                  class: 'opacity-25',
                                  cx: '12',
                                  cy: '12',
                                  r: '10',
                                  stroke: 'currentColor',
                                  'stroke-width': '4',
                                }),
                                e('path', {
                                  class: 'opacity-75',
                                  fill: 'currentColor',
                                  d: 'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z',
                                }),
                              ],
                              -1,
                            ),
                            J(' Mengirim... ', -1),
                          ])),
                      ]))
                    : (r(), a('span', ft, 'Kirim Ulasan')),
                ],
                8,
                bt,
              ),
              k.value ? (r(), a('div', yt, [e('p', xt, v(k.value), 1)])) : I('', !0),
              f.value
                ? (r(),
                  a('div', wt, [
                    ...(t[16] ||
                      (t[16] = [
                        e(
                          'p',
                          { class: 'text-sm text-green-600' },
                          '✅ Ulasan berhasil dikirim! Terima kasih atas ulasan Anda.',
                          -1,
                        ),
                      ])),
                  ]))
                : I('', !0),
            ]),
          ])
        )
      )
    },
  }),
  $t = {},
  Bt = { class: 'animate-pulse space-y-8' },
  It = { class: 'grid grid-cols-1 lg:grid-cols-2 gap-8' },
  At = { class: 'grid grid-cols-4 gap-4 mt-4' },
  Ct = { class: 'space-y-6' },
  Pt = { class: 'space-y-3' },
  Rt = { class: 'flex gap-3' },
  Mt = { class: 'space-y-4 pt-8 border-t border-gray-100' },
  Ut = { class: 'space-y-2 py-4' },
  jt = { class: 'space-y-6 pt-8 border-t border-gray-100' },
  Dt = { class: 'space-y-6' }
function St(P, s) {
  return (
    r(),
    a('div', Bt, [
      e('div', It, [
        e('div', null, [
          s[0] ||
            (s[0] = e('div', { class: 'aspect-square w-full bg-gray-200 rounded-lg' }, null, -1)),
          e('div', At, [
            (r(),
            a(
              A,
              null,
              C(4, (n) => e('div', { key: n, class: 'aspect-square bg-gray-200 rounded-lg' })),
              64,
            )),
          ]),
        ]),
        e('div', Ct, [
          s[2] ||
            (s[2] = E(
              '<div class="h-8 bg-gray-200 rounded w-3/4"></div><div class="space-y-2"><div class="h-4 bg-gray-200 rounded w-full"></div><div class="h-4 bg-gray-200 rounded w-5/6"></div><div class="h-4 bg-gray-200 rounded w-4/6"></div></div><div class="h-10 bg-gray-200 rounded w-1/3"></div>',
              3,
            )),
          e('div', Pt, [
            s[1] || (s[1] = e('div', { class: 'h-6 bg-gray-200 rounded w-1/4' }, null, -1)),
            e('div', Rt, [
              (r(),
              a(
                A,
                null,
                C(3, (n) => e('div', { key: n, class: 'h-12 w-24 bg-gray-200 rounded-lg' })),
                64,
              )),
            ]),
          ]),
          s[3] ||
            (s[3] = E(
              '<div class="space-y-3"><div class="h-6 bg-gray-200 rounded w-1/4"></div><div class="flex items-center gap-3"><div class="h-10 w-10 bg-gray-200 rounded-lg"></div><div class="h-10 w-16 bg-gray-200 rounded-lg"></div><div class="h-10 w-10 bg-gray-200 rounded-lg"></div></div></div><div class="flex gap-3 pt-4"><div class="h-14 flex-1 bg-gray-200 rounded-lg"></div><div class="h-14 flex-1 bg-gray-200 rounded-lg"></div></div>',
              2,
            )),
        ]),
      ]),
      e('div', Mt, [
        s[4] ||
          (s[4] = e(
            'div',
            { class: 'flex gap-8 border-b border-gray-200 pb-4' },
            [
              e('div', { class: 'h-6 w-32 bg-gray-200 rounded' }),
              e('div', { class: 'h-6 w-32 bg-gray-200 rounded' }),
            ],
            -1,
          )),
        e('div', Ut, [
          (r(),
          a(
            A,
            null,
            C(3, (n) => e('div', { key: n, class: 'h-4 bg-gray-200 rounded w-full' })),
            64,
          )),
        ]),
      ]),
      e('div', jt, [
        s[6] || (s[6] = e('div', { class: 'h-8 w-48 bg-gray-200 rounded' }, null, -1)),
        e('div', Dt, [
          (r(),
          a(
            A,
            null,
            C(2, (n) =>
              e('div', { key: n, class: 'flex gap-4' }, [
                ...(s[5] ||
                  (s[5] = [
                    E(
                      '<div class="h-12 w-12 bg-gray-200 rounded-full flex-shrink-0"></div><div class="flex-1 space-y-2"><div class="h-4 w-1/4 bg-gray-200 rounded"></div><div class="h-4 w-1/6 bg-gray-200 rounded"></div><div class="h-4 w-full bg-gray-200 rounded"></div></div>',
                      2,
                    ),
                  ])),
              ]),
            ),
            64,
          )),
        ]),
      ]),
    ])
  )
}
const Tt = Q($t, [['render', St]]),
  Ft = { class: 'min-h-screen bg-gray-50' },
  Lt = { class: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8' },
  Nt = { key: 0 },
  Et = { key: 1, class: 'bg-red-50 border border-red-200 rounded-lg p-6 text-center' },
  zt = { class: 'text-red-600 mb-4' },
  Vt = { key: 2, class: 'space-y-8' },
  Ht = { class: 'grid grid-cols-1 lg:grid-cols-2 gap-8' },
  Gt = { class: 'lg:sticky lg:top-8 self-start' },
  Ot = { key: 3, class: 'text-center py-20 text-gray-500' },
  L = 10,
  Jt = T({
    __name: 'DetailProduct',
    setup(P) {
      const s = se(),
        n = w(null),
        g = w([]),
        i = w(!0),
        u = w(null),
        k = w(1),
        f = w(!1),
        p = w(!1),
        y = async () => {
          ;((i.value = !0), (u.value = null), (k.value = 1))
          try {
            const c = Number(s.params.id)
            if (isNaN(c) || c <= 0) throw new Error('ID Produk tidak valid')
            const [h, B] = await Promise.all([re(c), O(c, 1, L)])
            if (!h.data) throw new Error('Produk tidak ditemukan.')
            n.value = h.data
            const R = B.data || []
            ;((g.value = R), (f.value = R.length === L))
          } catch (c) {
            ;(console.error('❌ Error loading product:', c),
              c.response && c.response.status === 404
                ? (u.value = 'Produk tidak ditemukan.')
                : c instanceof Error
                  ? (u.value = c.message)
                  : (u.value = 'Terjadi kesalahan saat memuat data.'),
              (c.response && c.response.status === 404) || (n.value = null),
              (g.value = []))
          } finally {
            i.value = !1
          }
        },
        _ = async () => {
          if (p.value || !f.value || !n.value?.produkId) return
          p.value = !0
          const c = k.value + 1
          try {
            const B = (await O(n.value.produkId, c, L)).data || []
            B.length > 0
              ? ((g.value = [...g.value, ...B]), (k.value = c), B.length < L && (f.value = !1))
              : (f.value = !1)
          } catch (h) {
            console.error('Error loading more reviews:', h)
          } finally {
            p.value = !1
          }
        }
      return (
        ae(() => {
          y()
        }),
        q(
          () => s.params.id,
          (c, h) => {
            const B = Number(c)
            c && c !== h && !isNaN(B) && B > 0 && y()
          },
        ),
        (c, h) => (
          r(),
          a('div', Ft, [
            h[2] ||
              (h[2] = e(
                'div',
                { class: 'bg-white shadow-sm' },
                [
                  e('div', { class: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6' }, [
                    e('h1', { class: 'text-2xl font-bold text-gray-900' }, ' Detail Produk '),
                  ]),
                ],
                -1,
              )),
            e('div', Lt, [
              i.value
                ? (r(), a('div', Nt, [D(Tt)]))
                : u.value
                  ? (r(),
                    a('div', Et, [
                      h[0] ||
                        (h[0] = e(
                          'svg',
                          {
                            class: 'mx-auto h-12 w-12 text-red-400 mb-4',
                            fill: 'none',
                            viewBox: '0 0 24 24',
                            stroke: 'currentColor',
                          },
                          [
                            e('path', {
                              'stroke-linecap': 'round',
                              'stroke-linejoin': 'round',
                              'stroke-width': '2',
                              d: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z',
                            }),
                          ],
                          -1,
                        )),
                      h[1] ||
                        (h[1] = e(
                          'h3',
                          { class: 'text-lg font-medium text-red-800 mb-2' },
                          'Gagal Memuat Data',
                          -1,
                        )),
                      e('p', zt, v(u.value), 1),
                      e(
                        'button',
                        {
                          onClick: y,
                          class:
                            'bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors',
                        },
                        ' Coba Lagi ',
                      ),
                    ]))
                  : n.value
                    ? (r(),
                      a('div', Vt, [
                        e('div', Ht, [
                          e('div', Gt, [D(ge, { product: n.value }, null, 8, ['product'])]),
                          e('div', null, [D(je, { product: n.value }, null, 8, ['product'])]),
                        ]),
                        D(Fe, { product: n.value }, null, 8, ['product']),
                        D(
                          _t,
                          {
                            product: n.value,
                            reviews: g.value,
                            'has-more': f.value,
                            onLoadMore: _,
                            onReviewAdded: y,
                          },
                          null,
                          8,
                          ['product', 'reviews', 'has-more'],
                        ),
                      ]))
                    : (r(), a('div', Ot, ' Produk tidak ditemukan. ')),
            ]),
          ])
        )
      )
    },
  })
export { Jt as default }
