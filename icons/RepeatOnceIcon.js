import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'RepeatOnceIcon',
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
      "class": "icon icon-tabler icon-tabler-repeat-once"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3-3l3-3"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M11 11l1 -1v4"
      }
    }), " "]);
  }
};