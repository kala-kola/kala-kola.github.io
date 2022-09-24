function myMove() {
  let id = null
  const elem = document.getElementById('animate')
  let pos = 0
  clearInterval(id)
  id = setInterval(frame, 5)
  function frame() {
    if (pos == 800) {
      clearInterval(id)
    } else {
      pos++
      elem.style.top = pos + '0'
      elem.style.left = pos + 'px'
    }
  }
}
