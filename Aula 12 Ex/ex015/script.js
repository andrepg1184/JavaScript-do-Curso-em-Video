function verificar(){
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       //res.innerHTML=`Idade calculada: ${idade}`
       var gênero = ''
       var img = document.createElement('img')
       if(fsex[0].checked){
            gênero = "Homem"
        if(idade >= 0 && idade < 10){
            //Criança
        img.setAttribute('src','img/bebehomem.jpg')
        }else if (idade < 21){
            //Jovem
        img.setAttribute('src','img/jovemhomem.jpg')
        }else if (idade < 50){
            //Adulto
        img.setAttribute('src','img/adultohomem.jpg')
        }else{
            //Senhor
        img.setAttribute('src','img/vohomem.jpg')
        }

       }else if (fsex[1].checked){
            gênero = 'Mulher'
           if(idade >=0 && idade < 10){
            //Criança
        img.setAttribute('src','img/bebemulher.jpg')
        }else if (idade < 21){
            //Jovem
            img.setAttribute('src','img/jovemmulher.jpg')
        }else if (idade < 50){
            //Adulto
            img.setAttribute('src','img/adultomulher.jpg')
        }else{
            //Senhora
            img.setAttribute('src','img/vomulher.jpg')
        }
       }
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
       res.appendChild(img)
    }
}