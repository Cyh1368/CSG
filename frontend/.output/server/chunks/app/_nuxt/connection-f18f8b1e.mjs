import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "connection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "m:30px" }, _attrs))}><h1>\u60F3\u9023\u7D61\u6211\u5011?</h1><ul class="list-style:none f:20px f:semibold color:gray-60 mt:10px inline-block bt:2|solid|gray-86"><li class="my:10px">Email\uFF1A<a class="color:sky-76" href="mailto:studygroup.cysh@gmail.com">studygroup.cysh@gmail.com</a></li><li class="my:10px">IG\uFF1A<a href="https://www.instagram.com/studygroup_cysh/" class="color:sky-76">studygroup.cysh</a></li></ul></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/connection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=connection-f18f8b1e.mjs.map
