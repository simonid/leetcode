
## 4. 两个排序数组的中位数

有两个大小为 `m` 和 `n` 的排序数组 `nums1` 和 `nums2` 。
<br>
请找出两个排序数组的中位数并且总的运行时间复杂度为 `O(log(m+n))` 。
<br>
示例 1:

```
nums1 = [1, 3]
nums2 = [2]
```

中位数是 2.0

<br> 

示例 2:

```
nums1 = [1, 2]
nums2 = [3, 4]
```

中位数是 (2 + 3)/2 = 2.5

<br>

### 解题思路
将两个数组组合成一个，然后按从小到到排序，判断元素个数的奇偶性再筛选元素

#### 实现

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1,nums2){
    var len1 = nums1.length;
    var len2 = nums2.length;
    var mid = Math.floor((len1+len2)/2);
    console.log(mid);
    //var mid = (len1+len2)/2 : 

    var nArr = nums1.concat(nums2);
    console.log(nArr)
    sortArr = nArr.sort(function(a,b){
        return a-b;
    })
    console.log(sortArr);
    var s;
    
    s = (len1+len2)%2 ? s = sortArr[mid]; : (sortArr[mid-1] + sortArr[mid])/2;
    console.log(s);
    return s;
}
```




