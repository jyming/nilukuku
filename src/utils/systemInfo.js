function getBrowser() {
  const ua = navigator.userAgent.toLowerCase()

  if (ua.match(/msie ([\d.]+)/)) {
    return {
      system: 'IE',
      version: ua.match(/msie ([\d.]+)/)[1]
    }
  }

  if (ua.indexOf('trident') > -1 && ua.indexOf('rv:11.0') > -1) {
    return {
      system: 'IE',
      version: '11'
    }
  }

  if (ua.indexOf('edge') > -1) {
    return {
      system: 'IE',
      version: 'edge'
    }
  }

  if (ua.match(/firefox\/([\d.]+)/)) {
    return {
      system: 'Firefox',
      version: ua.match(/firefox\/([\d.]+)/)[1]
    }
  }

  if (ua.match(/chrome\/([\d.]+)/)) {
    return {
      system: 'Chrome',
      version: ua.match(/chrome\/([\d.]+)/)[1]
    }
  }

  if (ua.match(/version\/([\d.]+).*safari/)) {
    return {
      system: 'Safari',
      version: ua.match(/version\/([\d.]+)/)[1]
    }
  }
}

function systemInfo() {
  const {
    system,
    version
  } = getBrowser()

  return {
    system, // 浏览器型号
    version, // 浏览器版本
    windowWidth: window.innerWidth || document.documentElement.clientWidth, // 可使用窗口宽度
    windowHeight: window.innerHeight || document.documentElement.clientHeight // 可使用窗口高度
  }
}

export default systemInfo
