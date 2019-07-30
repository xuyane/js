class jQuery {
  constructor(seletor) {
    let slice = Array.prototype.slice;
    console.log('slice', slice);
    let dom = slice.call(document.querySelectorAll(seletor));
    console.log('dom', dom);
    let len = dom ? dom.length : 0
    for (let i = 0; i < len; i++) {
      this[i] = dom[i]
    }
    this.length = len
    this.seletor = seletor || ''
    console.log(this.length,this.seletor)
  }
  append(node) {

  }
  addClass(name) {

  }
  html(data) {

  }
  // 此处省略N个API
}

window.$ = function (seletor) {
  return new jQuery(seletor)
}

var $p = $('p')
console.log($p)
console.log($p.addClass)


