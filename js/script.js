"use strict";

function rangeRun() {
  // получаем и сохраняем значение ползунков и сразу переводим в числовое значение
  let rangeTopValue = parseInt(document.getElementById("range-top").value);
  // передаем в поле значение из ползунка
  document.getElementById("calc-input__top").value = rangeTopValue;

  let rangeBottomValue = parseInt(document.getElementById("range-bottom").value);
  document.getElementById("calc-input__bottom").value = rangeBottomValue;

  // получаем значение выбранного select-a
  let calcSelectValue = parseInt(document.getElementById("calc-select").value);

  // расчитываем стоимость за материал
  let costTop = rangeTopValue * calcSelectValue;
  // расчитываем стоимость за светильники
  let costBottom = rangeBottomValue * 400;

  // суммируем оба значения и выдаем результат на странице
  document.getElementById("result-sum").innerHTML = costTop + costBottom;

  // расчитываем процентное соотношение текущего значения ползунка и его максимального значения
  let runTop = rangeTopValue + '%'; // макс. значение 100, по этому просто присваиваем значению процент
  // присваиваем процент длине линии закрашивающей ползунок
  document.getElementById("line-range__top").style.width = runTop;
  let runBottom = ((rangeBottomValue / 30) * 100) + '%';
  document.getElementById("line-range__bottom").style.width = runBottom;
}

function manualInput() {
  // получаем и сразу передаем значение введеное из поля в верхний ползунок
  let inputTopValue = parseInt(document.getElementById("calc-input__top").value);
  document.getElementById("range-top").value = inputTopValue;
  // получаем и сразу передаем значение введеное из поля в нижний ползунок
  let inputBottomValue = parseInt(document.getElementById("calc-input__bottom").value);
  document.getElementById("range-bottom").value = inputBottomValue;
  rangeRun();
}

manualInput();