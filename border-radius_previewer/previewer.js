var box = document.getElementById('box')

var all = document.getElementById('all-borders')
var leftTop = document.getElementById('top-left')
var leftBottom = document.getElementById('bottom-left')
var rightTop = document.getElementById('top-right')
var rightBottom = document.getElementById('bottom-right')

var bgColor = document.getElementById('background-cl')

// Função responsável por alterar a cor de fundo da caixa
bgColor.addEventListener('input', () => {
    box.style.backgroundColor = `${bgColor.value}`
})

// Função responsável por alterar o Border-radius do canto superior esquerdo
leftTop.addEventListener('input', () => {
    if (!valido(leftTop.value)){
        leftTop.value = null
        leftTop.focus
    } else {
        box.style.borderTopLeftRadius = `${leftTop.value}px`
    }
})

// Função responsável por alterar o Border-radius do canto inferior esquerdo
leftBottom.addEventListener('input', () => {
    if (!valido(leftBottom.value)) {
        leftBottom.value = null
        leftBottom.focus()
    } else {
        box.style.borderBottomLeftRadius = `${leftBottom.value}px`
    }
})

// Função responsável por alterar o Border-radius do canto superior direito
rightTop.addEventListener('input', () => {
    if (!valido(rightTop.value)) {
        rightTop.value = null
        rightTop.focus()
    } else {
        box.style.borderTopRightRadius = `${rightTop.value}px`
    }
    
})

// Função responsável por alterar o Border-radius do canto inferior direito
rightBottom.addEventListener('input', () => {
    if (!valido(rightBottom.value)) {
        rightBottom.value = null
        rightBottom.focus() 
    } else {
       box.style.borderBottomRightRadius = `${rightBottom.value}px` 
    }
})

// Função responsável por alterar o Border-radius de toda a caixa 
all.addEventListener('input', () => {
    if (!valido(all.value)) {
        all.value = null
        all.focus()
    }
    else {
    box.style.borderTopLeftRadius = `${all.value}px`
    box.style.borderBottomLeftRadius = `${all.value}px`
    box.style.borderTopRightRadius = `${all.value}px`
    box.style.borderBottomRightRadius = `${all.value}px`

    leftTop.value = all.value
    leftBottom.value = all.value
    rightTop.value = all.value
    rightBottom.value = all.value
    }
})

// Função de verificação 
function valido(element) {
    if (element < 0 || element > 250) {
        alert('Valor inválido! os valores aceitos são entres 0 a 250')
        box.style.borderRadius = '0px'
        return false
    } else {
        return true
    } 
}