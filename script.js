// Função para escolher casa
function selecionarCasa(nomeCasa) {
    const descricoes = {
        'Grifinória': '🦁 Coragem, nobreza e determinação!',
        'Sonserina': '🐍 Astúcia, ambição e liderança!',
        'Corvinal': '🦅 Sabedoria, criatividade e inteligência!',
        'Lufa-Lufa': '🦡 Lealdade, bondade e trabalho duro!'
    };

    document.getElementById('resultado').textContent = descricoes[nomeCasa];
    document.getElementById('resultado').style.color = '#ffd700';
}

// Função de feitiço
function lancarFeitico() {
    const entrada = document.getElementById('entrada').value.toLowerCase();
    const mensagem = document.getElementById('mensagem');

    const feiticos = {
        'lumos': '✨ LUMOS — A varinha brilha!',
        'expecto patronum': '🦄 Expecto Patronum — Um Patronus aparece!',
        'expelliarmus': '⚔️ Expelliarmus — O oponente é desarmado!',
        'wingardium leviosa': '🪶 Wingardium Leviosa — O objeto levita!',
        'avadakedavra': '💀 Avada Kedavra — Feitiço proibido!'
    };

    if (feiticos[entrada]) {
        mensagem.textContent = feiticos[entrada];
        mensagem.style.color = '#90ee90';
    } else {
        mensagem.textContent = '❌ Feitiço desconhecido!';
        mensagem.style.color = '#ff6b6b';
    }

    document.getElementById('entrada').value = '';
}
