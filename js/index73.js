let n = 1;
let i = 14 ;
let s = '';
while (i >= n) {
     let c = 1;
     s = ''
     while (c <= i) {
        s =  s + '*';
         c++;
     }
     console.log(s);
     i--;
}