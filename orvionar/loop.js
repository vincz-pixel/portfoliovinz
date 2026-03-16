for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// print reverse
for(let i=10; i>=1; i--){
    console.log(i);
}

// print even num
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//print odd num
for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
// print sum num
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i; 
}
console.log(sum);

// print multiplication
let num = 5;
console.log(`Multiplication Table for ${num}:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}

// factorical num
