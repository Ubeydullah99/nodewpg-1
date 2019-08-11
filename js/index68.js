let i = 1;
let n = 100;
let r = [];
let d = 0;
while (i <= n) {
if ((i % 2) === 0) {
    r[d] = i;
    d++;
}
i++;
}
console.log(r);