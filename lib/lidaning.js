'use strict';

let auther='lidaning'
let email='453882101@qq.com'

function greeting(){
  return 'Hello from lidaning.js'
}

function formatDate(row, column) {
  let data = row[column.property]
  if (data == null) {
    return null
  }
  let dt = new Date(data)
  return dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate()
}

function formatTime(row, column) {
  let data = row[column.property]
  if (data == null) {
    return null
  }
  let dt = new Date(data)
  return dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds()
}

function formatDateTime(row, column) {
  let data = row[column.property]
  if (data == null) {
    return null
  }
  let dt = new Date(data)
  return dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate() + ' ' + dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds()
}

function treeToArray(root) {
  if (!root) return [];
  const result = [];
  const dfs = (node) => {
    result.push(node.val);
    for (let child of node.children) {
      dfs(child);
    }
  };
  dfs(root);
  return result;
}

const root = {
  val: 1,
  children: [
    { val: 2, children: [{ val: 5, children: [] }, { val: 6, children: [] }] },
    {
      val: 3,
      children: [{ val: 7, children: [] }, { val: 8, children: [] }],
    },
    { val: 4, children: [] },
  ],
};
console.log(treeToArray(root)); // [1, 2, 3, 4, 5, 6, 7, 8]

export default {greeting, auther, email, treeToArray}
