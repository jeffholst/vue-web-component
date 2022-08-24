import { ref, getCurrentInstance, onMounted, openBlock, createElementBlock, renderSlot, createElementVNode, toDisplayString, defineCustomElement } from "vue";
var _style_0 = ".button[data-v-1bba48a0]{color:#00f;margin-top:10px}\n";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = { class: "button" };
const _sfc_main = {
  __name: "Button.ce",
  props: {
    start: {
      type: Number,
      default: 0
    }
  },
  setup(__props, { expose }) {
    const props = __props;
    let callback = null;
    const counter = ref(props.start);
    const app = getCurrentInstance();
    onMounted(() => {
      console.log(`Mounted '${app.attrs.id}' custom element`);
    });
    const addCallback = (cb) => {
      callback = cb;
      doCallback();
    };
    const doCallback = () => {
      if (callback) {
        callback(app.attrs.id, counter.value);
      }
    };
    const incrementButton = () => {
      counter.value++;
      doCallback();
    };
    const reset = () => {
      counter.value = props.start;
      doCallback();
    };
    expose({ addCallback, reset });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        renderSlot(_ctx.$slots, "prefix", {}, void 0, true),
        createElementVNode("button", { onClick: incrementButton }, toDisplayString(counter.value), 1)
      ]);
    };
  }
};
var MyButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]], ["__scopeId", "data-v-1bba48a0"]]);
const MyButtonComponent = defineCustomElement(MyButton);
customElements.define("custom-button", MyButtonComponent);
