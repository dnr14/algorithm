function solution(s) {
  var answer = '';
  answer = s.split(' ').map(word => {
      let strangeWord = ''
      for (let i = 0; i < word.length; i++) {
          strangeWord += i % 2 === 0 ? word[i].toUpperCase() : word[i].toLowerCase()
      }
      return strangeWord
  }).join(' ')
  return answer;
}