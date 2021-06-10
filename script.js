var compras = 0;
var nickG=''; 
var totalSoma=parseInt;
totalSoma=0;
var cartasCompradas='Suas cartas compradas são: ';
var vitorias='';
var derrotas='';
 function start()
 {
   nick = document.getElementById('nick');
   nome = prompt('Digite seu nick');
   nick.value=nome;  
   nickG=nick.value;
 }


 function cartasini(){
 nick = document.getElementById('nick');
 if (nick.value=='')
 {
  alert('Aperte em inciar!');
 }
 else if(compras == 0){
  const carta1 = parseInt(Math.random() * 10 + 1);

  const caixacarta1 = document.getElementById('carta1');
  caixacarta1.value = carta1;
  const carta2 = parseInt(Math.random() * 10 + 1);

  const caixacarta2 = document.getElementById('carta2');
  caixacarta2.value = carta2;
  const carta3 = parseInt(Math.random() * 10 + 1);
  compras = 2;
  somarIni();
}

 else 
 {
  alert("O jogador " + nick.value + " ja pegou suas cartas inicias"); 
 }
}


function somarIni()
{
    const caixacarta1 = document.getElementById('carta1');
    const caixacarta2 = document.getElementById('carta2');
    
    const resultado = document.getElementById('esperanca');
  
  let total = parseInt;
  total = parseInt(caixacarta1.value) + parseInt(caixacarta2.value) ;
  resultado.value = total;
}


function somar()
{
    const caixacarta1 = document.getElementById('carta1');
    const caixacarta2 = document.getElementById('carta2');
    const caixacarta3 = document.getElementById('carta3');
    const resultado = document.getElementById('esperanca');

  let total = parseInt;
  if (compras == 3){
  total = parseInt(caixacarta1.value) + parseInt(caixacarta2.value) + parseInt(caixacarta3.value);
  cartasCompradas+=caixacarta3.value + ' ';
  resultado.value = total;
  totalSoma+=total;
  } 
  else if (compras == 4)
  {
  totalSoma+=parseInt(caixacarta3.value);
  resultado.value = totalSoma;
  cartasCompradas+=caixacarta3.value+' ';
  }
  else if (compras == 5)
  {
  totalSoma+=parseInt(caixacarta3.value);
  resultado.value = totalSoma;
  cartasCompradas+=caixacarta3.value;
  }
  if(resultado.value == 21)
  {
  alert( nick.value + " fez 21!");
  vitorias++;
  jogarnovamente();
  }
  else if(resultado.value > 21)
  {
    alert( 'O jogador ' + nick.value +' está fora do jogo pois passou de 21!');
    derrotas++;
    jogarnovamente();
  }
  
}


function comprar(){
 const buycart1 = parseInt(Math.random()*10 + 1);
 if (compras == 2)
{
  const compra1 = parseInt(document.getElementById('carta3'));
  carta3.value = buycart1;
  compras++; 
  somar();
}
else if (compras == 3)
{
  const compra1 = parseInt(document.getElementById('carta3'));
  carta3.value=buycart1;
  compras++;
  somar();
}
else if (compras == 4)
{
const compra1 = parseInt(document.getElementById('carta3'));
  carta3.value=buycart1;
  somar();
}
else if (compras==4&&resultado.value<21)
{
  jogarnovamente();
}
  else if(compras==0) alert(nickG+" Compre as cartas inciais");
}


function mostrar()
{
  if(cartasCompradas=='Suas cartas compradas são: ')
  alert('Compre as cartas!');
  else
  alert(cartasCompradas);
}

