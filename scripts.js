const welcomeSection = document.getElementById('welcome-section')
const winnerSection = document.querySelector('.winner-section')
const winnerSectionTitle = document.querySelector('.winner-section__title')
const choosePlayerBtn = document.querySelector('.choose-player__btn')
const restartBtn = document.querySelector('.restart-btn')
const grid = document.getElementById('grid')
const gridItems = grid.querySelectorAll('.grid__item')

let mark = 'X'
const winCombos = [
  [0, 1, 2],
  [0, 3, 6],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [0, 4, 8]
]

choosePlayerBtn.addEventListener('click', function(){
  welcomeSection.classList.add('hidden')
  grid.classList.remove('hidden')
  startGame();
})

const startGame = () => {
  grid.addEventListener('click', function(e){
    let targetItem = e.target
    if(targetItem.textContent === '') {
      if(mark === 'X') {
        targetItem.textContent = 'X'
        targetItem.style.color = '#f1cd78'
        if(checkWin(mark)) {
          showResults(mark)
        }
        mark = 'O'
      } else if(mark === 'O') {
        targetItem.textContent = 'O'
        targetItem.style.color = '#b82058'
        if(checkWin(mark)) {
          showResults(mark)
        }
        mark = 'X'
      }
    }
  })
}

const checkWin = (currentMark) => {
  return winCombos.some(combination => {
    return combination.every(index => {
      return gridItems[index].textContent.includes(currentMark)
    })
  })
}

const showResults = (winnerMark) => {
  welcomeSection.classList.add('hidden')
  grid.classList.add('hidden')
  winnerSection.classList.remove('hidden')
  winnerSectionTitle.textContent = `${winnerMark} Wins!`
}

restartBtn.addEventListener('click', function() {
  welcomeSection.classList.remove('hidden')
  grid.classList.add('hidden')
  winnerSection.classList.add('hidden')
  winnerSectionTitle.textContent = ''
  gridItems.forEach(item => {
    item.textContent = ''
  })
})