import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'IdIcon',
  props: {
    size: {
      type: String,
      default: '24'
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        "stroke-width": "2",
        stroke: "currentColor",
        fill: "none",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "icon icon-tabler icon-tabler-id"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "3",
        y: "4",
        width: "18",
        height: "16",
        rx: "3"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "9",
        cy: "10",
        r: "2"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "15",
        y1: "8",
        x2: "17",
        y2: "8"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "15",
        y1: "12",
        x2: "17",
        y2: "12"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "7",
        y1: "16",
        x2: "17",
        y2: "16"
      }
    }), " "]);
  }
};