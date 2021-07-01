let num = [2,4,6,7,9,5]
num.sort()
num.push(10)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do verto é ${num[0]}`)

let pos = num.indexOf(5)
if(pos == -1){  
console.log(`O valor não foi encontrado!`)
}else{
    console.log(`O valor 5 está na posição ${pos}`)
}
