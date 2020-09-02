import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'NotesIcon',
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
      "class": "icon icon-tabler icon-tabler-notes"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "5",
        y: "3",
        width: "14",
        height: "18",
        rx: "2"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "9",
        y1: "7",
        x2: "15",
        y2: "7"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "9",
        y1: "11",
        x2: "15",
        y2: "11"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "9",
        y1: "15",
        x2: "13",
        y2: "15"
      }
    }), " "]);
  }
};