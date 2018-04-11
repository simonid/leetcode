

```js
知道搜索知道知道var longestPalindrome = function(string){
    var len = string.length;
    var result = '';
    //var reslen;
    //var resArr = [];
    var Palindrome = function(left,right){
        while(left >= 0 && right < length && string[left] === string[right]){
            left--;
            right++;
        }

        return string.slice(left+1,right);
    };

    for(var i=0;i<len-1;i++){
        var oddPal = Palindrome(i,i+1);
        var evenPal = Palindrome(i,i);

        if(oddPal.length > 1)
        console.log("oddPal:"+oddPal);
        if(evenPal.length > 1)
        console.log("evenPal:"+evenPal);
        
        if(oddPal.length > result.length){
            result = oddPal;
            console.log('Palindrome:'+result+','+'Len:'+oddPal.length)
            //reslen = oddPal.length;
        }
        if(evenPal.length > result.length) {
            //resArr.push(result);
           // reslen = evenPal.length;
           result = evenPal;
           console.log('Palindrome:'+result+','+'Len:'+oddPal.length)
        }
    }
}
```