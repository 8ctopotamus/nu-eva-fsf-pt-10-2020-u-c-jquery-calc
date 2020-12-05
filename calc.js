$(document).ready(function() {
  var numberButtons = $('.number')
  var operatorButtons = $('.operator')
  var equalButton = $('.equal')
  var clearButton = $('.clear')
  var firstNumDisplay = $('#first-number')
  var secondNumDisplay = $('#second-number')
  var operatorDisplay = $('#operator')
  var resultDisplay = $('#result')

  var operatorClicked = false
  var operator

  numberButtons.on('click', function() {
    var num = $(this).val()
    var currentNum
    if (operatorClicked) {
      currentNum = secondNumDisplay.text()
      secondNumDisplay.text(currentNum + num)
    } else {
      currentNum = firstNumDisplay.text()
      firstNumDisplay.text(currentNum + num)
    }
  })

  operatorButtons.click(function() {
    operatorClicked = true
    operator = $(this).val()
    var symbol = $(this).text()
    operatorDisplay.text(symbol)
  })

  equalButton.on('click', function () {
    var firstNum = parseInt( firstNumDisplay.text() )
    var secondNum = parseInt( secondNumDisplay.text() )
    var result 

    if (operator === 'plus') {
      result = firstNum + secondNum
    } else if (operator === 'times') {
      result = firstNum * secondNum
    } else if (operator === 'minus') {
      result = firstNum - secondNum
    } else if (operator === 'divide') {
      result = firstNum / secondNum
    } else if (operator === 'power') {
      result = Math.pow(firstNum, secondNum)
    }
    resultDisplay.text(result)
  })

  clearButton.on('click', function() {
    operatorClicked = false
    firstNumDisplay.empty()
    secondNumDisplay.text('')
    operatorDisplay.text('')
    resultDisplay.text('')
  })

});