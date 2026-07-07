const ONESIGNAL_APP_ID = "cd621bfb-a7a3-4789-9052-2360ca1c3c5b";

function appIdConfigurado() {
  return ONESIGNAL_APP_ID && !ONESIGNAL_APP_ID.includes("COLE_AQUI");
}

async function iniciarOneSignal() {
  const botao = document.getElementById("ativarNotificacoes");
  if (!botao) return;

  if (!appIdConfigurado()) {
    botao.textContent = "Configurar OneSignal";
    botao.addEventListener("click", () => {
      alert("Antes de ativar, substitua COLE_AQUI_SEU_APP_ID_DO_ONESIGNAL pelo App ID do seu painel OneSignal.");
    });
    return;
  }

  window.OneSignalDeferred = window.OneSignalDeferred || [];
  window.OneSignalDeferred.push(async function (OneSignal) {
    await OneSignal.init({
      appId: ONESIGNAL_APP_ID,
      serviceWorkerPath: "push/onesignal/OneSignalSDKWorker.js",
      serviceWorkerParam: { scope: "/push/onesignal/" }
    });

    botao.addEventListener("click", async () => {
      try {
        await OneSignal.Notifications.requestPermission();
        botao.textContent = "Notificações ativadas";
        botao.disabled = true;
      } catch (erro) {
        console.warn("Erro ao solicitar permissão:", erro);
        alert("Não foi possível ativar as notificações neste navegador.");
      }
    });
  });
}

iniciarOneSignal();
