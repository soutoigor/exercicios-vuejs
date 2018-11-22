new Vue({
el: '#exercise',
data: {
	name: 'Igor',
  age: 21,
  image: 'https://imagens.publicocdn.com/imagens.aspx/1293433?tp=UH&db=IMAGENS&type=JPG&w=823'
},
methods: {
 	randomNumber: function randomNumber(){
  	return Math.random();
  },
  
}
})