content = document.getElementById('content');
<script>const samochody = [];

let x;
do{
    x = Number.parseInt(window.prompt('Podaj liczbę samochodów'));
    }while(Number.isNaN(x))
        for(let i = 0; i < x; i++){
            samochody[i] = window.prompt('Podaj markę samochodu');
        }
        for(const samochod of samochody){
            content.innerHTML  += `samochod ${samochod} ma ${samochody.length} liter<br>`;
        }

</script>