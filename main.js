let words=["apple", "flower", "car"]
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function shuffle_random_word() {
word=words[getRndInteger(0, words.length-1)]
shuffeled_word=""
while (word.length>0) {
    index=getRndInteger(0, word.length-1)
    shuffeled_word=shuffeled_word+word[index]
    word=word.replace(word[index], "")
    
}
document.getElementById("word").textContent=shuffeled_word
}

window.onload = function() {
  shuffle_random_word()
}
