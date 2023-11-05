import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { Style, init } from '@master/css';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "recommended_activities",
  __ssrInlineRender: true,
  setup(__props) {
    Style.extend("classes", {
      input: "p:5px|5px outline:none shadow:0|1|gray-80 shadow:0|2|blue-60:focus ~300ms|ease-in border:none bg:gray-86:hover",
      btn: "inline-flex b:none center-content font:14 font:semibold font:white bg:sky-74 m:10px px:18 h:40 r:4"
    });
    init();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "m:30px jc:center flex" }, _attrs))}><div class="text:center b:2|solid|sky-76 r:10px"><h1 class="mt:20">\u63A8\u85A6\u6D3B\u52D5</h1><div class="flex@&gt;md jc:space-between@&gt;md font:semibold color:gray-60"><div class="flex:1@&gt;md"><div class="m:30px|10px"><label class="block m:0|20px">\u540D\u7A31\uFF1A</label><input class="p:5px|5px outline:none shadow:0|1|gray-80 shadow:0|2|blue-60:focus ~300ms|ease-in border:none bg:gray-86:hover" type="text"></div><div class="m:30px|10px"><label class="block m:0|20px">\u4E3B\u8FA6\u55AE\u4F4D\uFF1A</label><input class="p:5px|5px outline:none shadow:0|1|gray-80 shadow:0|2|blue-60:focus ~300ms|ease-in border:none bg:gray-86:hover" type="text"></div><div class="m:30px|10px"><label class="block m:0|20px">\u5730\u9EDE\uFF1A</label><input class="p:5px|5px outline:none shadow:0|1|gray-80 shadow:0|2|blue-60:focus ~300ms|ease-in border:none bg:gray-86:hover" type="text"></div></div><div class="flex:1@&gt;md"><div class="m:30px|10px"><label class="block m:0|20px">\u6642\u9593\uFF1A</label><input class="p:5px|5px outline:none shadow:0|1|gray-80 shadow:0|2|blue-60:focus ~300ms|ease-in border:none bg:gray-86:hover" type="text"></div><div class="m:30px|10px"><label class="block m:0|20px">\u8CBB\u7528\uFF1A</label><input class="p:5px|5px outline:none shadow:0|1|gray-80 shadow:0|2|blue-60:focus ~300ms|ease-in border:none bg:gray-86:hover" type="text"></div><div class="m:30px|10px"><label class="block m:0|20px">\u5167\u5BB9\uFF1A</label><textarea class="p:5px|5px outline:none shadow:0|1|gray-80 shadow:0|2|blue-60:focus ~300ms|ease-in border:none bg:gray-86:hover w:200px h:100px resize:none"></textarea></div></div><div class="flex:1@&gt;md"><div class="m:30px|10px"><label class="block m:0|20px">\u5B98\u7DB2\uFF1A</label><input class="p:5px|5px outline:none shadow:0|1|gray-80 shadow:0|2|blue-60:focus ~300ms|ease-in border:none bg:gray-86:hover" type="text"></div><div class="m:30px|10px"><label class="block m:0|20px">\u5831\u540D\u9023\u7D50\uFF1A</label><input class="p:5px|5px outline:none shadow:0|1|gray-80 shadow:0|2|blue-60:focus ~300ms|ease-in border:none bg:gray-86:hover" type="text"></div><div class="m:30px|10px"><label class="block m:0|20px">\u806F\u7D61\u65B9\u5F0F\uFF1A</label><textarea class="input resize:none w:200px h:100px"></textarea></div></div></div><button class="btn">\u9001\u51FA</button></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/recommended_activities.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=recommended_activities-e91f39f8.mjs.map
