import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'PaletteIcon',
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
      "class": "icon icon-tabler icon-tabler-palette"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 21a9 9 0 1 1 0 -18a9 8 0 0 1 9 8a4.5 4 0 0 1 -4.5 4h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "7.5",
        cy: "10.5",
        r: ".5",
        fill: "currentColor"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "12",
        cy: "7.5",
        r: ".5",
        fill: "currentColor"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "16.5",
        cy: "10.5",
        r: ".5",
        fill: "currentColor"
      }
    }), " "]);
  }
};