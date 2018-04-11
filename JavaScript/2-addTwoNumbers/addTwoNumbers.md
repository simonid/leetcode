## 题目描述

给定两个非空链表来代表两个非负整数，位数按照逆序方式存储，它们的每个节点只存储单个数字。将这两数相加会返回一个新的链表。
<br>
你可以假设除了数字 0 之外，这两个数字都不会以零开头。
<br>
示例：
<br>

```
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
```


实现：<br>

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

    var c = 0;
    var ret = new ListNode(0);
    var curr = ret;

    while (l1 || l2) {
        var a = l1 ? l1.val : 0;
        var b = l2 ? l2.val : 0;
        var sum = a + b + c;
        c = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
        curr = curr.next;
    }
    if (c) {
        curr.next = new ListNode(c);
    }

    return ret.next;
};
```