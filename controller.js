class Jogo {

    constructor() {
        this._form = document.getElementById("form-game");
        this.initEvents();
    }

    initEvents() {
        let listX = [];
        let listO = [];
        let round = 0;
        
        [...this._form].forEach((element, index) => {
            element.addEventListener("click", e => {
                e.preventDefault();
                let btn = document.getElementById(e.srcElement.id);
                btn.disabled = true;
                if (round % 2 === 0) {
                    e.srcElement.innerHTML = 'X';
                    round++;
                    listX.push(parseInt(e.srcElement.id.substr(4)));
                    btn.classList.add("class-x");
                    this.checkWinner(listX, "X");
                } else if (round % 2 !== 0) {
                    e.srcElement.innerHTML = 'O';
                    round++;
                    listO.push(parseInt(e.srcElement.id.substr(4)));
                    btn.classList.add("class-o");
                    this.checkWinner(listO, "Bolinha");
                }
                
        });
        
    });
    }

    checkWinner(list, winner) {
        if(
            // Verticais
            list.includes(1) && list.includes(4) && list.includes(7) 
            ||
            list.includes(2) && list.includes(5) && list.includes(8)
            ||
            list.includes(3) && list.includes(6) && list.includes(9)
            ||
            // Diagonais 
            list.includes(1) && list.includes(5) && list.includes(9) 
            ||
            list.includes(3) && list.includes(5) && list.includes(7)
            ||
            // Horizontais
            list.includes(1) && list.includes(2) && list.includes(3) 
            ||
            list.includes(4) && list.includes(5) && list.includes(6)
            ||
            list.includes(7) && list.includes(8) && list.includes(9)
        ) {
            setTimeout( function() {
                alert(winner + " foi o Campeão");
                location.reload();
            }, 100);
              
        };
    }
}