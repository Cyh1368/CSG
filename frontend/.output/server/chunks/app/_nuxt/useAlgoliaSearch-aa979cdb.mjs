import { b as useState, d as useRuntimeConfig, a as useNuxtApp } from '../server.mjs';
import { computed } from 'vue';

const useAlgoliaRef = () => {
  const nuxtApp = useNuxtApp();
  const algolia = nuxtApp.$algolia;
  return algolia;
};
function useAlgoliaInitIndex(indexName) {
  const algolia = useAlgoliaRef();
  const algoliaIndex = algolia == null ? void 0 : algolia.initIndex(indexName);
  return algoliaIndex;
}
function useAlgoliaSearch(indexName) {
  const config = /* @__PURE__ */ useRuntimeConfig();
  const index = indexName || config.public.algolia.globalIndex;
  if (!index)
    throw new Error("`[@nuxtjs/algolia]` Cannot search in Algolia without `globalIndex` or `indexName` passed as a parameter");
  const algoliaIndex = useAlgoliaInitIndex(index);
  const result = useState(`${index}-search-result`, () => null);
  const search = async ({ query, requestOptions }) => {
    {
      const nuxtApp = useNuxtApp();
      nuxtApp.$algolia.transporter.requester = (await import('@algolia/requester-node-http').then((lib) => lib.default || lib)).createNodeHttpRequester();
    }
    const searchResult = await algoliaIndex.search(query, requestOptions);
    result.value = searchResult;
    return searchResult;
  };
  return {
    result: computed(() => result.value),
    search
  };
}

export { useAlgoliaSearch as u };
//# sourceMappingURL=useAlgoliaSearch-aa979cdb.mjs.map
