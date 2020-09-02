import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'MistIcon',
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
      "class": "icon icon-tabler icon-tabler-mist"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M5 5h3m4 0h9"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M3 10h11m4 0h1"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M5 15h5m4 0h7"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M3 20h9m4 0h3"
      }
    }), " "]);
  }
};