import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'BrandRedditIcon',
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
      "class": "icon icon-tabler icon-tabler-brand-reddit"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 8c2.648 0 5.028 .826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36 C21 18.09 16.971 21 12 21c-4.875 0-8.845-2.8-8.996-6.294L3 14.5h0a2.5 2.5 0 0 1 2.326 -4.36C6.972 8.827 9.352 8 12 8z"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 8l1-5 6 1"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "19",
        cy: "4",
        r: "1"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "9",
        cy: "13",
        r: ".5",
        fill: "currentColor"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "15",
        cy: "13",
        r: ".5",
        fill: "currentColor"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M10 17c.667 .333 1.333 .5 2 .5s1.333 -.167 2 -.5"
      }
    }), " "]);
  }
};