function logika() {
  let angkaRandom = [];
  let angkaGenap = [];
  let angkaGanjil = [];

  for (let i = 0; i < 100; i++) {
    let randomAngka = Math.floor(Math.random() * 50) + 1;
    angkaRandom.push(randomAngka);
    if (randomAngka % 2 === 0) {
      angkaGenap.push(randomAngka);
    } else {
      angkaGanjil.push(randomAngka);
    }
  }
  return {
    angkaRandom: angkaRandom,
    angkaGenap: angkaGenap,
    angkaGanjil: angkaGanjil,
  }
}logika();
const { angkaRandom, angkaGenap, angkaGanjil } = logika();
function angka50() {
  console.log("array berisi 50 angka acak isi 1 - 100:");
  console.log(angkaRandom);
  console.log("");
}
function arrayGenap() {
  console.log("ini adalah array genap :");
  console.log(angkaGenap);
  console.log("");
}
function arrayGanjil() {
  console.log("ini adalah array ganjil :");
  console.log(angkaGanjil);
}
function cariMax(arr) {
  let max = [0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; // Update max
    }
  }
  return max;
}
function cariMin(arr) {
  let min = [100];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]; //update min
    }
  }
  return min;
}
function MinMaxGanjil(arr) {
  console.log("nilai Max dari array angka ganjil :" + cariMax(arr));
  console.log("nilai Min dari array angka ganjil :" + cariMin(arr));
}
function MinMaxGenap(arr) {
  console.log("nilai Max dari array angka genap :" + cariMax(arr));
  console.log("nilai Min dari array angka genap :" + cariMin(arr));
}
function totalNonlog(arr) {
  let total = 0;
  for (let i = 1; i < arr.length; i++) {
    total = total + arr[i];
  }
  return total;
}
function cariTotal(arr) {
  let total1 = totalNonlog(arr);
  return total1;
}
function Rata2Ganjil(arr) {
  let total = totalNonlog(arr);
  let rata2 = total / arr.length;
  return rata2
}
function Rata2Genap(arr) {
  let total = totalNonlog(arr);
  let rata2 = total / arr.length;
  return rata2
}
function bandingMax() {
  if (cariMax(angkaGanjil) > cariMax(angkaGenap)){
    console.log("MAX lebih besar array Ganjil. nilainya:" + cariMax(angkaGanjil));
  } else if (cariMax(angkaGanjil) < cariMax(angkaGenap)){
    console.log("MAX lebih besar array Genap. nilainya:" + cariMax(angkaGenap));
  } else if (cariMax(angkaGanjil) === cariMax(angkaGenap)){
    console.log("MAX array genap dan ganjil : SAMA");
 }}
function bandingMin() {
  if (cariMin(angkaGanjil) > cariMin(angkaGenap)){
    console.log("MIN lebih besar array Ganjil. nilainya:" + cariMin(angkaGanjil));
  } else if (cariMin(angkaGanjil) < cariMin(angkaGenap)){
    console.log("MIN lebih besar array Genap. nilainya:" + cariMin(angkaGenap));
  } else if (cariMin(angkaGanjil) === cariMin(angkaGenap)){
    console.log("MIN array genap dan ganjil : SAMA");
 }}
function bandingTotal() {
  if (cariTotal(angkaGanjil) > cariTotal(angkaGenap)){
    console.log("TOTAL lebih besar array Ganjil. nilainya:" + cariTotal(angkaGanjil));
  } else if (cariTotal(angkaGanjil) < cariTotal(angkaGenap)){
    console.log("TOTAL lebih besar array Genap. nilainya:" + cariTotal(angkaGenap));
  } else if (cariTotal(angkaGanjil) === cariTotal(angkaGenap)){
    console.log("TOTAL array genap dan ganjil : SAMA");
 }}
function bandingRata2() {
  if (Rata2Ganjil(angkaGanjil) > Rata2Genap(angkaGenap)){
    console.log("RATA2 lebih besar array Ganjil. nilainya:" + Rata2Ganjil(angkaGanjil));
  } else if (Rata2Ganjil(angkaGanjil) < Rata2Genap(angkaGenap)){
    console.log("RATA2 lebih besar array Genap. nilainya:" + Rata2Genap(angkaGenap));
  } else if (Rata2Ganjil(angkaGanjil) === Rata2Genap(angkaGenap)){
    console.log("RATA2 array genap dan ganjil : SAMA");
 }}
function outputSemua() {
  angka50();
  arrayGenap();
  arrayGanjil();
  MinMaxGanjil(angkaGanjil);
  MinMaxGenap(angkaGenap);
  console.log(`rata rata dari array ganjil : ${Rata2Ganjil(angkaGanjil)}`);
  console.log(`rata rata dari array genap : ${Rata2Genap(angkaGenap)}`);
  console.log(`total dari ganjil : ${cariTotal(angkaGanjil)}`);
  console.log(`total dari genap : ${cariTotal(angkaGenap)}`);
  console.log("");
  console.log("---Perbandingan---");
  bandingMax()
  bandingMin()
  bandingTotal()
  bandingRata2()  
}


//Output
outputSemua();
