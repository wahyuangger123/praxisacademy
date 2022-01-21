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

console.log("operator............................");

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

var harga = 80;

if (harga >=85) {
 console.log('bisadibeli');
} else if (harga >=76) {
    console.log('hargakurang');
}

console.log("type kondisian if else............................");

var mobil = ["kijang,jazz"];
var motor = ["bet,scopy"];
var sepeda =["polygon,bmx"];
console.log(mobil.concat (motor,sepeda));

var oke =10;
if (oke >=11) {
  console.log('HARI ELSE');
} else if (oke >=10){
  console.log('HARI FALSE');
} else{ 
  console.log('Hari ini');
}

var iya =10;

if (iya >=12) {
  console.log('iya lebih');
} else if(iya >=9)
  console.log('SIP');



  var minggu =8;
  switch (minggu) {
    case 8:
      console.log('OKE');
      break;
      case 7:
      console.log('SALAH');
      break;
  
    default:
      break;
  }

console.log("type kondisian switch............................");

var hari = new Date().getDay();
console.log(hari);
var harisekarang= 2;
for (let i= 0; i <= hari; i++)
{
  switch (i) {
    case 1:
      console.log('senen');
      break;
    case 2:
      console.log('selasa');
      break;
    case 3:
      console.log('rabu');
      break;
    default:
      break;
  }
}

console.log("type looping for............................");


const barangss =["ubin", "kayu", "api", "lampu", "tembok"];
var barangsya = "";
  for (const barangg of barangss){
    barangsya += barangg;
  }
  console.log(barangsya);

var text='';
var i = 0;
while (i < barangss.length) {
  text += 'nama-nama barangg' + barangss[i] + '\n';
  i++;
}
console.log(text);

var txt="";
let j=2;

do {
  txt += 'nama-nama barangg' + barangss[j];
  j++;
} while (barangss[j]<5);
{
  console.log(txt);
}

var warung =["nasi","ayam","sayur","air"];
var test="";
for (var let =0; i<warung.length; i++){
  test +=warung[i];
}
console.log(test);

//////////////////////////////////////////////

const total = 10;
for (let i=0 ; i <total;i++){
  console.log(i+1);
}
const total2 = 10;
for (let i=0; i <total2;i++){
  console.log(i);
}
// soal 1 
// print : 
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// soal 2
// print : 
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7

function bilangan() {
  var x = 15;
  var y = 15;
  if (x === y) {
    console.log('angka yang sama');
  } else {
    console.log('angka yang tidak');
  }
}
bilangan ();

function dibagidua(x) {
  if (x % 2 === 15) {
    console.log('bilangan genap');
  } else {
    console.log('bilangan ganjil');
  }
}
dibagidua (15);

function bilangan1(x){
  if (x >= 0) {
    console.log('Positif');
  } else {
    console.log('negatif');
  }
}
bilangan1 (15);
  
function  mengetahui(x) {
  if (x % 400 == 0) {
    console.log('kabisat tahun');
  } else if (x % 100 == 0) { 
    console.log('tidak kabisat');
  } else if (x % 4 == 0) {
    console.log('kabisat tahun');
  }else{
    console.log('tidak kabisat');
  } 
}
mengetahui(1600);

function vote(x) {
  if (x >= 22) {
    console.log('anda bisa memberikan suara');
  } else if (x <= 17) {
    console.log('anda tidak bisa memberikan suara');
  } else {
    console.log('anda bisa memberikan suara');
  }
}
vote (21);

function bilangancontoh(m ,n) {
  if (m !==0) 
  if (m >=0) {
  console.log((n=1));    
  } else if (m <=0){
    console.log((n=-1));
  }else{
    console.log((n=0));
  }
  }
bilangancontoh (-5);

function tinggibadan(x) {
  if (x <150){
    console.log('orangnyakurucaci');
  } else if ((x >=150) && (x<165)) { 
    console.log('orang tersebut memliki tinggi rata2');
  } else if ((x <= 165) && (x <= 195)) {
    console.log('orang itu lebih tinggi');
  } else{
    console.log('tinggi');
  }
}
tinggibadan (149);

function bilanganbesar(x,y,z) {
  if (x >= y) {
    console.log('Bilangan 1 adalah yang terbesar diantara ketiganya');
  } else if ((y > z) && (y > x)) {
    console.log('Bilangan ke-2 adalah yang terbesar diantara tiga');
  } else if ((z >= x) && (z >= y)) {
    console.log('Bilangan ke 3 adalah yang terbesar diantara ketiganya'); 
  }else{
  console.log('bilangan');
}
}

