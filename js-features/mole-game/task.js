
let winCount = document.getElementById('dead');
let loseCount = document.getElementById ('lost');

winCount.textContent = 0;
loseCount.textContent = 0;

let holeIndex = function getHole( index ) {
  return  document.getElementById('hole' + index);
}

for(let i = 1; i <= 9; i++) {
  let hole = holeIndex(i);
  hole.onclick = function() {
  if(hole.classList.contains( 'hole_has-mole' )) {
    winCount.textContent++;
    } else {
    loseCount.textContent++;
    }
    if(winCount.textContent == 10) {
    alert ('Победа!');
    }
    if (loseCount.textContent == 5) {
    alert('Вы проиграли!');
    }
  }
}






