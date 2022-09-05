export default function googoodan(arr, num1, num2) {
  // let multiplyCounter = 0;
  for(let i = 1; i <= num1; i++) {
    for(let j=1; j <= num2; j++) {
      multiplyCounter++
      arr.push(`${i} x ${j} = ${i*j}`)
    }
  }
}