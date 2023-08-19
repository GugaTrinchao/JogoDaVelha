        let xo = 0;
        let winner = document.getElementById("winner")
        let jogarNovamente = document.getElementById("jogarNovamente")
        let botoes = document.getElementsByClassName('botao')
        let jogadorDaVez = document.getElementById("jogadorDaVez")
        let endGame
        
        function clicar(id){
            if(endGame){
                return
            }
            let elemento = document.getElementById(id)
            if(elemento.innerHTML != ""){
                return
            }
            
            if(xo %2 == 0){
                elemento.innerHTML = "X"
                elemento.style.color = 'rgb(51, 133, 137)'
                xo ++
                jogadorDaVez.innerHTML = "Vez do Jogador O"
            }else{
                elemento.innerHTML = "O"
                elemento.style.color = ' rgb(248, 195, 2)'
                xo ++
                jogadorDaVez.innerHTML = "Vez do Jogador X"
            }
            
            SeeWinner()
            
        }
        function SeeWinner(){

            let b1 = document.getElementById("b1")
            let b2 = document.getElementById("b2")
            let b3 = document.getElementById("b3")
            let b4 = document.getElementById("b4")
            let b5 = document.getElementById("b5")
            let b6 = document.getElementById("b6")
            let b7 = document.getElementById("b7")
            let b8 = document.getElementById("b8")
            let b9 = document.getElementById("b9")
            if(
                tryWinner(b5, b1, b9, b2, b8) ||  tryWinner(b5, b3, b7, b4, b6)
            ){
                if(b5.innerHTML == b1.innerHTML && b5.innerHTML == b9.innerHTML || b5.innerHTML == b2.innerHTML && b5.innerHTML == b8.innerHTML){
                    ganhador(b5, b1, b9, b2, b8)
                }else{
                    ganhador(b5, b3, b7, b4, b6)
                }
            }else if(
                tryWinner(b1, b2, b3, b4, b7)
            ){  
                ganhador(b1, b2, b3, b4, b7)
                

            }else if(
               tryWinner(b9, b6, b3, b8, b7)
            ){  
                ganhador(b9, b6, b3, b8, b7)
            }else if(xo > 8){
                winner.innerHTML = "Deu Velha!!!"
                jogadorDaVez.innerHTML = ""
                jogarNovamente.style.display = 'block'
                endGame = true
                
            }
        }
        function ganhador(casa1, casa2, casa3, casa4, casa5){
            if(casa1.innerHTML == 'X'){
                if(casa1.innerHTML == casa2.innerHTML && casa1.innerHTML == casa3.innerHTML){
                    casa2.classList.add('ganhadorX')
                    casa3.classList.add('ganhadorX')
                }else{
                    casa4.classList.add('ganhadorX')
                    casa5.classList.add('ganhadorX')
                }
                casa1.classList.add('ganhadorX')
            }else{
                if(casa1.innerHTML == casa2.innerHTML && casa1.innerHTML == casa3.innerHTML){
                    casa2.classList.add('ganhadorY')
                    casa3.classList.add('ganhadorY')
                }else{
                    casa4.classList.add('ganhadorY')
                    casa5.classList.add('ganhadorY')
                }
                casa1.classList.add('ganhadorY')

            }   
                casa1.classList.add('ganhador')
                winner.innerHTML = casa1.innerHTML + " GANHOU"
                if(casa1.innerHTML == "X"){
                    winner.classList.add('x')
                }else{
                    winner.classList.add('o')
                }
                jogarNovamente.style.display = 'block'
                jogadorDaVez.innerHTML = ""
                endGame = true
                
        }
        function tryWinner(casa1, casa2, casa3, casa4, casa5){
            if(casa1.innerHTML != ""  && casa1.innerHTML == casa2.innerHTML && casa1.innerHTML == casa3.innerHTML ){
                return true
            }else if(casa1.innerHTML != ""  && casa1.innerHTML == casa4.innerHTML && casa1.innerHTML == casa5.innerHTML ){
                return true
            }
        }
        function playAgain(){
            for (i = 0; i < botoes.length; i++){
                botoes[i].classList.remove('ganhador')
                botoes[i].innerHTML = ""
            }
            if(winner.innerHTML == "X GANHOU"){
                winner.classList.remove('x')
                for (i = 0; i < botoes.length; i++){
                    botoes[i].classList.remove('ganhadorX')}
            }else{
                winner.classList.remove('o')
                for (i = 0; i < botoes.length; i++){
                    botoes[i].classList.remove('ganhadorY')}
            }
            xo = 0
            endGame = false
            jogadorDaVez.innerHTML = "Vez do Jogador X"
            jogarNovamente.style.display ="none"
            winner.innerHTML = ""
            
        }
        