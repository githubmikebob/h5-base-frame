
/* eslint-disable */

// 由于vw方案得到更多浏览器的兼容,rem 方案暂时废弃(跟js耦合性太高，并且在ssr渲染中体验度也不好)

// 创建一个延迟加载函数等待页面加载完成执行

setTimeout(() => {
  setRem();
}, 1)

function setRem() {
  //初始化
  (function flexible(window, document) {
    var docEl = document.documentElement
    var dpr = window.devicePixelRatio || 1
    // adjust body font size
    function setBodyFontSize() {
      if (document.body) {
        // document.body.style.fontSize = 12 * dpr + 'px'
        document.body.style.fontSize = '16px' // 自定义body字体大小
      } else {
        document.addEventListener('DOMContentLoaded', setBodyFontSize)
      }
    }
    setBodyFontSize()

    // set 1rem = viewWidth / 10
    function setRemUnit() {
      var rem = docEl.clientWidth / 10
      docEl.style.fontSize = rem + 'px'
    }

    setRemUnit()

    // reset rem unit on page resize
    window.addEventListener('resize', setRemUnit)
    window.addEventListener('pageshow', function (e) {
      if (e.persisted) {
        setRemUnit()
      }
    })

    // detect 0.5px supports
    if (dpr >= 2) {
      var fakeBody = document.createElement('body')
      var testElement = document.createElement('div')
      testElement.style.border = '.5px solid transparent'
      fakeBody.appendChild(testElement)
      docEl.appendChild(fakeBody)
      if (testElement.offsetHeight === 1) {
        docEl.classList.add('hairlines')
      }
      docEl.removeChild(fakeBody)
    }
  })(window, document)
}