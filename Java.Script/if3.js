let a = prompt("sonni kiriting iltimos:");

if (a > 0) {
  a = a * 1;
  document.write(a + 1);
} else if (a < 0) {
  document.write(a - 2);
} else {
  document.write(10);
}
