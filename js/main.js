//document.querySelector('button').addEventListener('click', getFetch)

//function getFetch(){
//  const numOfQuestions = document.querySelector('input').value
  const url = `https://opentdb.com/api.php?amount=10`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.results[0].question)
        console.log(data.results[0].correct_answer)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
//}