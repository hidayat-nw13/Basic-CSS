// inisialisasi objek
const obj = { 'a': 1, 'b': 2, 'c': 3 };
// inisialisasi Map
let map = new Map();

// menambahkan data
map.set('ini', 'halo', 'dunia');
map.set(1, 'satu');
map.set(obj, 'lho ini bisa?');

// mengakses data
console.log(map.get("ini"));