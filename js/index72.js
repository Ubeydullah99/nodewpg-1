let n = 14;
let i = 1 ;
let s = '';
while (i <= n) {
     let c = 1;
     s = ''
     while (c <= i) {
        s =  s + '*';
         c++;
     }
     console.log(s);
     i++;
}