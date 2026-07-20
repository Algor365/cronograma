const ONESIGNAL_APP_ID =
  "cd621bfb-a7a3-4789-9052-2360ca1c3c5b";

window.OneSignalDeferred =
  window.OneSignalDeferred || [];

OneSignalDeferred.push(async function (OneSignal) {
  const painel =
    document.getElementById("painelNotificacoes");

  const botao =
    document.getElementById("ativarNotificacoes");

  if (!painel) {
    return;
  }

  function esconderPainel() {
    painel.classList.add("oculto");

    window.setTimeout(() => {
      painel.remove();
    }, 350);
  }

  function mostrarPainel() {
    painel.classList.remove("verificando-notificacao");
  }

  function notificacoesAtivas() {
    return (
      OneSignal.Notifications.permission === true &&
      OneSignal.User.PushSubscription.optedIn === true
    );
  }

  try {
    await OneSignal.init({
      appId: ONESIGNAL_APP_ID,
      autoResubscribe: true
    });

    /*
     * Após o init, o OneSignal já pode verificar
     * a inscrição salva neste navegador.
     */
    if (notificacoesAtivas()) {
      esconderPainel();
      return;
    }

    mostrarPainel();

    OneSignal.Notifications.addEventListener(
      "permissionChange",
      function (permissao) {
        if (
          permissao === true &&
          OneSignal.User.PushSubscription.optedIn === true
        ) {
          esconderPainel();
        }
      }
    );

    OneSignal.User.PushSubscription.addEventListener(
      "change",
      function (evento) {
        if (
          evento.current.optedIn === true &&
          OneSignal.Notifications.permission === true
        ) {
          esconderPainel();
        }
      }
    );

    botao?.addEventListener("click", async function () {
      try {
        botao.disabled = true;
        botao.textContent = "Ativando...";

        await OneSignal.Notifications.requestPermission();

        if (!OneSignal.Notifications.permission) {
          botao.disabled = false;
          botao.textContent = "Ativar notificações";
          return;
        }

        if (!OneSignal.User.PushSubscription.optedIn) {
          await OneSignal.User.PushSubscription.optIn();
        }

        if (notificacoesAtivas()) {
          esconderPainel();
          return;
        }

        botao.disabled = false;
        botao.textContent = "Ativar notificações";
      } catch (erro) {
        console.warn(
          "Erro ao solicitar notificações:",
          erro
        );

        botao.disabled = false;
        botao.textContent = "Ativar notificações";

        alert(
          "Não foi possível ativar as notificações neste navegador."
        );
      }
    });
  } catch (erro) {
    console.error(
      "Erro ao iniciar o OneSignal:",
      erro
    );

    mostrarPainel();
  }
});