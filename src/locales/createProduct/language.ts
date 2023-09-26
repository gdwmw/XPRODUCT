export { locale };

const locale = [
  // Indonesia
  {
    title: "Detil Produk",
    labelInput01: "Nama Produk :",
    labelInput02: { label: "Kategori Produk :", option: "Pilih..." },
    labelInput03: {
      label: "Kesegaran Produk",
      option: ["Barang Baru", "Tangan Kedua", "Diperbaharui"],
    },
    labelInput04: "Gambar Produk",
    labelInput05: "Deskripsi Tambahan :",
    labelInput06: "Harga Produk :",
    warning01: `"Nama Produk" minimal 6 karakter!`,
    warning02: `"Nama Produk" maksimal 25 karakter!`,
    warning03: "Silakan pilih salah satu opsi!",
    warning04: "Tidak boleh kosong!",
    button01: "Hasilkan Harga Acak",
    button02: "Kirim",
    table: {
      label: "Daftar Produk",
      header: ["Nama Produk", "Kategori", "Kesegaran", "Gambar", "Deskripsi Tambahan", "Harga", "Aksi"],
      button01: "Detail",
      button02: "Hapus",
      alert: "Apakah Anda yakin ingin menghapus data ini?",
    },
    search: "Cari berdasarkan Nama Produk :",
  },

  //Inggris
  {
    title: "Detail Product",
    labelInput01: "Product Name :",
    labelInput02: { label: "Product Category : :", option: "Choose..." },
    labelInput03: {
      label: "Product Freshness",
      option: ["Brand New", "Second Hand", "Refurbished"],
    },
    labelInput04: "Image of Product",
    labelInput05: "Additional Description :",
    labelInput06: "Product Price :",
    warning01: `"Product Name" minimum 6 characters!`,
    warning02: `"Product Name" maximum 25 characters!`,
    warning03: "Please select one of the options!",
    warning04: "Can not be empty!",
    button01: "Generate Random Price",
    button02: "Submit",
    table: {
      label: "List of Products",
      header: ["Product Name", "Category", "Freshness", "Image", "Additional Description", "Price", "Action"],
      button01: "Detail",
      button02: "Delete",
      alert: "Are you sure you want to delete this data?",
    },
    search: "Search by Product Name :",
  },
];
