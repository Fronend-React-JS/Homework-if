let a = prompt("birinchi sonni kiriting")
let b = prompt("ikkinchi sonni kiriting")
let c = prompt("uchinchi sonni kiriting")

a = a * 1;
b = b * 1;
c = c * 1;

if (a == b && b == c ) {
    document.write("hammasi  bir biriga teng ");
} else if (a > b && b > c ) {
    document.write("siz kiritgan sonlar o'rtachasi bu" + " " + b)
} else if (a > b && b < c && a > c) {
    document.write("siz kiritgan sonlar o'rtachasi bu" + " " + c)
} else if (a < b && b > c && a > c) {
    document.write("siz kiritgan sonlar o'rtachasi bu" + " " + a)
} else if (a < b && b < c ) {
    document.write("siz kiritgan sonlar o'rtachasi bu" + " " + b)
}