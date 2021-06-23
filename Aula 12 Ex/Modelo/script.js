var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 22
msg.innerHTML = `Agora são ${hora} horas.`
if(hora >= 0 && hora <12){
    //Bom Dia!
    img.src = "/Aula 12 Ex/Modelo/img/dia.png"
    document.body.style.background="#ffebc2"
}else if (hora >= 12 && hora <= 18){
    //BOA TARDE!
    img.src = "/Aula 12 Ex/Modelo/img/tarde.png"
    document.body.style.background="#c39473"
}else{  
      //BOA NOITE!
    img.src = "/Aula 12 Ex/Modelo/img/noite.png"
    document.body.style.background="#022d52"
}
   
