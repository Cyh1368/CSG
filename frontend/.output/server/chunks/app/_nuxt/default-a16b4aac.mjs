import { defineComponent, unref, useSSRContext, isRef, ref } from 'vue';
import { e as useRouter } from '../server.mjs';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { IconMenu2 } from '@tabler/icons-vue';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@algolia/cache-in-memory';
import 'is-https';

function toValue(r) {
  return typeof r === "function" ? r() : unref(r);
}
function useToggle(initialValue = false, options = {}) {
  const {
    truthyValue = true,
    falsyValue = false
  } = options;
  const valueIsRef = isRef(initialValue);
  const _value = ref(initialValue);
  function toggle(value) {
    if (arguments.length) {
      _value.value = value;
      return _value.value;
    } else {
      const truthy = toValue(truthyValue);
      _value.value = _value.value === truthy ? toValue(falsyValue) : truthy;
      return _value.value;
    }
  }
  if (valueIsRef)
    return toggle;
  else
    return [_value, toggle];
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const [menuv, menu] = useToggle();
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="h:80px flex ai:center color:sky-74 p:10px f:20 f:semibold">`);
      _push(ssrRenderComponent(unref(IconMenu2), {
        onClick: ($event) => unref(menu)(),
        class: "hide@>md mx:20px cursor:pointer"
      }, null, _parent));
      _push(`<ul class="lt:none hide@&lt;md flex ai:center mx:20px"><li class="cursor:pointer inline mx:20px shadow:0|2|sky-80:hover ~300ms|ease-in">\u9996\u9801</li><li class="cursor:pointer inline mx:20px shadow:0|2|sky-80:hover ~300ms|ease-in">\u8AB2\u5916\u6D3B\u52D5</li><li class="cursor:pointer inline mx:20px shadow:0|2|sky-80:hover ~300ms|ease-in">\u63A8\u85A6\u6D3B\u52D5</li><li class="cursor:pointer inline mx:20px shadow:0|2|sky-80:hover ~300ms|ease-in">\u806F\u7D61\u6211\u5011</li></ul></div>`);
      if (unref(menuv)) {
        _push(`<ul class="mx:20px hide@&gt;md color:sky-74 f:20 f:semibold"><li class="cursor:pointer block m:20px|30px">\u9996\u9801</li><li class="cursor:pointer block m:20px|30px">\u8AB2\u5916\u6D3B\u52D5</li><li class="cursor:pointer block m:20px|30px">\u63A8\u85A6\u6D3B\u52D5</li><li class="cursor:pointer block m:20px|30px">\u806F\u7D61\u6211\u5011</li></ul>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-a16b4aac.mjs.map
