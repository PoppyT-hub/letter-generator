let players = [];

function createNameInputs() {
  const num = parseInt(document.getElementById('numPlayers').value);
  const container = document.getElementById('nameInputs');
  container.innerHTML = '';
  players = [];

  container.style.display = 'block';

  for (let i = 0; i < num; i++) {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = `Player ${i + 1} Name`;
    input.className = 'form-control mb-2';
    input.oninput = () => players[i] = { name: input.value, letter: '' };
    container.appendChild(input);
  }

  const generateBtn = document.createElement('button');
  generateBtn.textContent = 'Generate Letters';
  generateBtn.className = 'button';
  generateBtn.onclick = generateLetters;
  container.appendChild(generateBtn);
}

function generateLetters() {
  players = players.map(player => ({
    ...player,
    letter: String.fromCharCode(65 + Math.floor(Math.random() * 26))
  }));

  localStorage.setItem('players', JSON.stringify(players));
  window.location.href = 'results.html';
}