// // selain mengurutkan buku berdasarkan kategori, ia juga ingin mengurutkan tinggi buku. Selain itu ia hanya membolehkan maksimal 2 eksemplar buku yang sama berada di rak, selebihnya disimpan di gudang penyimpanan. Buku yang diprioritaskan untuk dipajang di rak adalah buku yang paling tinggi ukurannya

// // format karakter pertama -> kategori buku
// //                 kedua -> judul buku
// // sisa karakter -> bilangan bulat dari tinggi buku dalam sentimeter

const categoriesBook = [
  { bookId: 6, bookName: "Applied Sciences (600)" },
  { bookId: 7, bookName: "Arts (700)" },
  { bookId: 0, bookName: "General (000)" },
  { bookId: 9, bookName: "Geography, History (900)" },
  { bookId: 4, bookName: "Language (400)" },
  { bookId: 8, bookName: "Literature (800)" },
  { bookId: 1, bookName: "Philosophy, Psychology (100)" },
  { bookId: 2, bookName: "Religion (200)" },
  { bookId: 5, bookName: "Science, Math (500)" },
  { bookId: 3, bookName: "Social Sciences (500)" },
];

function sortingBooks(str) {
  const arr = str.split(" ");

  let tampung = [];
  for (let i = 0; i < arr.length; i++) {
    const kId = arr[i].substr(0, 1);
    const kTitle = arr[i].substr(1, 1);
    const kHeight = arr[i].substr(2);
    const objBooks = {
      kId,
      kTitle,
      kHeight,
    };
    tampung.push(objBooks);
  }

  for (let i = 0; i < tampung.length; i++) {
    let min = i;
    console.log(min);

    for (let j = i + 1; j < tampung.length; j++) {
      console.log(j);
      console.log(categoriesBook[j]);

      // if (tampung[i].kId === categoriesBook[j].bookId) {
      //   console.log(categoriesBook[i]);
      //   console.log(tampung[min]);
      // }
    }
  }
}

console.log(
  sortingBooks(
    "3A13 5X19 9Y20 2C18 1N20 3N20 1M21 1F14 9A21 3N21 0E13 5G14 8A23 9E22 3N14"
  ),
  "0E13 9E22 9A21 9Y20 8A23 1M21 1N20 1F14 2C18 5X19 5G14 3N21 3N20 3A13"
);
// module.exports = sortingBooks;
