import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'ExchangeIcon',
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
      "class": "icon icon-tabler icon-tabler-exchange"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "5",
        cy: "18",
        r: "2"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "19",
        cy: "6",
        r: "2"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M19 8v5a5 5 0 0 1 -5 5h-3l3 -3m0 6l-3 -3"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M5 16v-5a5 5 0 0 1 5 -5h3l-3 -3m0 6l3 -3"
      }
    }), " "]);
  }
};