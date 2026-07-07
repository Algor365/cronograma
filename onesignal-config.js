const ONESIGNAL_APP_ID = "cd621bfb-a7a3-4789-9052-2360ca1c3c5b";

window.OneSignalDeferred = window.OneSignalDeferred || [];

OneSignalDeferred.push(async function (OneSignal) {
  await OneSignal.init({
    appId: ONESIGNAL_APP_ID
  });

  const botao = document.getElementById("ativarNotificacoes");

  if (botao) {
    botao.addEventListener("click", async () => {
      try {
        await OneSignal.Notifications.requestPermission();

        if (Notification.permission === "granted") {
          botao.textContent = "Notificações ativadas";
          botao.disabled = true;
        }
      } catch (erro) {
        console.warn("Erro ao solicitar permissão:", erro);
        alert("Não foi possível ativar as notificações neste navegador.");
      }
    });
  }
});