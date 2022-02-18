class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

const l1 = new ListNode(1)
const l2 = new ListNode(2)
const l3 = new ListNode(3)
l1.next = l2
l2.next = l3

const m1 = new ListNode(1)
const m2 = new ListNode(3)
const m3 = new ListNode(4)
m1.next = m2
m2.next = m3

const mergeList1 = (l1, l2) => {
  if(l1 === null) {
    return l2
  }
  if(l2 === null) {
    return l1
  }
  if(l1.val < l2.val) {
    l1.next = mergeList1(l1.next, l2)
    return l1
  } else {
    l2.next = mergeList1(l1, l2.next)
    return l2
  }
}

console.log(l1, m1, 'before merged');

const mergeList2 = (list1, list2) => {
  const dummyNode = new ListNode(-1)
    let cur = dummyNode
    while(list1 !== null && list2 !== null) {
        if(list1.val < list2.val) {
            cur.next = list1
            list1 = list1.next
        } else {
            cur.next = list2
            list2 = list2.next
        }
        cur = cur.next
    }
    cur.next = list1 === null ? list2 : list1
    return dummyNode.next
}

let res = mergeList1(l1, m2)
console.log(res, 'after merged');
