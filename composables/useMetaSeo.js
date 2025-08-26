export function useMetaSeo(story) {
  const route = useRoute()
  const defaultImage = 'https://a.storyblok.com/f/299693/3840x2160/7e4435e881/jackbarham.png'
  const defaultDescription = 'Web development, interface design and digital consultancy.'
  const defaultSiteName = 'Jack Barham'

  const getTitle = () => {
    if (route.path === '/') {
      return defaultSiteName
    }
    
    if (route.path.startsWith('/portfolio/')) {
      return `${story.value.content.heading} - ${defaultSiteName}`
    }
    
    return `${story.value.name} - ${defaultSiteName}`
  }

  const getDescription = () => {
    return defaultDescription
  }

  const getImage = () => {
    if (route.path.startsWith('/portfolio/') && story.value.content?.preview?.filename) {
      return story.value.content.preview.filename
    }
    
    return defaultImage
  }

  useSeoMeta({
    title: getTitle,
    description: getDescription,
    ogTitle: getTitle,
    ogImage: getImage,
    ogDescription: getDescription,
    twitterTitle: getTitle,
    twitterImage: getImage,
    twitterDescription: getDescription,
  })
}