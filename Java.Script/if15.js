let a = prompt("birinchi sonni kiriting")
let b = prompt("ikkinchi sonni kiriting")
let c = prompt("uchinchi sonni kiriting")

a = a * 1;
b = b * 1;
c = c * 1;

if (a == b && b == c ) {
    document.write("Hammasi tendur shuniyam bilmaysanmi");

} 
else if (a > b && b > c) {
    document.write("siz kiritgan sonlar orasida eng o'rtachasi bu" + " " + b + " " + "eng kattasi esa" + " " + a + " " + "ularning yig'indisi" + " " + Number(b + a) + " " + "ga teng" )
} 
else if (a > b && b < c && c > a) {
    document.write("siz kiritgan sonlar orasida eng o'rtachasi bu" + " " + a + " " + "eng kattasi esa" + " " + c + " " + "ularning yig'indisi" + " " + Number(a + c) + " " + "ga teng")
} 
else if (a < b && b > c && b > a) {
    document.write("siz kiritgan sonlar orasida eng o'rtachasi bu" + " " + c + " " + "eng kattasi esa" + " " + b + " " + "ularning yig'indisi" + " " + Number(b + c) + " " + "ga teng")
} 
 else if (a < b && b > c && b > a) {
    document.write("siz kiritgan sonlar orasida eng o'rtachasi bu" + " " + c + " " + "eng kattasi esa" + " " + b + " " + "ularning yig'indisi" + " " + Number(b + c) + " " + "ga teng")
} 
else if (a < b && b < c && a < c) {
    document.write("siz kiritgan sonlar orasida eng o'rtachasi bu" + " " + b + " " + "eng kattasi esa" + " " + c + " " + "ularning yig'indisi" + " " + Number(b + c) + " " + "ga teng")
}
else if (a > b && b < c && a > c) {
    document.write("siz kiritgan sonlar orasida eng o'rtachasi bu" + " " + c + " " + "eng kattasi esa" + " " + a + " " + "ularning yig'indisi" + " " + Number(c + a) + " " + "ga teng")
} 
