function copiar() {
    var leftTop = document.getElementById('top-left')
    var leftBottom = document.getElementById('bottom-left')
    var rightTop = document.getElementById('top-right')
    var rightBottom = document.getElementById('bottom-right')

    var bgColor = document.getElementById('background-cl')

    var linha = document.getElementById('linha')
    linha.value = `.box {
        border-radius: ${Number(leftTop.value)}px ${Number(rightTop.value)}px ${Number(rightBottom.value)}px ${Number(leftBottom.value)}px;
        background: ${bgColor.value};
    }`

// Codigo para copiar (OBS: o função select() e setSelectionRange()se só funcionar em elementos HTML de input)
    linha.select()
    linha.setSelectionRange(0, 99999)
    document.execCommand("copy")

    alert('Copiado')
}