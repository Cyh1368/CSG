import { useSSRContext, defineComponent, ref, watch, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import pkg from '@master/css';
const { Style, init } = pkg;
import { IconBrandInstagram, IconBrandDiscordFilled, IconPlus, IconChess, IconArrowBadgeLeft, IconArrowBadgeRight, IconCircleCheck, IconFocus2, IconSettings2, IconBadgeCc } from '@tabler/icons-vue';
import { _ as _export_sfc } from '../server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    Style.extend("classes", {
      btn: "inline-flex b:none center-content font:14 font:semibold font:white bg:sky-74 px:18 h:40 r:4"
    });
    init();
    const imgs = ref(["1.png", "2.png", "3.png", "4.png", "5.png"]);
    const transfroms = ref(0);
    const changp_func = (type) => {
      if (type === "next_") {
        transfroms.value += 100;
      } else {
        transfroms.value -= 100;
      }
    };
    watch(transfroms, (newVal, oldVal) => {
      if (newVal > 0 || newVal < -400) {
        transfroms.value = 0;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx:60px my:30px f:medium" }, _attrs))} data-v-bac45077><section class="my:60px" data-v-bac45077><h1 class="f:40" data-v-bac45077>\u5145\u5BE6\u6B77\u7A0B\uFF0C\u6210\u5C31\u9752\u6625</h1><p class="my:20px color:gray" data-v-bac45077>\u6211\u5011\u662F\u5609\u7FA9\u9AD8\u4E2D\u8B80\u66F8\u6703\uFF0C\u9664\u4E86\u8FA6\u7406\u6BCF\u5929\u4E2D\u5348\u7684\u5BE6\u9AD4\u8B80\u66F8\u6703\u5916<br data-v-bac45077>\u4E5F\u6709\u7269\u7406\u8FAF\u8AD6\u968A\u4F0D\uFF0C\u4E26\u5B9A\u671F\u8209\u8FA6\u897F\u6D0B\u68CB\u6BD4\u8CFD\u3001\u7DDA\u4E0A\u8B80\u66F8\u6703\u7B49\u8AB2\u5916\u6D3B\u52D5<br data-v-bac45077>\u9664\u4E86\u5145\u5BE6\u4F60\u7684\u5B78\u7FD2\uFF0C\u66F4\u70BA\u9AD8\u4E2D\u751F\u6D3B\u7559\u4E0B\u6EFF\u6EFF\u56DE\u61B6!</p><div class="inline-block" data-v-bac45077><a class="btn m:10px" target="_blank" href="https://www.instagram.com/studygroup_cysh/" data-v-bac45077>`);
      _push(ssrRenderComponent(unref(IconBrandInstagram), { class: "mr:3px" }, null, _parent));
      _push(`\u67E5\u770BIG\u7C89\u7D72\u5C08\u696D</a><a class="btn m:10px" target="_blank" href="https://bit.ly/45Y9AIX" data-v-bac45077>`);
      _push(ssrRenderComponent(unref(IconBrandDiscordFilled), { class: "mr:3px" }, null, _parent));
      _push(`\u52A0\u5165\u6211\u5011Discord</a><a class="btn m:10px" target="_blank" href="https://bit.ly/48D54C2" data-v-bac45077>`);
      _push(ssrRenderComponent(unref(IconPlus), null, null, _parent));
      _push(`\u52A0\u5165\u6211\u5011!!</a><a class="btn m:10px purple-button" target="_blank" href="https://bit.ly/3QIK9qp" data-v-bac45077>`);
      _push(ssrRenderComponent(unref(IconChess), null, null, _parent));
      _push(`\u897F\u6D0B\u68CB\u9326\u6A19\u8CFD (\u540D\u984D\u6709\u9650)</a></div></section><section class="my:60px w:250px@&lt;sm w:600@&gt;sm" data-v-bac45077><h1 data-v-bac45077>\u6211\u5011\u662F\u8AB0\uFF1A</h1><p class="f:20 color:gray mt:10px" data-v-bac45077> CSG \u5168\u540D\u70BA CYSH Study Group\uFF0C\u5373\u5609\u7FA9\u9AD8\u4E2D\u8B80\u66F8\u6703\u3002<br data-v-bac45077> \u5BE6\u9AD4\u8B80\u66F8\u6703\u65BC\u6BCF\u5929\u5348\u4F11\u6642\u9593\u8209\u884C\uFF0C<br data-v-bac45077> \u5728\u8AB2\u9918\u6642\u9593\u4EA6\u6703\u8209\u8FA6\u5404\u7A2E\u6D3B\u52D5\u3002<br data-v-bac45077> \u6211\u5011\u6709IG\u5E33\u865F\u8207Discord\u793E\u7FA4\uFF0C\u6B61\u8FCE\u52A0\u5165\u6211\u5011! </p></section><section class="my:40px" data-v-bac45077><ul class="list-style:none flex-wrap:nowrap flex overflow:hidden" data-v-bac45077><!--[-->`);
      ssrRenderList(unref(imgs), (img) => {
        _push(`<li class="${ssrRenderClass(`overflow:hidden flex:0|0|auto ~300ms|ease-in translateX(${unref(transfroms)}%)`)}" data-v-bac45077><img${ssrRenderAttr("src", img)} class="w:100vw" data-v-bac45077></li>`);
      });
      _push(`<!--]--></ul><div class="flex jc:center bottom:100px@&gt;md bottom:80px@&lt;md rel" data-v-bac45077>`);
      _push(ssrRenderComponent(unref(IconArrowBadgeLeft), {
        onClick: ($event) => changp_func("next_"),
        height: "40px",
        width: "40px",
        color: "white",
        class: "m:20px cursor:pointer shadow:0|3px|white:hover ~300ms|ease-in"
      }, null, _parent));
      _push(ssrRenderComponent(unref(IconArrowBadgeRight), {
        onClick: ($event) => changp_func("pre"),
        height: "40px",
        width: "40px",
        color: "white",
        class: "m:20px cursor:pointer shadow:0|3px|white:hover ~300ms|ease-in"
      }, null, _parent));
      _push(`</div></section><section class="my:60px w:250px@&lt;sm w:600@&gt;sm" data-v-bac45077><h1 data-v-bac45077>\u8B80\u66F8\u6703</h1><ul class="inline-block list-style:none text:left mt:10px bt:2|solid|gray-86" data-v-bac45077><li class="my:10px flex" data-v-bac45077>`);
      _push(ssrRenderComponent(unref(IconCircleCheck), { color: "gray" }, null, _parent));
      _push(`\u9031\u4E00\u5316\u5B78\uFF1A\u7531\u5B78\u7AF6\u9078\u624B\u8207\u79D1\u5B78\u73ED\u540C\u5B78\u50B3\u6388\u6709\u6A5F\u5316\u5B78\u77E5\u8B58</li><li class="my:10px flex" data-v-bac45077>`);
      _push(ssrRenderComponent(unref(IconCircleCheck), { color: "gray" }, null, _parent));
      _push(`\u9031\u4E8C\u7269\u8FAF\uFF1A\u8A0E\u8AD6\u4E26\u7814\u7A76 2024 TYPT \u9078\u984C\uFF0C\u7D44\u968A\u53C3\u52A0\u6BD4\u8CFD</li><li class="my:10px flex" data-v-bac45077>`);
      _push(ssrRenderComponent(unref(IconCircleCheck), { color: "gray" }, null, _parent));
      _push(`\u9031\u4E09\u6578\u5B78\uFF1A\u5728\u5169\u4F4D\u8001\u5E2B\u7684\u5E36\u9818\u4E0B\u7531\u5B78\u751F\u8A2D\u8A08\u4E26\u8B1B\u6388\u7AF6\u8CFD\u984C</li><li class="my:10px flex" data-v-bac45077>`);
      _push(ssrRenderComponent(unref(IconCircleCheck), { color: "gray" }, null, _parent));
      _push(`\u9031\u56DB\u751F\u7269\uFF1A\u76F4\u653B\u5927\u5B78\u8AB2\u7A0B\uFF0C\u70BA\u751F\u5967\u505A\u6E96\u5099</li><li class="my:10px flex" data-v-bac45077>`);
      _push(ssrRenderComponent(unref(IconCircleCheck), { color: "gray" }, null, _parent));
      _push(`\u9031\u4E94\u7269\u7406\uFF1A\u4EE5\u7269\u5967\u70BA\u76EE\u6A19\uFF0C\u5B78\u7FD2\u8D85\u8D8A\u9AD8\u4E2D\u7684\u7269\u7406\u6982\u5FF5</li><li class="my:10px flex" data-v-bac45077>`);
      _push(ssrRenderComponent(unref(IconPlus), { color: "gray" }, null, _parent));
      _push(`\u7DDA\u4E0A\u8B80\u66F8\u6703\uFF1A\u7531\u540C\u5B78\u64D4\u4EFB\u8B1B\u5E2B\uFF0C\u65BC\u5047\u65E5\u5206\u4EAB\u7A0B\u5F0F\u3001\u8EDF\u9AD4\u4F7F\u7528\u3001\u8A9E\u8A00\u5B78\u7FD2\u7B49\u77E5\u8B58</li></ul></section><section class="my:60px w:250px@&lt;sm w:600@&gt;sm" data-v-bac45077><h1 data-v-bac45077>\u548C\u6211\u5011\u4E92\u52D5~</h1><p class="inline-block f:20 color:gray mt:10px" data-v-bac45077> \u6211\u5011\u6709\u4E00\u500B Discord \u4F3A\u670D\u5668\uFF0C\u9664\u4E86\u4E0D\u5B9A\u671F\u8FA6\u9069\u5408\u5927\u773E\u7684\u7DDA\u4E0A\u8B80\u66F8\u6703\u5916\uFF0C \u4E5F\u6709\u4E00\u500B\u6EAB\u6696\u7684\u793E\u7FA4 (\u81F3\u5C11\u76EE\u524D\u5982\u6B64) \u5FEB\u9EDE\u4F86\u5427! </p><div class="block" data-v-bac45077><a target="_blank" href="https://bit.ly/45Y9AIX" class="f:18 text:center flex color:gray-60 shadow:0|2|gray-60:hover ~300ms|ease-in" data-v-bac45077>`);
      _push(ssrRenderComponent(unref(IconBrandDiscordFilled), null, null, _parent));
      _push(` Discord</a></div></section><section data-v-bac45077><h1 data-v-bac45077>\u76EE\u524D\u5E79\u90E8\u8077\u4F4D\u6709\uFF1A</h1><ul class="list-style:none inline-block mt:10px bt:2|solid|gray-86" data-v-bac45077><li class="my:10px flex color:gray" data-v-bac45077>`);
      _push(ssrRenderComponent(unref(IconFocus2), { color: "gray" }, null, _parent));
      _push(`\u7BA1\u7406\u54E1\uFF1A\u8655\u7406\u4F3A\u670D\u5668 ticket\u3001\u7DB2\u7AD9\u7DAD\u8B77\u7B49</li><li class="my:10px flex color:gray" data-v-bac45077>`);
      _push(ssrRenderComponent(unref(IconBrandInstagram), { color: "gray" }, null, _parent));
      _push(`\u516C\u95DC\uFF1A\u7D93\u71DF IG\u3001\u8655\u7406\u96FB\u5B50\u90F5\u4EF6\u7B49\u3002</li><li class="my:10px flex color:gray" data-v-bac45077>`);
      _push(ssrRenderComponent(unref(IconSettings2), { color: "gray" }, null, _parent));
      _push(`\u8B1B\u5E2B\uFF1A\u5047\u65E5\u6642\u9593\u5206\u4EAB\u4EFB\u4F55 (\u5408\u6CD5\u7684) \u77E5\u8B58!</li><a class="btn mt:20px flex" target="_blank" href="https://bit.ly/48D54C2" data-v-bac45077>`);
      _push(ssrRenderComponent(unref(IconPlus), null, null, _parent));
      _push(`\u52A0\u5165\u6211\u5011!!</a></ul></section><div class="w:100% h:20px text:center" data-v-bac45077><a target="_blank" href="https://github.com/TommcyOWO" class="flex jc:center color:gray" data-v-bac45077>`);
      _push(ssrRenderComponent(unref(IconBadgeCc), null, null, _parent));
      _push(` Dev by Tomycat</a></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bac45077"]]);

export { index as default };
//# sourceMappingURL=index-70324b32.mjs.map
