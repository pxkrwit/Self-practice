// 1.สร้าง array ที่ชื่อ colors เก็บชื่อสีอย่างน้อย 5 สี จากนั้นพิมพ์ความยาวของ array และพิมพ์สีแรกกับสีสุดท้ายออกมา
let colors = ['red','blue','yellow','green','orange']
console.log(colors.length)
console.log(colors[0])
console.log(colors[colors.length - 1])



// 2.สร้าง array ที่มีข้อมูลหลายประเภท (string, number, boolean, null) จากนั้นใช้ push เพิ่ม object { type: "mixed" } และ array ['extra1','extra2'] เข้าไป แล้วพิมพ์ array ทั้งหมด
let arr1 = ["heelo" , 59 , true , null]
arr1.push({ type: "mixed" },['extra1','extra2'])
console.log(arr1)



// 3.เขียนโค้ดลบสมาชิกสุดท้ายของ array students แล้วพิมพ์ array หลังจากลบ
let arr2 = ['Tan','Arm','March','Nena','Win']
arr2.pop()
console.log(arr2)



// 4.ให้ string "JavaScript" สร้าง array ใหม่ชื่อ letters โดยใช้ Spread operator (...) และพิมพ์ array นั้น
let arr3 = "JavaScript"
let letters = [...arr3]
console.log(letters)



// 5.เขียนฟังก์ชัน printFirstAndLast(arr) ที่รับ array มา 1 ตัว แล้วพิมพ์ค่าแรกกับค่าสุดท้ายของ array นั้น
function printFirstAndLast(arr) {
    if (arr.length === 0) {
        console.log("Empty")
        return
    }
    console.log("First :", arr[0])
    console.log("Last :", arr[arr.length - 1])
}
printFirstAndLast([10, 20, 30, 40, 50])
printFirstAndLast(["apple", "banana", "cherry"])
printFirstAndLast([])