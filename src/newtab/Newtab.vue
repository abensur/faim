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

const countAndGo = (item: any) => {
  item.clicks++
  window.open(item.url, '_self')
}
</script>

<template>
  <main class="px-4 pb-10 text-gray-700 dark:text-gray-200">
    <header pt-2 px-2 flex>
      <div class="btn ml-auto" @click="reset">
        Reset click count
      </div>
    </header>
    <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div v-for="item in items" :key="item.name" class="flex flex-wrap border ma-2 pa-2 cursor-pointer hover:border-cyan" @click="countAndGo(item)">
        <div class="w-120px text-center">
          <img :src="`/assets/${item.image}.png`" alt="extension icon">
          <small>made with Midjourney</small>
        </div>
        <div class="flex-1 px-2">
          <div class="text-lg font-medium">
            <a :href="item.url" target="_self"> {{ item.name }}</a>
            <!-- <sup text-xs>{{ item.clicks }}</sup> -->
          </div>
          <p class="text-11px">
            {{ item.description }}
            <br><small>made with {{ item.description_source }}</small>
          </p>
        </div>
      </div>
    </div>
    <div class="mt-4">
      Powered by Vite <pixelarticons-zap class="align-middle inline-block" />
    </div>
  </main>
</template>
