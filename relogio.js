const ponteiroHoras = document.querySelector(".ponteiros.horas");
const ponteiroMinutos = document.querySelector(".ponteiros.minutos");
const ponteiroSegundos = document.querySelector(".ponteiros.segundos");

const setRotation = (element, rotationPercentage) => {
  element.style.setProperty("--rotation", rotationPercentage * 360);
};

const setClock = () => {
  const dataAtual = new Date();

  const percSegundos = dataAtual.getSeconds() / 60;
  const percMinutos = (percSegundos + dataAtual.getMinutes()) / 60;
  const percHoras = (percMinutos + dataAtual.getHours()) / 12;

  setRotation(ponteiroSegundos, percSegundos);
  setRotation(ponteiroMinutos, percMinutos);
  setRotation(ponteiroHoras, percHoras);
};

setClock();
setInterval(setClock, 1000);