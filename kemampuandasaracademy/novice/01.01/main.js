var siteName="helloword";
var angkaSaya=1234;
siteName="hellojogja"
angkaSaya=5678
console.log(siteName,angkaSaya);

//tipe data string
const barangDijual="motorhonda";
const hargaBarang=1500;
console.log(hargaBarang,barangDijual);

console.log("variabelstring&intergen............................");

//tipe data number&operator
const a = 9;
const b = 2;
const c = a+b 
const d = a-b
const e = a*b
const f = a**b
const g = a/b
const h = a%b
console.log(c,d,e,f,g,h);

const lebihkecil = e < a;
console.log(lebihkecil);
const lebihbesar = a > d ;
console.log(lebihbesar);

// type data langsung
console.log(a > b);
console.log(b < c);
console.log('rumah' != 'jalan');
console.log('car' == 'mobil');

// pertanyaan

const namaKades = 'Sugiono';
const namaCamat = 'Agus';
const jabatan ='KADES'

if (jabatan == 'KADES') {
    console.log(namaCamat);
} else {
    console.log(namaCamat);
}

const apakahBoss = true;
const apakahMiniBoss = false;

if (apakahBoss && apakahMiniBoss) {
    console.log('NaikLevel');
} else 
{ console.log('MasihCupu');
}

console.log("bolean............................");

//type array tersambungan

var buah = ["pisang,semangka,apel"];
buah.push("pasarbuah");
console.log(buah);
var sayur =['kakung,bayem,kol'];
sayur.push('pasarsayur')
console.log(sayur);
var kerjasama = buah. concat(sayur);
console.log(kerjasama);

// intergral var
var number =['5,8,7,9'];
number. push('4');
console.log(number);
var kerjasama2 = buah. concat (sayur,number);
console.log(kerjasama2);

// kasus stok barang 

var stokbuah= ['apel,semangka'];
stokbuah .push ('stok 2');
console.log(stokbuah);

var stoksayur= ['kol,bayem'];
stoksayur .push ('stok 3')
console.log(stoksayur);
var stok = stokbuah. concat (stoksayur);
console.log(stok);

var stoklamabuah = 2;
var stoklamasayur= 3;
var totalstoklama= (stoklamabuah + stoklamasayur);
var keterangan=('sisabarang');
console.log(keterangan,totalstoklama);

var penambahanbuah= 5;
var penambahansayur= 7;
var saletotal = 2;
var tambahstok = (penambahanbuah+penambahansayur-saletotal)  
var laporan=(totalstoklama+tambahstok)
var keterangan2=('sisabarang');
console.log(laporan,keterangan2);

console.log("kasusarray............................");


// type objek
var gedung ={type:'gedung miring' ,color:'yellow',subjek:'karena butuh', price:'5000'};
console.log(`dijual ${gedung.type} warna ${gedung.color} dijual ${gedung.subjek} harga cuman ${gedung.price}`);
console.log(`${gedung.color}`);
console.log(gedung.color);

var gedungbaru = [
    {
        absen : 1,
        nama : 'eko',
        jurusan : 'ipa',
    },
    {
        absen : 2,
        nama : 'adi',
        jurusan : 'ips',
    },
    {
        absen : 3,
        nama : 'eke',
        jurusan : 'mm',
    },
]; 
 
for (let index = 0; index < gedungbaru.length; index++) {
    const element = gedungbaru[index];
    console.log(element.nama);
}

    for (let index = 0; index < gedungbaru.length; index++) {
        const element = gedungbaru[index];
        console.log(element);
        
    }
    console.log("objek............................");

var nilai= 75;
 if (nilai >= 85) {
    console.log('rapotA+');
 }else if (nilai >= 74){
    console.log('rapotB'); 
    }else if (nilai >= 65) {
            console.log('rapotC');   
    }else if (nilai >= 75) {
            console.log('rapotSANGATBAGUS');    
    } else {
            console.log('tidaklulus'); 
    }

let rapot = 74;
if (rapot >= 85) {
  console.log("memenuhi KKM");
} else if (rapot >= 75) {
  console.log("sedikit memuaskan");
} else if (rapot >= 60) {
  console.log("kurang memuaskan");
} else {
  console.log("tidak lulus");
}

