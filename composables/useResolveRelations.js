// Resolve relations in Storyblok data
export function useResolveRelations(storyblokUuids, resolveRelations) {
  const storyblokApi = useStoryblokApi()
  const route = useRoute()

  // Use Nuxt's useLazyAsyncData for better SSR handling
  const { data: dataItems, pending: loading, error, refresh } = useLazyAsyncData(
    `relations-${route.path}-${resolveRelations}`,
    async () => {
      // Early return if no UUIDs provided
      if (!storyblokUuids.value?.length) return []

      try {
        // Fix path for home route
        const path = route.path === '/' ? '/home' : route.path

        // Fetch relations from Storyblok
        const { data } = await storyblokApi.get(`cdn/stories${path}`, {
          version: 'published',
          resolve_relations: [resolveRelations],
        })
        return data.rels || []
      } catch (err) {
        console.error('Error resolving relations:', err)
        throw err
      }
    },
    {
      default: () => [],
      server: true, // Fetch on server-side
      lazy: true // Don't block navigation
    }
  )

  // Order data based on UUIDs with improved performance
  const resolvedData = computed(() => {
    if (!storyblokUuids.value?.length || !dataItems.value?.length) return []
    
    // Create a lookup map for better performance with large datasets
    const itemMap = new Map(dataItems.value.map(item => [item.uuid, item]))
    return storyblokUuids.value.map(uuid => itemMap.get(uuid)).filter(Boolean)
  })

  return { 
    resolvedData, 
    loading, 
    error, 
    refetch: refresh 
  }
}