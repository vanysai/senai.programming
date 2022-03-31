let produtos = document.querySelector('#produtos')
let botao = document.querySelector('#comprar')

botao.addEventListener('click' , comprar)
function comprar(){
  let compra = "Produto comprado\n"
  if (produtos.value == "Podrão Simples"){
      compra += "Produto: " + produtos.value +", valor: R$20,00"
  } else if(produtos.value == "Podrão com carne moída"){
      compra +=  "Produto: " + produtos.value +", valor: R$30,00"
  } else if(produtos.value == "Podrão Completo com maionese verde"){
      compra += "Produto: " + produtos.value +", valor: R$45,00"
  } else {
      compra += "produto não selecionado"
  }
  alert(compra)

}
