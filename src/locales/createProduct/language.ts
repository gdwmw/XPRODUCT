export { locale };

const locale = [
  //Inggris
  {
    header: {
      title: "Create Product",
      desc: "Below is an example form built entirely with Tailwind form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
      button: { b1: "LANDING PAGE", b2: "LOGOUT" },
    },
    main: {
      title: "Detail Product",
      input: {
        i1: "Product Name :",
        i2: { label: "Product Category :", option: "Select" },
        i3: {
          label: "Product Freshness :",
          option: ["Brand New", "Second Hand", "Refurbished"],
        },
        i4: "Image of Product :",
        i5: "Additional Description :",
        i6: "Product Price :",
      },
      warning: {
        w1: "Minimum 6 characters!",
        w2: "Maximum 25 characters!",
        w3: "Please select one of the options!",
        w4: "Can not be empty!",
      },
      button: { b1: "Generate Random Price", b2: ["Submit", "Edit"] },
      confirm: "Please complete the ongoing data editing process!",
      search: "Search by Product Name :",
      table: {
        label: "List of Products :",
        header: ["Name", "Category", "Freshness", "Image", "Description", "Price", "Action"],
        button: {
          b1: "Edit",
          b2: "Delete",
        },
        confirm: "Are you sure you want to delete this data?",
      },
    },
    footer: {
      copyright: "© 2023 Gede Dewo Wahyu M.W. All rights reserved.",
    },
  },

  // Indonesia
  {
    header: {
      title: "Buat Produk",
      desc: "Di bawah ini adalah contoh formulir yang dibangun sepenuhnya dengan kontrol formulir Tailwind. Setiap kelompok formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
      button: { b1: "HALAMAN ARAHAN", b2: "KELUAR" },
    },

    main: {
      title: "Detail Produk",
      input: {
        i1: "Nama Produk:",
        i2: { label: "Kategori Produk:", option: "Pilih" },
        i3: {
          label: "Kesegaran Produk:",
          option: ["Baru", "Bekas", "Diperbaharui"],
        },
        i4: "Gambar Produk:",
        i5: "Deskripsi Tambahan:",
        i6: "Harga Produk:",
      },
      warning: {
        w1: "Minimal 6 karakter!",
        w2: "Maksimal 25 karakter!",
        w3: "Silakan pilih salah satu opsi!",
        w4: "Tidak boleh kosong!",
      },
      button: { b1: "Buat Harga Acak", b2: ["Kirim", "Ubah"] },
      confirm: "Silakan selsaikan proses pengeditan data yang sedang berlangsung!",
      search: "Cari berdasarkan Nama Produk:",
      table: {
        label: "Daftar Produk:",
        header: ["Nama", "Kategori", "Kesegaran", "Gambar", "Deskripsi", "Harga", "Aksi"],
        button: {
          b1: "Ubah",
          b2: "Hapus",
        },
        confirm: "Apakah Anda yakin ingin menghapus data ini?",
      },
    },

    footer: {
      copyright: "© 2023 Gede Dewo Wahyu M.W. Seluruh hak cipta dilindungi.",
    },
  },
];
