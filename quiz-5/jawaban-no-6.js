function isPalindrome(word){
	//buat isi function untuk menentukan nilai palindrome di console true atau false 

    var re = /[\W_]/g;
    var lowRegStr = word.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
}
console.log(isPalindrome('kasur ini rUsak'));//true