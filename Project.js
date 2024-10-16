class Buku {
   constructor(judul, penulis, tahunTerbit, genre) {
     this.judul = judul;
     this.penulis = penulis;
     this.tahunTerbit = tahunTerbit;
     this.genre = genre;
   }
 }
 let perpustakaan = [];
 function tambahBuku(judul, penulis, tahunTerbit, genre) {
   const bukuBaru = new Buku(judul, penulis, tahunTerbit, genre);
   perpustakaan.push(bukuBaru);
   console.log("Buku berhasil ditambahkan!");
 }
 function tampilkanSemuaBuku() {
   if (perpustakaan.length === 0) {
     console.log("Perpustakaan masih kosong.");
   } else {
     console.log("Daftar Buku:");
     perpustakaan.forEach((buku, index) => {
       console.log(`${index + 1}. ${buku.judul} - ${buku.penulis} (${buku.tahunTerbit})`);
     });
   }
 }
 function editBuku(index, judulBaru, penulisBaru, tahunTerbitBaru, genreBaru) {
   if (index >= 0 && index < perpustakaan.length) {
     const buku = perpustakaan[index];
     buku.judul = judulBaru || buku.judul;
     buku.penulis = penulisBaru || buku.penulis;
     buku.tahunTerbit = tahunTerbitBaru || buku.tahunTerbit;
     buku.genre = genreBaru || buku.genre;
     console.log("Buku berhasil diedit!");
   } else {
     console.log("Index buku tidak valid.");
   }
 }
 function hapusBuku(index) {
   if (index >= 0 && index < perpustakaan.length) {
     perpustakaan.splice(index, 1);
     console.log("Buku berhasil dihapus!");
   } else {
     console.log("Index buku tidak valid.");
   }
 }

 
 // Menambahkan beberapa buku
tambahBuku("Belajar JavaScript", "John Doe", 2023, "Programming");
tambahBuku("The Lord of the Rings", "J.R.R. Tolkien", 1954, "Fantasy");

// Menampilkan semua buku
tampilkanSemuaBuku();

// Mengedit buku pertama
editBuku(0, "Menguasai JavaScript", "Jane Smith", 2024, "Programming");

// Menghapus buku kedua
hapusBuku(1);

// Menampilkan semua buku setelah perubahan
tampilkanSemuaBuku();