// info ->> Contendor que me muestra lo que tengo que hacer
// rock, paper, scissor ->> Los botones para elegir el arma
// computer ->> Los mensajes del juego

// Inicializar
const weapons = ['✊', '✋', '✌'];
// LocalStorage: Inicializo con lo que haya en el LS o con 0 para cada score

// Seleccionar elementos
const humanScore =
  document.getElementById('humanScore');
humanScore.innerText = '0';
const computerScore = document.getElementById(
  'computerScore'
);
computerScore.innerText = '0';
const info = document.getElementById('info');
info.innerText = 'Elija su arma ...';
const computer =
  document.getElementById('computer');
const rock = document.getElementById('rock');
rock.addEventListener('click', () =>
  play(rock.innerText)
);
const paper = document.getElementById('paper');
paper.addEventListener('click', () =>
  play(paper.innerText)
);
const scissor =
  document.getElementById('scissor');
scissor.addEventListener('click', () =>
  play(scissor.innerText)
);

// Trabajo con la logica
const randomWeapon = () => {
  const number = Math.floor(Math.random() * 3);
  return weapons[number];
};
const play = humanWeapon => {
  const computerWeapon = randomWeapon();
  let result = '';
  // Casos ganadores
  // humanWeapon === 0 computerWeapon === 2
  // humanWeapon === 1 computerWeapon === 0
  // humanWeapon === 2 computerWeapon === 1
  if (humanWeapon === computerWeapon) {
    result = 'Empate!';
  } else if (
    (humanWeapon === '✊' &&
      computerWeapon === '✌') ||
    (humanWeapon === '✋' &&
      computerWeapon === '✊') ||
    (humanWeapon === '✌' &&
      computerWeapon === '✋')
  ) {
    result = 'Ud. es el ganador!';
    // Sumo al score que corresponde y piso el valor del LS con el nuevo
  } else {
    result = 'Ud. es el perdedor ...';
    // Sumo al score que corresponde y piso el valor del LS con el nuevo
  }

  computer.innerText = '';
  info.innerText = 'Procesando ...';
  setTimeout(() => {
    computer.innerText = `La computadora eligio ${computerWeapon}`;
    info.innerText = result;
    // Ya no hace falta el if, directamente muestro los scores
    if (result === 'Ud. es el ganador!') {
      humanScore.innerText =
        parseInt(humanScore.innerText) + 1;
    } else if (
      result === 'Ud. es el perdedor ...'
    ) {
      computerScore.innerText =
        parseInt(computerScore.innerText) + 1;
    }
  }, 2000);
};

// Limpieza o reinicializacion
