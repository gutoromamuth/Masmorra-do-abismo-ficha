function limitarCampo(campo) {
  if (campo.value === "") return;

  const min = Number(campo.min);
  const max = Number(campo.max);
  let valor = Number(campo.value);

  if (valor > max) valor = max;
  if (valor < min) valor = min;

  campo.value = valor;
}

function configurarGrupo(classeCampos, idTexto, totalPontos) {
  const campos = document.querySelectorAll("." + classeCampos);
  const texto = document.getElementById(idTexto);

  function atualizar() {
    let soma = 0;
    campos.forEach(campo => {
      soma += Number(campo.value) || 0;
    });
    texto.textContent = totalPontos - soma;
  }

  campos.forEach(campo => {
    campo.addEventListener("input", () => {
      limitarCampo(campo);
      atualizar();
    });
  });

  atualizar();
}

// Um grupo por linha: (classe dos inputs, id do span, total de pontos)
configurarGrupo("principal", "pontos_restantes", 5);
configurarGrupo("secundario", "pontos_restantes_as", 5);