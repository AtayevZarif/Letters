let text = prompt("Ismingizni kiriting");
let text2 = prompt("Bironta harf kiriting")
let upper = text.toUpperCase()
let lower = text.toLowerCase()
let check = upper.includes(text2)
let check2 = lower.includes(text2)

if (check || check2){
    alert("Bu harf mavjud")
}else {
    alert("Bu harf mavjud emas")
}