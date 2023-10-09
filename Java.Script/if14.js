let a = prompt("birinchi sonni kiriting")
let b = prompt("ikkinchi sonni kiriting")
let c = prompt("uchinchi sonni kiriting")

a = a * 1;
b = b * 1;
c = c * 1;

if (a == b && b == c ) {
    document.write("Kichigi yo'q");
} 
else if (a > b && b > c) {
    document.write("siz kiritgan sonlar orasida eng kichigi bu" + " " + c + " " + "eng kattasi esa" + a)
} 
else if (a > b && b < c && c > a) {
    document.write("siz kiritgan sonlar orasida eng kichigi bu" + " " + b + " " + "eng kattasi esa" + c)
} 
else if (a < b && b > c && b > a) {
    document.write("siz kiritgan sonlar orasida eng kichigi bu" + " " + a + " " + "eng kattasi esa" + b)
} 
 else if (a < b && b > c && b > a) {
    document.write("siz kiritgan sonlar orasida eng kichigi bu" + " " + a + " " + "eng kattasi esa" + b)
} 
else if (a < b && b < c && a < c) {
    document.write("siz kiritgan sonlar orasida eng kichigi bu" + " " + a + " " + "eng kattasi esa" + c)
}
else if (a > b && b < c && a > c) {
    document.write("siz kiritgan sonlar orasida eng kichigi bu" + " " + b + " " + "eng kattasi esa" + a)
} 