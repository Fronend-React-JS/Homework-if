let a = prompt("birinchi sonni kiriting")
let b = prompt("ikkinchi sonni kiriting")
let c = prompt("uchinchi sonni kiriting")

a = a * 1;
b = b * 1;
c = c * 1;

if (a > 0 && b > 0 && c > 0) {
    document.write("3 ta musbat");
} else if (a > 0 && b > 0 && c < 0) {
    document.write("2 ta musbat")
} else if (a > 0 && b < 0 && c > 0) {
    document.write("2 ta musbat")
} else if (a < 0 && b > 0 && c > 0) {
    document.write("2 ta musbat")
} else if (a > 0 && b < 0 && c < 0) {
    document.write("1 ta musbat")
} else if (a < 0 && b > 0 && c < 0) {
    document.write("1 ta musbat")
} else if (a < 0 && b < 0 && c > 0) {
    document.write("1 ta musbat")
} 