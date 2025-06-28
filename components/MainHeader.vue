<template>
  <header 
    class="header fixed top-0 left-0 w-full z-50 transform transition-transform duration-300 ease-in-out" 
    :class="headerVisible ? 'translate-y-0' : '-translate-y-full'"
  >
    
    <!-- Main Header -->
    <div class="bg-brand-purple relative z-50">
      <div class="h-16 md:h-18 flex justify-between items-center layout-full">
        
        <!-- Title -->
        <h1 class="text-2xl md:text-3xl font-heading text-white mb-0.5 md:mb-1">
          <NuxtLink to="/" @click="closeMobileMenu()">{{ appTitle }}</NuxtLink>
        </h1>
        
        <!-- Desktop Navigation -->
        <nav aria-label="Main navigation">
          <ul class="hidden md:flex md:space-x-12 lg:space-x-20 mb-0.5">
            <li v-for="page in pages" :key="page.url">
              <NuxtLink :to="page.url" class="relative group">
                <span class="block font-heading font-medium tracking-wide text-base text-white md:text-lg">{{ page.title }}</span>
                <span class="relative block">
                  <span class="absolute left-0 bottom-0 h-[2px] bg-white w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out origin-left opacity-90"></span>
                </span>
              </NuxtLink>
            </li>
          </ul>
        </nav>
        
        <!-- Toggle Menu Button -->
        <div @click="toggleMobileMenu()" class="relative z-50 visible md:hidden w-8 h-8 cursor-pointer">
          <svgo-burger v-if="!menuOpen" filled class="text-white" />
          <svgo-close v-else filled class="text-white" />
        </div>
        
      </div>
    </div>
    
    <!-- Mobile Navigation -->
    <nav 
      aria-label="Mobile navigation"
      :id="menuOpen ? 'mobile-navigation' : undefined"
      class="absolute -z-10 left-0 w-full bg-brand-purple p-12 transform transition-transform ease-in-out duration-200"
      :class="menuOpen ? 'translate-y-0' : '-translate-y-full'"
      :style="{ top: '64px', height: 'calc(100dvh - 64px)' }"
    >
      <ul class="space-y-4">
        <li 
          v-for="(page, index) in pages" 
          :key="page.url"
          class="transform transition-all ease-in-out duration-300"
          :class="menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'"
          :style="{ transitionDelay: menuOpen ? `${200 + (index * 150)}ms` : '0ms' }"
        >
          <NuxtLink 
            :to="page.url" 
            @click="closeMobileMenu"
            class="block text-3xl font-heading font-medium text-white tracking-wide py-3"
          >{{ page.title }}</NuxtLink>
        </li>
      </ul>
      
    </nav>

  </header>
</template>

<script setup>
const appTitle = useRuntimeConfig().public.appTitle

const pages = [
  {
    title: 'Home',
    url: '/'
  },
  {
    title: 'About',
    url: '/about'
  },
  {
    title: 'Portfolio',
    url: '/portfolio'
  },
  {
    title: 'Contact',
    url: '/contact'
  }
]

// Mobile menu state
const menuOpen = ref(false)

// Header visibility state
const headerVisible = ref(true)
const lastScrollY = ref(0)
const scrollDirection = ref('up')

// Mobile menu functions
const toggleMobileMenu = () => {
  menuOpen.value = !menuOpen.value
  updateBodyClass()
}

const closeMobileMenu = () => {
  menuOpen.value = false
  updateBodyClass()
}

// Lock/unlock body scroll
const updateBodyClass = () => {
  if (import.meta.client) {
    if (menuOpen.value) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }
}

// Close menu when route changes
const router = useRouter()
router.afterEach(() => {
  closeMobileMenu()
})

// Cleanup on unmount
onUnmounted(() => {
  if (import.meta.client) {
    document.body.classList.remove('overflow-hidden')
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', handleResize)
  }
})

// Handle scroll for header show/hide
const handleScroll = () => {
  if (!import.meta.client) return
  
  const currentScrollY = window.scrollY
  
  // At top of page - always show header
  if (currentScrollY <= 50) {
    headerVisible.value = true
    lastScrollY.value = currentScrollY
    return
  }
  
  // Determine scroll direction
  if (currentScrollY > lastScrollY.value) {
    // Scrolling down - hide header
    scrollDirection.value = 'down'
    headerVisible.value = false
  } else if (currentScrollY < lastScrollY.value) {
    // Scrolling up - show header
    scrollDirection.value = 'up'
    headerVisible.value = true
  }
  
  lastScrollY.value = currentScrollY
}

// Handle window resize to close mobile menu
const handleResize = () => {
  if (menuOpen.value) {
    closeMobileMenu()
  }
}

// Setup scroll and resize listeners
onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)
  }
})
</script>