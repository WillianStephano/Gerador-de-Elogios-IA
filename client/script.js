document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("gerarElogio");
  const buttonText = document.getElementById("buttonText");
  const resultado = document.getElementById("resultado");

  button.addEventListener("click", async () => {
    button.disabled = true;
    buttonText.textContent = "Gerando...";
    resultado.innerHTML =
      '<div class="loading"></div> Gerando seu elogio especial...';

    try {
      const response = await fetch("http://localhost:3000/api/elogio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt:
            "Gere um elogio criativo e técnico para uma pessoa que é desenvolvedor de software. Use termos de TI ou desenvolvimento. Seja engraçado. Maximo de 3 linhas",
        }),
      });

      if (!response.ok) throw new Error("Erro na API");

      const data = await response.json();
      resultado.textContent = `"${data.elogio}"`;
    } catch (error) {
      console.error("Erro:", error);
      resultado.textContent =
        "Ops! Não foi possível gerar o elogio. Tente novamente.";
    } finally {
      button.disabled = false;
      buttonText.textContent = "Gerar Elogio";
    }
  });
});
