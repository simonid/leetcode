## 题目

将字符串 `"PAYPALISHIRING"` 以Z字形排列成给定的行数：（下面这样的形状）

```
P   A   H   N
A P L S I I G
Y   I   R
```


之后按逐行顺序依次排列：``"PAHNAPLSIIGYIR"``

<br> 

实现一个将字符串进行指定行数的转换的函数:<br>

`string convert(string text, int nRows)`;<br>

`convert("PAYPALISHIRING", 3)` 应当返回 `"PAHNAPLSIIGYIR"` 。
<br>


## 分析

再举一个更加通俗的例子：
```
1     7       13 
2   6 8    12 14
3 5   9  11   15
4     10      16
```

这里输入的第二个参数行数应该为4，然后需要的结果是每行的字符的连接<br>

我们可以创建一个二维数组，数组内的每个子数组就存放行数据<br>
比如arr[0] = [1 7 13]
<br>

通过观察，我们发现，每个子数组的每一列都是原字符串竖直方向紧邻的排列的元素。比较难解决的就是中间的那些独立的元素(暂且称作孤岛元素)<br>

当我们遍历完每次紧邻的元素后，接着就安插孤岛元素。孤岛元素排列也有规律，它是逆序安插在子数组中的，而且，最开始安插的是rows-2，也就是第2个子数组中。接着的孤岛元素是安插在序号为rows-2-1的子数组......当安插完孤岛元素后，再次安插紧邻元素，如此反复，最后用map方法将每个子数组的元素一一拼接<br>

呈现的结果如下：<br>
* arr = [[],[],[],[]]
* arr[0] = [1,7,13]; arr[1] = [2,6,8,12,14]; arr[2] = [3,5,9,11,15]; arr[3] = [4,10,16];

## 代码
```js
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string} r
 */

var convert = function(s,numRows){
    if(numRows <= 1){
        return s;
    }
    let str = s.split('');
    let arr = [];
    for(let i=0;i<numRows;i++){
        arr.push([]);
    }
    var i = 0;
    while(i<str.length){
        for(let x=0;x<numRows;x++,i++){
            arr[x].push(str[i]);
        }
        for(let x=numRows-2;x>0;x--,i++){
            arr[x].push(str[i]);
        }
    }
    let r = '';
    arr.map(function(item){
        r = r.concat(item.join(''));
    });
    return r;
};
```

