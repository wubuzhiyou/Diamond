document.querySelector('.btn').addEventListener('click', e => {
  if (document.querySelector('.uname').value === '') {
    myAlert(false, '请输入用户名')
    return
  }
  if (document.querySelector('.email').value === '') {
    myAlert(false, '请输入邮箱')
    return
  }


  if (document.querySelector('.Phone').value === '') {
    myAlert(false, '请输入手机号')
    return
  }


  if (document.querySelector('.title').value === '') {
    myAlert(false, '请输入标题')
    return
  }



  if (document.querySelector('.text').value === '') {
    myAlert(false, '请输入内容')
    return
  }




  myAlert(true, '提交成功，感谢您的反馈')
  setTimeout(() => {
    location.reload()

    location.href = '../public/index.html'
  }, 2000)

})