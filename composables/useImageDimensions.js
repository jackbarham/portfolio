// Get the image dimensions from Storyblok image URLs
export const useImageDimensions = () => {
  const imageWidth = (filename) => {
    const match = filename.match(/\/(\d+)x(\d+)\//)
    return match ? parseInt(match[1], 10) : null
  }
  const imageHeight = (filename) => {
    const match = filename.match(/\/(\d+)x(\d+)\//)
    return match ? parseInt(match[2], 10) : null
  }

  return {
    imageWidth,
    imageHeight,
  }
}