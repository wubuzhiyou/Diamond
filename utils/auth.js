
//判断本地有没有token，没有则跳转到登录页面（除登录页面，以外的其他所有页面均使用）
const token = localStorage.getItem('token')
// console.log(token);
if (token === null) {
  location.href = '../login/index.html'
}



// 退出功能，需要同时删除token
document.querySelector('.quit').addEventListener('click', e => {
  localStorage.removeItem('token')
  myAlert(true, '退出成功')
  setTimeout(() => {
    location.href = '../login/index.html'
  }, 1500)
})