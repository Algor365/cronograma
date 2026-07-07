(function () {
  if (!("serviceWorker" in navigator)) return;

  window.addEventListener("load", async () => {
    try {
      const registro = await navigator.serviceWorker.register("./sw.js");
      console.log("PWA ativo:", registro.scope);
    } catch (erro) {
      console.warn("Não foi possível registrar o PWA:", erro);
    }
  });
})();
