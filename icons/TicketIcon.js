import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'TicketIcon',
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
      "class": "icon icon-tabler icon-tabler-ticket"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "15",
        y1: "5",
        x2: "15",
        y2: "7"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "15",
        y1: "11",
        x2: "15",
        y2: "13"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "15",
        y1: "17",
        x2: "15",
        y2: "19"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2"
      }
    }), " "]);
  }
};