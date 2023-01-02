<script setup lang="ts">
import { faimList, storageDemo } from '~/logic/storage'
// sort storageDemo by { clicks } then by { name }
const items = computed(() => {
  return storageDemo.value.sort((a, b) => {
    if (a.clicks === b.clicks)
      return a.name.localeCompare(b.name)

    return b.clicks - a.clicks
  })
})

const reset = () => {
  storageDemo.value = faimList.map(item => ({ ...item }))
}

const toGoogle = () => {
  window.open('https://google.com', '_self')
}
</script>

<template>
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <img src="/assets/icon.svg" class="icon-btn mx-2 text-2xl" alt="extension icon">
    <div>new tab</div>
    <!-- open google.com -->
    <div class="btn mr-2" @click="toGoogle">
      Google Search
    </div>

    <div class="btn" @click="reset">
      Reset
    </div>
    <div grid grid-cols-2>
      <div v-for="item in items" :key="item.name" class="border ma-2 pa-2" @click="item.clicks++">
        <div class="text-sm font-medium">
          {{ item.name }}
        </div>
        <div class="text-sm font-medium">
          {{ item.clicks }}
        </div>
        <div class="text-sm font-medium">
          <a :href="item.url" target="_self"> {{ item.url }} </a>
        </div>
      </div>
    </div>
    <div class="mt-4">
      Powered by Vite <pixelarticons-zap class="align-middle inline-block" />
    </div>
  </main>
</template>
