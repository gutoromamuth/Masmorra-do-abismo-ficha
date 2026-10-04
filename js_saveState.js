const CHAVE = "mda_ficha_personagem";

function salvarFicha() {
  const dados = {};

  document.querySelectorAll("input[id], textarea[id], select[id]").forEach(campo => {
    dados[campo.id] = campo.value;
  });

  try {
    localStorage.setItem(CHAVE, JSON.stringify(dados));
  } catch (erro) {
    console.error("Não foi possível salvar:", erro);
  }
}

function carregarFicha() {
  let dados;

  try {
    dados = JSON.parse(localStorage.getItem(CHAVE));
  } catch (erro) {
    return;
  }

  if (!dados) return; // primeira visita: nada salvo

  for (const [id, valor] of Object.entries(dados)) {
    const campo = document.getElementById(id);
    if (campo) {
      campo.value = valor;
      campo.dispatchEvent(new Event("input")); // recalcula os pontos restantes
    }
  }
}

document.addEventListener("input", salvarFicha);
carregarFicha();