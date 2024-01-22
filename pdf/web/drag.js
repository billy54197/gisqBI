/*
 * @Description: 
 * @Version: 
 * @Author: liupf
 * @Date: 2021-08-13 19:24:25
 * @LastEditors: liupf
 * @LastEditTime: 2022-02-12 14:55:59
 */
'use strict';

var ElectronicSeal = (function ElectronicSeal() {
  function $(id) {
    return document.getElementById(id);
  }

  function createDraggableObject() {
    return {
      obj: null,
      left: 0,
      top: 0,
      oldX: 0,
      oldY: 0,
      pWidth: 0,
      pHeight: 0,
      isMouseLeftButtonDown: false,
      init: function (obj, config) {
        this.obj = obj;
        var that = this;
        this.pWidth = this.obj.parentNode.scrollWidth - parseInt(config.width)
        this.pHeight = this.obj.parentNode.scrollHeight - parseInt(config.height)

        this.obj.style.top = (this.pHeight - 2 * parseInt(config.height)) + 'px';
        this.obj.style.left = (this.pWidth - 2 * parseInt(config.width)) + 'px';
        this.obj.onmousedown = function (args) {
          var evt = args || event;
          that.isMouseLeftButtonDown = true;
          that.oldX = evt.clientX;
          that.oldY = evt.clientY;
          if (this.currentStyle) {
            that.left = parseInt(this.currentStyle.left);
            that.top = parseInt(this.currentStyle.top);
          } else {
            var divStyle = document.defaultView.getComputedStyle(this, null);
            that.left = parseInt(divStyle.left);
            that.top = parseInt(divStyle.top);
          }
        };
        window.onmousemove = function (args) {
          that.move(args || event);
        };
        this.obj.onmouseup = function () {
          that.isMouseLeftButtonDown = false;
        };
      },
      move: function (evt) {
        if (this.isMouseLeftButtonDown) {
          var dx = parseInt(evt.clientX - this.oldX);
          var dy = parseInt(evt.clientY - this.oldY);
          if (0 < this.left + dx && this.left + dx < this.pWidth) {
            this.obj.style.left = (this.left + dx) + 'px';
          }
          if (0 < this.top + dy && this.top + dy < this.pHeight) {
            this.obj.style.top = (this.top + dy) + 'px';
          }

        }
      }
    };
  }


  return {
    config: {
      width: '100px',
      height: '100px',
      pageNumber: 1
    },
    init: function init(config = {}) {
      if (document.querySelector('#ElectronicSeal')) {
        document.querySelector('#ElectronicSeal').remove()
      }
      var PageNumber=PDFViewerApplication.pdfViewer._currentPageNumber;
      var Scale = PDFViewerApplication.pdfViewer._currentScale
      this.config = Object.assign(this.config, config)
      this.config.width = (parseInt(this.config.width) * Scale) + 'px'
      this.config.height = (parseInt(this.config.height) * Scale) + 'px'
      this.config.pageNumber = PageNumber
      var drag = document.createElement('div');

      for (var key in this.config) {
        drag.style[key] = this.config[key]
      }

      drag.id = 'ElectronicSeal';
      drag.classList.add('dragElectronicSeal');

      var pageList = document.querySelectorAll('.textLayer')
      pageList[PageNumber - 1].parentNode.appendChild(drag)
      var obj = createDraggableObject();
      obj.init($('ElectronicSeal'), this.config);

      // var ele = document.querySelector('#viewerContainer');

      // if (ele.scrollHeight > ele.clientHeight) {
      //   ele.scrollTop = ele.scrollHeight;
      //   setTimeout(() => {
      //     var pageList = document.querySelectorAll('.textLayer')
      //     pageList[pageList.length - 1].parentNode.appendChild(drag)
      //     var obj = createDraggableObject();
      //     obj.init($('ElectronicSeal'), this.config);
      //   }, 500);
      // }
    },
    cleanup: function cleanup() {
      if (document.querySelector('#ElectronicSeal')) {
        document.querySelector('#ElectronicSeal').remove()
      }
    },

    getOffSet() {
      var drag = document.querySelector('#ElectronicSeal')
      var Scale = PDFViewerApplication.pdfViewer._currentScale
      if (!drag) {
        return [0, 0, this.config.pageNumber]
      }
      var x = (parseInt(drag.style.left) + parseInt(this.config.width) / 2) / Scale
      var y = (drag.parentNode.scrollHeight - parseInt(drag.style.top) - parseInt(this.config.height) / 2) / Scale
      return [x, y, this.config.pageNumber]
    }
  }
})();
