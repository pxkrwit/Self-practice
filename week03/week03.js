function getFreqOfWords(sentence){
  if ( typeof sentence !== 'string' || sentence.trim() === "" || sentence === null ) return undefined

  let words = sentence.toLowerCase().split(" ")
  let count = {}

  for( let word of words) {
    if(count[word]) {
      count[word]++
    }
    else {
      count[word] = 1
    }
  }
  return count
}

let word = "Do you best just to do it"
console.log(getFreqOfWords(word))