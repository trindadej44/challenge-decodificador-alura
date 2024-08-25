function criptografar() {
    let texto = document.getElementById("inputText").value;
    if (texto) {
        let textoCriptografado = btoa(texto); // Criptografia Base64
        document.getElementById("outputText").textContent = textoCriptografado;
    } else {
        document.getElementById("outputText").textContent = "Nenhuma mensagem encontrada";
    }
}

function descriptografar() {
    let textoCriptografado = document.getElementById("outputText").textContent;
    try {
        if (textoCriptografado !== "Nenhuma mensagem encontrada") {
            let textoDescriptografado = atob(textoCriptografado); // Descriptografia Base64
            document.getElementById("outputText").textContent = textoDescriptografado;
        } else {
            alert("Nenhuma mensagem para descriptografar.");
        }
    } catch (error) {
        alert("Mensagem inválida ou não criptografada corretamente.");
    }
}

function resetarCampos() {
    document.getElementById("inputText").value = "";
    document.getElementById("outputText").textContent = "Nenhuma mensagem encontrada";
}

function copiarTexto() {
    let textoCriptografado = document.getElementById("outputText").textContent;
    
    if (textoCriptografado !== "Nenhuma mensagem encontrada") {
        navigator.clipboard.writeText(textoCriptografado)
            .then(() => {
                alert("Texto copiado para a área de transferência!");
            })
            .catch(err => {
                alert("Erro ao copiar o texto: " + err);
            });
    } else {
        alert("Nenhuma mensagem para copiar.");
    }
}
