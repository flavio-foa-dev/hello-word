const a = 1.14
const notas = [100, 50, 20, 10, 5, 2]
const moedas = [1.00, 0.50, 0.25, 0.10, 0.05, 0.01 ]

const intera =(valor)=>{
  valor
  console.log('NOTAS:')
  if(valor >= 2){
    notas.forEach((nota)=>{
     let quantaty = 0
     let a = (valor%nota)
     let b = Math.floor(valor/nota)
     valor = a
     console.log(`${b} nota(s) de R$ ${nota.toFixed(2)}`)
    })
  }
  console.log('MOEDAS:')
  if(valor < 2.00){
    moedas.forEach((moeda)=>{
      let a = (valor%moeda).toFixed(2)
      let b = Math.floor(valor/moeda)
      console.log(`${b} moeda(s) de R$ ${moeda.toFixed(2)}`)
      valor = a
     })
  }
}

intera(a)




