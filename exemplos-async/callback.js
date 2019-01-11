(function (){

    // Exemplo Callback

    // Listener
    document.querySelector('div')
    .addEventListener('click', callback);

    // Loop
    // for(var i = 0; i < 1500; i++){
    //     console.log(i);
    //     if(i === 1000)
    //         callback();
    // }

    // Timer
    // setTimeout(callback, 2000);
    
    
    function callback(){
        alert('Callback ativado!');
    }

    // Usando callback para executar estruturadamente.

    function showUm(){
        console.log(1);
    }
    function showTres(){
        console.log(3);
    }
    function showDois(){
        console.log(2);
    }

    showUm();
    showDois();
    showTres();


    // Callback Hell

    // um(dois(tres(quatro(cinco()))))

    // function um(cb){
    //     return cb;
    // }

    // function dois(cb){
    //     return cb;
    // }

    // function tres(cb){
    //     return cb;
    // }

    // function quatro(cb){
    //     return cb;
    // }

    // function cinco(){
    //     callback();
    //     console.log('CALLBACK HELL 666');
    // }




    


})()