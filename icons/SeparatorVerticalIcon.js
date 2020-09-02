import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'SeparatorVerticalIcon',
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
      "class": "icon icon-tabler icon-tabler-separator-vertical"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "12",
        y1: "4",
        x2: "12",
        y2: "20"
      }
    }), "   ", h("polyline", {
      attrs: {
        points: "8 8 4 12 8 16"
      }
    }), "   ", h("polyline", {
      attrs: {
        points: "16 16 20 12 16 8"
      }
    }), " "]);
  }
};