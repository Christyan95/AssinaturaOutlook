function maskPhone(i) {
    let v = i.value.replace(/\D/g, "");
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
    v = v.replace(/(\d)(\d{4})$/, "$1-$2");
    i.value = v;
}

function updateAll() {
    const saudacao = document.getElementById('saudacao').value;
    const nome = document.getElementById('nome').value || "Seu Nome Aqui";
    const cargo = document.getElementById('cargo').value || "CARGO";
    const unidade = document.getElementById('unidade').value;
    const celular = document.getElementById('celular').value || "(00) 0 0000-0000";

    // Atualiza Saudação
    const saudacaoEl = document.getElementById('saudacao-txt');
    if (saudacao === "") {
        saudacaoEl.style.display = 'none';
    } else {
        saudacaoEl.style.display = 'block';
        saudacaoEl.innerText = saudacao;
    }

    document.getElementById('nome-1').innerText = nome;
    document.getElementById('cargo-1').innerText = cargo.toUpperCase();
    document.getElementById('celular-1').innerText = celular;

    const boxUnidade = document.getElementById('box-unidade');
    if (unidade === "") {
        boxUnidade.style.display = 'none';
    } else {
        boxUnidade.style.display = 'block';
        document.getElementById('unidade-1').innerText = unidade;
    }
}

function copyToClip(elementId) {
    const range = document.createRange();
    const element = document.getElementById(elementId);

    // Seleciona APENAS o conteúdo interno, ignorando a div container
    range.selectNodeContents(element);

    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
        document.execCommand("copy");
        showToast();
    } catch (err) {
        console.error("Erro ao copiar", err);
    }

    window.getSelection().removeAllRanges();
}

function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// Inicializa
window.onload = updateAll;
