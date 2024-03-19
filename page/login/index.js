


document.querySelector('.btn').addEventListener('click', e => {
  console.log(1);
  const form = document.querySelector('.login-form')
  const data = serialize(form, { hash: true, empty: true })
  // console.log(data.mobile.length);
  if (data.mobile.length !== 11) {
    console.log(1);
    myAlert(false, '手机号长度必须为11位')
    return
  }
  if (data.code.length !== 6) {
    myAlert(false, '验证码必须为6位')
    return
  }
  if (data.mobile !== '13888888888' || data.code !== '123456') {
    myAlert(false, '手机号或验证码错误')
    return
  }
  localStorage.setItem('token','123456789')
  myAlert(true, '登陆成功')
  setTimeout(() => {
    location.href = '../public/index.html'
  }, 1500)
})