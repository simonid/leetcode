## 题目描述

Given an array of integers, return indices of the two numbers such that they add up to a specific target.
<br>
You may assume that each input would have exactly one solution.
<br>

Example:
<br>
```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

### 翻译
给定一个整数数组，从中找出两个数的下标，使得它们的和等于一个特定的数字。
<br>
可以假设题目有唯一解。
<br>


### 思路
只要判断for循环中目标和target - 数组的任意元素的差值是否在数组中存在(in)，然后把目标的下标push到一个数组里面就可以了<br>


### 实现
```js
var leetcode = function(arr,target){
	var final = [];
	for(i=0;i<arr.length;i++)
		if(target -  arr[i] in arr){
			num2 = arr.indexOf(target-arr[i]); 
            num1 = i;
			final.push(num2,num1)
		}
	console.log(final);
}
console.log(leetcode([2,7,11,15],9));

//[0,1]
```