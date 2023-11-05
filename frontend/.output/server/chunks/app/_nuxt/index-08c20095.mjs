import { u as useAlgoliaSearch } from './useAlgoliaSearch-aa979cdb.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { IconSearch } from '@tabler/icons-vue';
import '../server.mjs';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useAlgoliaSearch("CSG");
    const hits = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "m:30px" }, _attrs))}><div class="flex jc:space-between ai:center"><h1>\u8AB2\u5916\u6D3B\u52D5\uFF1A</h1><div class="flex rel ai:center bg:sky-76 r:10">`);
      _push(ssrRenderComponent(unref(IconSearch), {
        color: "white",
        class: "m:5px|0px|5px|5px"
      }, null, _parent));
      _push(`<input class="mr:10px b:none outline:none r:3px" type="search"></div></div><div class="inline-block w:190px text:center float:right">`);
      if (unref(hits).length) {
        _push(`<div class="bg:sky-76 r:5px color:white"><ul class="list-style:none"><!--[-->`);
        ssrRenderList(unref(hits), (hit) => {
          _push(`<li class="p:10px">${ssrInterpolate(hit.firstname)}</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><section></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-08c20095.mjs.map
