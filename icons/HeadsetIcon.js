import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'HeadsetIcon',
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
      "class": "icon icon-tabler icon-tabler-headset"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "4",
        y: "13",
        rx: "2",
        width: "4",
        height: "6"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "16",
        y: "13",
        rx: "2",
        width: "4",
        height: "6"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M4 15v-3a8 8 0 0 1 16 0v3"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M18 19a6 3 0 0 1 -6 3"
      }
    }), " "]);
  }
};