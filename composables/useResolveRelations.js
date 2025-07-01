// Resolve relations in Storyblok data
export function useResolveRelations(storyblokUuids, resolveRelations) {
  const dataItems = ref([])
  const storyblokApi = useStoryblokApi()
  const route = useRoute()

  onBeforeMount(async () => {
    // If the route is the home page fix the slug
    let path = route.path === '/' ? '/home' : route.path

    // Get the data from Storyblok
    const { data } = await storyblokApi.get(`cdn/stories${path}`, {
      version: 'published',
      resolve_relations: [resolveRelations],
    })
    dataItems.value = data.rels
  })

  // Ordere the data based on the UUIDs in storyblokData
  const resolvedData = computed(() => {
    return storyblokUuids.value.map(uuid => dataItems.value.find(item => item.uuid === uuid)).filter(item => item)
  })

  // Return the ordered data
  return { resolvedData }
}