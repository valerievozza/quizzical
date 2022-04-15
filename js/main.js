//document.querySelector('button').addEventListener('click', getFetch)

//function getFetch(){
//  const numOfQuestions = document.querySelector('input').value
  const url = `https://opentdb.com/api.php?amount=10`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.results[0].question)
        console.log(data.results[0].correct_answer)
        document.querySelector('h2').innerText = data.results[0].question
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
//}

document.querySelector('button').addEventListener('click', submitAnswer)

function submitAnswer() {
    let userAnswer = document.querySelector('input').value
    let correctAnswer = data.results[0].correct_answer
    
    if (userAnswer === correctAnswer) {
        console.log('Correct!')
    } else {
        console.log('Nope, wrong!')
    }
}