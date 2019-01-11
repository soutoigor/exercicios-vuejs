(function(){



    // EXEMPLO PROMISE RESOLVIDA

    function promisesExample(){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve('Promisse resolvida!');
            }, 1000);
        })
    }

    
    // EXEMPLO PROMISE COMPLETA
    
    // function promisesExample(resolver = true){
    //     return new Promise((resolve, reject) => {
    //         setTimeout(()=>{
    //             if (!resolver){
    //                 reject('Deu erro! :(');
    //                 // throw new Error('Deu erro! ;(');
    //             }
    //             resolve('Promise resolvida!');
    //         }, 1000);
    //     })
    // }
    
    // EXEMPLO MOSTRANDO O RESULTADO DA PROMISE

    console.log(
        promisesExample(false)
        .then(console.log, console.log)
        // .catch(console.log)
        );

    // EXEMPLO LIDANDO COM O RESULTADO DA PROMISE

    // promisesExample(true)
    // .then(resposta => {
    //     showPromiseMessage(resposta);
    // })
    // .catch(erro => {
    //     showPromiseMessage(erro);
    // });

        function showPromiseMessage(message){
            document.querySelector('span').textContent = message;

        }

})()