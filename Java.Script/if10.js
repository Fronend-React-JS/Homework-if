let a = prompt("birinchi sonni kiriting:");
let b = prompt("ikkinchi sonni kiriting:");
a = a * 1;
b = b * 1;

if (a > b) {
    document.write(a + b + " " + "Siz kiritgan sonlar o'zaro teng emas shuning uchun ularni bir biriga qo'shdim:");
} else if ( a == b) {
    document.write(0 + " " + "Siz kiritgan sonlar o'zaro teng ekanligi uchun ularni 0 ga tenlab oldim:")
}

if (b > a) {
    document.write(a + b + " " + "Siz kiritgan sonlar o'zaro teng emas shuning uchun ularni bir biriga qo'shdim:");
}