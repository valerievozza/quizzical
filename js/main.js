
//function getFetch(){
//  const numOfQuestions = document.querySelector('input').value
  const url = `https://opentdb.com/api.php?amount=10`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.results[0].question)
        console.log(data.results[0].correct_answer)
        document.querySelector('button').addEventListener('click', submitAnswer)
        function submitAnswer() {
            let userAnswer = document.querySelector('input').value.toLowerCase()
            let correctAnswer = data.results[0].correct_answer.toLowerCase()
    
            if (userAnswer === correctAnswer) {
                console.log('Correct!')
                addScore()
                document.querySelector('h3').innerText = 'Correct!'
            } else {
                console.log('Nope, wrong!')
                document.querySelector('h3').innerText = 'Nope!'
            }
        }
        document.querySelector('h2').innerText = data.results[0].question
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
      
function addScore(){
    scoreVal = Number(localStorage.getItem('score'))
    scoreVal += 1
    localStorage.setItem('score', scoreVal)
}
//}

/*document.getElementById('category').addEventListener('click', getCategory)
const categoies = 'https://opentdb.com/api_category.php'

function getCategory() {
    
    fetch(category)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}*/


