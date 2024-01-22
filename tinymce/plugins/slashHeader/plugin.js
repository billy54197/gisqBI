/*
 * @Description:
 * @Version:
 * @Author: liupf
 * @Date: 2021-12-01 14:04:29
 * @LastEditors: liupf
 * @LastEditTime: 2022-01-05 11:08:49
 */

tinymce.PluginManager.add("slashHeader", function (editor, url) {
  let openDialog = function () {
    return editor.windowManager.open({
      title: "斜线表头属性",
      body: {
        type: "panel",
        items: [
          {
            type: "input",
            name: "headerText",
            label: "表头文字",
            placeholder: `标题1,标题2,标题3`
          },
          {
            type: "colorinput",
            name: "stroke",
            label: "斜线颜色"
          },
          {
            type: "input",
            name: "strokeWidth",
            label: "斜线宽度"
          },
          {
            type: "listbox",
            name: "initialPoint",
            label: "起始点",
            items: [
              {
                text: "top",
                value: "top"
              },
              {
                text: "bottom",
                value: "bottom"
              }
            ]
          }
        ]
      },
      buttons: [
        {
          type: "cancel",
          text: "Close"
        },
        {
          type: "submit",
          text: "Save",
          primary: true
        }
      ],
      onSubmit: function (api) {
        let data = api.getData();
        const node = getParnetByType(editor.selection.getNode(), "TD");
        line(
          node,
          data.headerText,
          data.strokeWidth,
          data.stroke,
          data.initialPoint
        );
        api.close();
      }
    });
  };

  function charL(text) {
    let len = 0;
    for (let i = 0; i < text.length; i++) {
      if (text.charCodeAt(i) > 127) {
        len += 2;
      } else {
        len++;
      }
    }
    return len;
  }

  function line(
    header,
    renderText,
    line_width = 1,
    line_color = "black",
    type = "top"
  ) {
    let table =
      typeof header == "string" ? document.querySelector(header) : header;
    table.style.backgroundImage = "none";
    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.justifyContent = "space-between";
    div.style.width = "100%";
    div.style.height = "100%";
    table.innerHTML = "";
    table.setAttribute("data-mce-style", table.getAttribute("style"));
    let xpos = 300;
    let ypos = 300;
    const render = renderText.split(",");
    let line_number = render.length - 1 > 2 ? 2 : render.length - 1;
    let nodes = document.createDocumentFragment();
    const canvas = document.createElement("canvas");
    const span = document.createElement("div");
    canvas.width = xpos;
    canvas.height = ypos;
    if (canvas.getContext) {
      let ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, xpos, ypos);
      ctx.fill();
      ctx.lineWidth = line_width;
      ctx.strokeStyle = line_color;
      ctx.beginPath();
      switch (line_number) {
        case 1:
          ctx.moveTo(0, 0);
          ctx.lineTo(xpos, ypos);
          const span0 = span.cloneNode(true);
          span0.style.textAlign = "right";
          span0.style.paddingLeft = "50%";
          span0.textContent = render[0];
          const span1 = span.cloneNode(true);
          span1.style.textAlign = "left";
          span1.style.paddingRight = "50%";
          span1.textContent = render[1];
          nodes.appendChild(span0);
          nodes.appendChild(span1);
          break;
        case 2:
          if (type == "top") {
            ctx.moveTo(0, 0);
            ctx.lineTo(xpos / 2, ypos);
            ctx.moveTo(0, 0);
            ctx.lineTo(xpos, ypos / 2);
            const span0 = span.cloneNode(true);
            span0.style.textAlign = "right";
            span0.style.paddingLeft = "66%";
            span0.textContent = render[0];
            const span1 = span.cloneNode(true);
            span1.style.textAlign = "center";
            span1.style.paddingLeft = "33%";
            span1.style.paddingRight = "33%";
            span1.textContent = render[1];
            const span2 = span.cloneNode(true);
            span2.style.textAlign = "left";
            span2.style.paddingRight = "66%";
            span2.textContent = render[2];
            nodes.appendChild(span0);
            nodes.appendChild(span1);
            nodes.appendChild(span2);
          } else {
            ctx.moveTo(xpos, ypos);
            ctx.lineTo(xpos / 2, 0);
            ctx.moveTo(xpos, ypos);
            ctx.lineTo(0, ypos / 2);
            const span0 = span.cloneNode(true);
            span0.style.textAlign = "right";
            span0.style.paddingLeft = "66%";
            span0.textContent = render[0];
            const span1 = span.cloneNode(true);
            span1.style.textAlign = "center";
            span1.style.paddingLeft = "33%";
            span1.style.paddingRight = "33%";
            span1.textContent = render[1];
            const span2 = span.cloneNode(true);
            span2.style.textAlign = "left";
            span2.style.paddingRight = "66%";
            span2.textContent = render[2];
            nodes.appendChild(span0);
            nodes.appendChild(span1);
            nodes.appendChild(span2);
          }
          break;
        default:
          return 0;
      }
      ctx.stroke();
      ctx.closePath();
      table.style.backgroundImage =
        'url("' + ctx.canvas.toDataURL("image/png", 2) + '")';
      table.style.backgroundSize = "100% 100%";
      table.style.backgroundRepeat = "no-repeat";
      table.innerHTML = "";
      div.appendChild(nodes);
      table.appendChild(div);
      table.setAttribute("data-mce-style", table.getAttribute("style"));
    }
  }

  function judgeElementAncestorType(element, type) {
    if (!element.parentNode) {
      return;
    }
    if (element.tagName === type || element.parentNode.tagName === type) {
      return true;
    }
    if (element.parentNode) {
      return judgeElementAncestorType(element.parentNode, type);
    }
  }

  function getParnetByType(element, type) {
    if (element.tagName === type) {
      return element;
    }
    if (!element.parentNode) {
      return element;
    }
    if (element.parentNode.tagName === type) {
      return element.parentNode;
    }
    if (element.parentNode) {
      return getParnetByType(element.parentNode, type);
    }
  }

  editor.ui.registry.addMenuItem("slashHeader", {
    icon: "slashHeader",
    text: "斜线表头",
    onAction: function () {
      openDialog();
    }
  });

  editor.ui.registry.addContextMenu("slashHeader", {
    update: function (element) {
      return judgeElementAncestorType(element, "TD") ? "slashHeader" : "";
    }
  });

  return {
    getMetadata: function () {
      return {
        name: "slashHeader" //插件名称
      };
    }
  };
});
