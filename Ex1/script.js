window.onload = function(){

var words = ['възходът на планентата на маймуните', 'властелина на пръстените', 'последният ергенски запой'];

var word = words[Math.floor(Math.random()*words.length)];

var i=word.length;
//i=i-1;

var singlewords="";
var reversedwords=""; 
for (var x = i; x >=0; x--)
{
    reversedwords +=(word.charAt(x));
	
    
    // var test = [Math.floor(Math.random()*words.length)];
    //console.log(word.charAt(x));
}
var blq=reversedwords.split(" ");
//console.log(blq.length);
var singleword = blq[Math.floor(Math.random()*blq.length)];

console.log(singleword) // "възходът на планентата на маймуните"

for (var singlewords = blq.length; i >= 0; i--) {
    	singlewords += blq[Math.floor(Math.random()*blq.length)];
    	//console.log(singlewords);
    };

console.log(singlewords) // "възходът на планентата на маймуните"

}