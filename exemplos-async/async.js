(function (){
    
    // EXEMPLO COM FUNÇÃO NORMAL
    
    function getUser(){
        setTimeout(()=>{
            return {name: 'Igor'};
        }, 2000);
    }
    
    function getUserFullData(){
        var userData = getUser();
        console.log(userData);
       document.querySelector('span').textContent = userData.name;
    }

    // EXEMPLO COM ASYNC / AWAIT

    // const getUser = async function(){
    //     return new Promise((resolve, reject) => {
    //         setTimeout(()=>{
    //             resolve({name: 'Igor'});
    //         }, 2000);
    //     });
    // }

    // async function getUserFullData(){
    //     var userData = await getUser();
    // console.log(userData);
    //     document.querySelector('span').textContent = userData.name;
    // }
  
    getUserFullData();
    

    // EXEMPLO UTILIZANDO API

    // async function gitHub () {
    //     const userName = 'soutoigor';
    //     const url = 'https://api.github.com/users';
    //     const reposResponse = await fetch(`${url}/${userName}/repos`);
    //     const userRepos = await reposResponse.json();
    //     for(var i = 0; i < userRepos.length; i++ ){
    //         console.log(userRepos[i].name);
    //     }
    //   }

    //   gitHub();

})()