import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'CurrencyBitcoinIcon',
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
      "class": "icon icon-tabler icon-tabler-currency-bitcoin"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M6 6h8a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-8"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "8",
        y1: "6",
        x2: "8",
        y2: "18"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "8",
        y1: "12",
        x2: "14",
        y2: "12"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "9",
        y1: "3",
        x2: "9",
        y2: "6"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "13",
        y1: "3",
        x2: "13",
        y2: "6"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "9",
        y1: "18",
        x2: "9",
        y2: "21"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "13",
        y1: "18",
        x2: "13",
        y2: "21"
      }
    }), " "]);
  }
};