bilanganbesar(12,25,52);

function koordinat(x,y) {
  if ( x > 0 && y > 0 ) {
    console.log('terletak pada kuadran pertama');
  } else if (x < 0 && y > 0 ){
    console.log('terletak pada kuadran kedua');
  } else if (x < 0 && y < 0 ){
    console.log('terletak pada kuadran ketiga');
  }else if (x > 0 && y < 0 ){
    console.log('terletak pada kuadran ke empat');
  }else if (x == 0 && y == 0 ){
    console.log('terletak pada titik');
  }else{
    console.log('kordinat')
  }
}

koordinat(7,9);

function khrususpro(m,p,c) {
  if (m >= 60 && p >= 65 && c >=50) {
    if ((m+p+c)>=100 || (m+p)>=110) {
      console.log('Kandidat memenuhi syarat untuk masuk');
    } else {
      console.log('tdiak memenuhi syarat untuk masuk');
  }
}
    }
khrususpro (60,65,50);



var akar = (a,b,c) => {
var d;
var x1;
var x2;
  d=(b*b-4)*(a*c); 
  console.log(d);
  if (d==0) {
    console.log('kedua akar sama');
    x1=-b/(2.0*a);
    x2=x1;
    console.log(`akar 1 =${x1}`);
    console.log(`akar 2 =${x2}`);
  } else if (d < 0) {
    console.log('Kedua akar real dan diff-2');
    x1=(-b+sqrt(d))/(2*a);
    x2=(-b-sqrt(d))/(2*a);
    console.log(`akar 1 =${x1}`);
    console.log(`akar 2 =${x2}`);
} else{
console.log('Akar adalah imeainary&Tidak Ada Solusi');
}
};
akar (1,5,7);

// korek yg aku beli sama dengan harga 7000 itu murah, kalo korek yg aku beli sama dengan harga korek itu 10000 itu sedang,
// lebih dari itu mahal 

var korekYangAkuBeli = 6000

// ---------------------------------------------------------------------------------------------

// mobil yg aku beli sama dengan harga 7000 itu murah, kalo mobil yg aku beli sama dengan harga mobil itu 10000 itu sedang

var mobilYangAkuBeli = 6000
var korek1 = 6000
var korek2 = 7000
var korek3 = 10000
if (korek1 == korek2  ) {
  console.log('itu murah')
} else if (korek1 == korek3){
  console.log('itu sedang')
} else {
  console.log('lebih dari itu mahal');
}

var korek = 10001;
var korek2;
if (korek <= 7000) {
  // console.log('murah');
} else if (korek <= 10000) {
  // console.log('sedang');  
} else{
  // console.log('mahal');
}

const hargaKorek = (a, b) => {
  return a * b;
}

console.log(argaKorek(5, 7));

var mobil = 7000k;k

if (mobil < 7000) {
  console.log('murah');
} else if (mobil >= 7000) {
  console.log('sedang');
}

var siswa = (a, b, c) =>{
var id= 784;
var name = 'james';
var total = a + b + c ;
var jml = total / 3;
 console.log(`nosiswa: ${id}`);
 console.log(`namesiswa: ${name}`);
 console.log(`nilaifisika: ${a}`);
 console.log(`nilaikimia: ${b}`);
 console.log(`nilaikomputer: ${c}`);
 console.log(`total: ${total}`);
 console.log(`persen: ${jml}`);

 if (jml>=60) {
   console.log('pembagian:pertama');
 } else if (jml<60&&jml>=48) {
  console.log('pembagian:kedua');
 } else if (jml<48&&jml>=36) {
  console.log('pembagian:pas');
 } else {
   console.log('pembagian:fail');
 } 
};
siswa (70,80,90);

var suhu = (x) => {
    if (x < 0) {
      console.log('Cuaca dingin');
    } else if (x < 10){
      console.log('cuaca sangat dingin');
    } else if (x < 20){
      console.log('cuaca dingin');
    } else if (x < 30){
      console.log('suhu normal');
    } else if (x < 40){
      console.log('suhu panas');
    } else {
      console.log('panas sekali');
    }
}
suhu (42);

var segitiga = (a,b,c) => {
 if (a==b&&b==c) {
   console.log("Ini adalah segitiga sama sisi");
 } else if (a==b || a==c || b==c){
   console.log('Ini adalah segitiga sama kaki');
 } else {
   console.log('Ini adalah segitiga sama kaki');
 }
}
segitiga (50,50,60);


