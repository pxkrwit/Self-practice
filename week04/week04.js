
// 1. map()
// โจทย์: ยกกำลังสองของทุกตัวเลข
// Input: [1, 2, 3, 4]
// Output: [1, 4, 9, 16]
// Input: [5, -2, 0]
// Output: [25, 4, 0]

function powerNumber(num) {
  return num.map( number => number ** 2)
}
// console.log(powerNumber([1, 2, 3, 4]))
// console.log(powerNumber([5, -2, 0]))

// -----------------------------------------------------

// 2. filter()
// โจทย์: คืนค่าเฉพาะเลขคู่
// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]
// Input: [7, 9, 11]
// Output: []

function evenNumber(num){
  return num.filter( number => number % 2 == 0)
}
// console.log(evenNumber([1, 2, 3, 4, 5, 6]))
// console.log(evenNumber([7, 9, 11]))

// -----------------------------------------------------

// 3. reduce()
// โจทย์: หาผลรวม
// Input: [1, 2, 3, 4]
// Output: 10
// Input: [10, -5, 7]
// Output: 12

function sumNumber(num){
  return num.reduce((total,cur) => cur + total , 0)
}
// console.log(sumNumber([1, 2, 3, 4]))
// console.log(sumNumber([10, -5, 7]))

// -----------------------------------------------------

// 4. find()
// โจทย์: หานักเรียนคนแรกที่ได้คะแนนมากกว่า 80

const student1 = [
  { name: "A", score: 85 },
  { name: "B", score: 72 },
  { name: "C", score: 90 }
];
// Output: { name: "A", score: 85 }

// อีกกรณี
const student2 = [
  { name: "X", score: 60 },
  { name: "Y", score: 70 }
];
// Output: undefined

function findGrade(grade){
  return grade.find( num => num.score > 80)
}
// console.log(findGrade(student1))
// console.log(findGrade(student2))

// -----------------------------------------------------

// 5. some()
// โจทย์: มีค่าติดลบหรือไม่
// Input: [1, 2, 3, -1]
// Output: true
// Input: [5, 10, 15]
// Output: false

function checkNegativeNumber(num){
  return num.some( num => num < 0)
}
// console.log(checkNegativeNumber([1, 2, 3, -1]))
// console.log(checkNegativeNumber([5, 10, 15]))

// -----------------------------------------------------

// 6. every()
// โจทย์: ทุกค่าบวกหรือไม่
// Input: [1, 2, 3, 4]
// Output: true
// Input: 
// Output: false

function checkAllPositiveNumber(num){
  return num.every( num => num > 0)
}
// console.log(checkAllPositiveNumber([1, 2, 3, 4]))
// console.log(checkAllPositiveNumber([2, -1, 5]))

// -----------------------------------------------------

// 7. sort()
// โจทย์: เรียงจากน้อยไปมาก
// Input: [5, 3, 8, 1]
// Output: [1, 3, 5, 8]
// Input: [10, -2, 7, 0]
// Output: [-2, 0, 7, 10]

function sortNumber(num){
  return [...num].sort((a, b) => a - b)
}
// console.log(sortNumber([5, 3, 8, 1]))
// console.log(sortNumber([10, -2, 7, 0]))


// -----------------------------------------------------

// 8. forEach()
// โจทย์: แสดงค่าและ index
// Input: ["a", "b", "c"]
// Output (แสดงบน console)
function checkIndex(arr){
  arr.forEach((value, index) => {
    console.log(`index ${index}: ${value}`);
  })
}
// console.log(checkIndex(["a", "b", "c"]))

// -----------------------------------------------------

// 9. includes()
// โจทย์: ตรวจสอบ "apple"
// Input: ["banana", "apple", "orange"]
// Output: true
// Input: ["grape", "melon"]
// Output: false

function checkWord(word){
  return word.includes("apple")
}
// console.log(checkWord(["banana", "apple", "orange"]))
// console.log(checkWord(["grape", "melon"]))

// -----------------------------------------------------

// 10. filter() + reduce()
// โจทย์: ผลรวมของเลขคู่ทั้งหมด
// Input: [1,2,3,4,5,6,7,8,9,10]
// Output: 30 (2+4+6+8+10)
// Input: [11, 13, 15]
// Output: 0
function sumEvenNumber(num){
  return num.filter(num => num % 2 == 0).reduce((total,cur) => cur + total , 0)
}
// console.log(sumEvenNumber([1,2,3,4,5,6,7,8,9,10]))
// console.log(sumEvenNumber([11, 13, 15]))