function vaijogaroun()
{
 alert('Então você não quis apertar nenhum dos comandos né? \n SUA ULTIMA CHANCE');
  pergunta=prompt('Digite 1 pra sim, 2 pra não e 3 pra recomeçar');
 if (pergunta==1)
 {
    const caixacarta1 = document.getElementById('carta1');
    const caixacarta2 = document.getElementById('carta2');
    const caixacarta3 = document.getElementById('carta3');
    const resultado = document.getElementById('esperanca');
    caixacarta1.value='';
    caixacarta2.value='';
    caixacarta3.value='';
    resultado.value='';
    compras=0;
    dizerDerrotasVitorias();
    cartasCompradas='Suas cartas compradas são: '
 }
 if (pergunta==2)
 {
    const caixacarta1 = document.getElementById('carta1');
    const caixacarta2 = document.getElementById('carta2');
    const caixacarta3 = document.getElementById('carta3');
    const resultado = document.getElementById('esperanca');
    caixacarta1.value='';
    caixacarta2.value='';
    caixacarta3.value='';
    resultado.value='';
    compras=0;
   alert('Obrigado por jogar !');
   dizerDerrotasVitorias();
   derrotas=0;
   vitorias=0;
   cartasCompradas='Suas cartas compradas são: ';
 }
 if (pergunta==3)
 {
   const nick = document.getElementById('nick');
   const caixacarta1 = document.getElementById('carta1');
   const caixacarta2 = document.getElementById('carta2');
   const caixacarta3 = document.getElementById('carta3');
   const resultado = document.getElementById('esperanca');
   nick.value='';
   caixacarta1.value='';
   caixacarta2.value='';
   caixacarta3.value='';
   resultado.value='';
   compras=0;
   dizerDerrotasVitorias();
   alert('Os valores de derrotas e vitorias serão zerados');
   vitorias=0;
   derrotas=0;
   cartasCompradas='Suas cartas compradas são: ';
}
}
function jogarnovamente()
{
 alert('O jogo acabou, quer jogar novamente?'); 
 pergunta=prompt('Digite 1 pra sim, 2 pra não e 3 pra recomeçar');
 if (pergunta==1)
 {
    const caixacarta1 = document.getElementById('carta1');
    const caixacarta2 = document.getElementById('carta2');
    const caixacarta3 = document.getElementById('carta3');
    const resultado = document.getElementById('esperanca');
    caixacarta1.value='';
    caixacarta2.value='';
    caixacarta3.value='';
    resultado.value='';
    compras=0;
    dizerDerrotasVitorias();
    cartasCompradas='Suas cartas compradas são: '
 }
 else  if (pergunta==2)
 {
    const caixacarta1 = document.getElementById('carta1');
    const caixacarta2 = document.getElementById('carta2');
    const caixacarta3 = document.getElementById('carta3');
    const resultado = document.getElementById('esperanca');
    caixacarta1.value='';
    caixacarta2.value='';
    caixacarta3.value='';
    resultado.value='';
    compras=0;
   alert('Obrigado por jogar !');
   dizerDerrotasVitorias();
   derrotas=0;
   vitorias=0;
   cartasCompradas='Suas cartas compradas são: ';
 }
 else if (pergunta==3)
 {
   const nick = document.getElementById('nick');
   const caixacarta1 = document.getElementById('carta1');
   const caixacarta2 = document.getElementById('carta2');
   const caixacarta3 = document.getElementById('carta3');
   const resultado = document.getElementById('esperanca');
   nick.value='';
   caixacarta1.value='';
   caixacarta2.value='';
   caixacarta3.value='';
   resultado.value='';
   compras=0;
   dizerDerrotasVitorias();
   alert('Os valores de derrotas e vitorias serão zerados');
   vitorias=0;
   derrotas=0;
   cartasCompradas='Suas cartas compradas são: ';
  }
 else vaijogaroun();
}
function dizerDerrotasVitorias()
{
  if (vitorias==0&&derrotas==0)
  {
    alert("Jogue e direi suas vitorias(se tiver alguma)");
  }
  else if(vitorias>1&&derrotas==0)
  {
    alert('Vitorias: '+vitorias +'\n Derrotas: 0' );
  }
  else if(vitorias==0 && derrotas>1){alert('Vitorias: 0' +'\n Derrotas: '+derrotas);}
  else
 alert('Vitorias: '+ vitorias+ '\n Derrotas: ' + derrotas ); 
}