var memeriksa = (a,b,c) =>{
var hasil = a+b+c;

if (hasil ==180) {
  console.log('Segitiga ini benar');
} else {
  console.log('Segitiga ini salah');
}
}
memeriksa (40,55,65);


var datauji = (string,number) =>{
if (string == datauji){
    console.log('Ini adalah alfabet');  
} else if (number == datauji) {
  console.log('Ini adalah angka');
} else {
  console.log('Ini adalah karakter khusus');
}
}
datauji ('@');

var alfabet = (strg) => {
if (strg=='a' || strg=='e' || strg=='i' || strg=='o' || strg=='u') { 
  console.log('Kalimat ini diawali Huruf Vowel');
} else {
  console.log("Alfabet adalah konsonan");
}
}
alfabet ('k');

var dangan = (a,b,c) => {

if (a > b) {
  c = a-b;
  console.log(`hitung untung ${c}`);
} else if (b > a) {
  c = b-a;
  console.log(`hitung untung ${c}`);
} else {
  console.log('anda menjalankan dalam kondisi tidak untung tidak rugi');
}
}
dangan (500,700,200);

var siswa = (a,b,c) => {
  var tagihan;
  var totaltagihan;
  var total;

if (c < 200) {
  tagihan = 1.20;
} else if (c>= 200 && c<400) {
    tagihan = 1.50;
} else if (c >=400 && c<600) {
  tagihan = 1.80;
} else {
  tagihan = 2.00;
}
if (c > 300) {
  totaltagihan = c * tagihan * 0.15 ;
  total = c * tagihan + totaltagihan ;
} else {
  total = 100;
}
  console.log(`ID Pelanggan :${a}`);
  console.log(`Nama Pelanggan :${b}`);
  console.log(`yang Dikonsumsi :${c}`);
  console.log(`Jumlah Biaya adalah :@${tagihan} per unit`);
  console.log(`${total * tagihan} dengan tambahan ${totaltagihan}`);
  console.log(`Jumlah Bersih Dibayar Oleh Pelanggan ${total}`);
};
siswa (1001,'james',800);

var objek = (x) => {
  switch (x) {
    case 'e':
      console.log("bagus sekali");
      break;
      case 'v':
      console.log("baik sekali");
      break;
      case 'g':
      console.log("Biasa");
      break;
      case 'a':
      console.log("rata2");
      break;
      case 'f':
      console.log("gagal");
      break;
  
    default:
      break;
  }
}
objek ('a');


var hari = (x) => {
  switch (x) {
    case 1 :
      console.log("senen");
      break;
      case 2 :
      console.log("selasa");
      break;
      case 3 :
      console.log("rabu");
      break;
      case 4 :
      console.log("kamis");
      break;
      case 5 :
      console.log("jumat");
      break;
  
    default:
      break;
  }
}
hari (4);


var bulan = (x) => {
  switch (x) {
    case 1 :
      console.log("januari");
      break;
      case 2 :
      console.log("febuari");
      break;
      case 3 :
      console.log("maret");
      break;
      case 4 :
      console.log("april");
      break;
      case 5 :
      console.log("mei");
      break;
  
    default:
      break;
  }
}
bulan (4);

var bulanlagi =(x) => {

switch (x) {
  case 1:
	case 3:
	case 5:
	case 7:
	case 8:
	case 10:
	case 12:
    console.log('Bulan terdiri dari 31 hari');
    break;
  case 2:
    console.log('Bulan ke-2 adalah Februari dan memiliki 28 hari');
    console.log('Dalam tahun kabisat Bulan Februari memiliki 29 hari');
    break;
  case 4:
	case 6:
	case 9:
	case 11:
    console.log('Nomor Bulan salah.\nSilakan coba lagi ....');
  default:
    break;
}
}
bulanlagi (7);


var area
var luas = (x,r,l,w,b,h)=> {

switch (x) {
  case 1:
    area = 3.14*r*r;
    console.log(`luas area: ${area}`);
    break;
  case 2:
    area =l*w;
  console.log(`luas area: ${area}`);
    break;
  case 3:
    area =0.5*b*h;
    console.log(`luas area: ${area}`);
    break;
  default:
    break;
}
}
luas (1,5);

var hasil = (a,b,c) => {
  switch (c) {
    case 1:
      console.log(`jumlah : ${a,b,a+b}`);
      break;
      case 2:
        console.log(`jumlah : ${a,b,a-b}`);
        break;
        case 3:
        console.log(`jumlah : ${a,b,a*b}`);
        break;
    default:
      break;
  }
};
hasil (10,2,3)


