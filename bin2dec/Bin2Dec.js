var binary = document.getElementById('bin')
var result = document.getElementById('result')

var linha = document.createElement('p')
  linha.innerHTML = ''
  result.appendChild(linha)

function isBin() { // Verifica se o Numero é realmente um Binário
  var bin = true 
  var numero = String(binary.value)

  for (var i = 0; i <= numero.length; i++){ //  Verifica se existe um digito maior que 1 no valor digitado
    if (numero[i] > 1){
      bin = false
    }
  }

  return bin 
}

function verifica() {
  bin = isBin()

  if (binary.value.length == 0){ //verifica se o campo está vazio   
    alert('Dados invalidos')
  } else if (!bin) {
    alert(`${binary.value} Não é um Número Binário`)
    binary.value = null // apaga o numero digitado do input 
    binary.focus() // foca no input novamente
  } else {
    convert()
  }

}

function convert() {
  var convertido = parseInt(binary.value, 2) //converte o numero para Decimal

  linha.innerHTML = `<hr>${binary.value} em decimal é ${convertido}` //mostra na tela o resultado
  
  binary.value = null 
  binary.focus()
}
