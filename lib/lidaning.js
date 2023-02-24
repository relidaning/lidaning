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

function tree2List(tree, list){
  if(!list)
    list=[]
  tree.map(node=>{
    list.push(node)
    if(node.children && node.children.length!==0){
      tree2List(node.children, list)
      delete node.children
    }
  })
  return list
}

export default {greeting, tree2List, auther, email}
