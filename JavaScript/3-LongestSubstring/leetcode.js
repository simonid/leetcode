var leetcode1 = function(s){
	if(s === ''){
		console.log('Empty String');
		return 0;
	}
	var maxLen = 0;
	var l = 0;
	for(var i=1;i<s.length;i++){
		r = s.lastIndexOf(s[i],i-1);
		if(r >= 0){
			maxLen = Math.max(maxLen,i-1);
			l = Math.max(l,r+1);
		}
	}
	return Math.max(maxLen,i-1);
};


/*
lastIndexOf：

lastIndexOf() 方法可返回一个指定的字符串值最后出现的位置，如果指定第二个参数 start，则在一个字符串中的指定位置从后向前搜索。

注意： 该方法将从后向前检索字符串，但返回是从起始位置 (0) 开始计算子字符串最后出现的位置。 看它是否含有字符串。

开始检索的位置在字符串的 start 处或字符串的结尾（没有指定 start 时）。

如果没有找到匹配字符串则返回 -1 。


如果不指定第二个参数，那么实际上返回的结果是从左往右找到目标的索引
如果指定第二个参数，它指定了索引的范围，也就是重新定义结尾，然后从开头到第二参数索引的位置间找到目标的最后出现位置
console.log("abcabcef".lastIndexOf('a',5))
 3
这里，查找范围就是从开头到s[5]之间，a最后出现在3

console.log("abcabcef".lastIndexOf('a',2))
 0
 这类，查找的范围就是从开头到s[2]之间，a最后出现在0
*/


/*

console.log("abcabcef".lastIndexOf('b',0))
 -1

console.log("abcabcef".lastIndexOf('c',1))
 -1

console.log("abcabcef".lastIndexOf('a',2))
 0

console.log("abcabcef".lastIndexOf('b',3))
 1

console.log("abcabcef".lastIndexOf('c',4))
 2

console.log("abcabcef".lastIndexOf('e',5))
 -1
*/



var leetcode2 = function(s){
	if(s === ''){
		console.log('Empty String');
		return 0;
	}
	var maxLen = 1,currentLen = 1,len = s.length,repeat;
	for(i = 1;i < len;i++){
		repeat = s.substr(i - currentLen,currentLen).indexOf(s.substr(i,1));

	}
}


var leetcode3 = function(s){
	var max = 0;
	var str = '';
	var i = 0;
	var cache = [];

	while(i < s.length){
		if(cache[s[i]]){
			if(str.length > max){
				max = str.length;
			}

			var start = str.indexOf(s[i]);
			str = str.substring(start + 1);
		}

		if(i < s.length){
			str += s[i];
			cache[s[i]] = i + 1;
			i++;
		}
	}

	if(str.length > max){
		max = str.length;
	}

	return max;
}



