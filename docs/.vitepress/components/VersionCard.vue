<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface VersionInfo {
  version: string
  release_name: string
  published_at: string
}

const versionInfo = ref<VersionInfo | null>(null)
const loading = ref(true)
const error = ref(false)

onMounted(async () => {
  try {
    const response = await fetch('https://duckov-custom-model-release-version.ritsukage.com/')
    const data = await response.json()
    versionInfo.value = data
  } catch (e) {
    console.error('Failed to fetch version:', e)
    error.value = true
  } finally {
    loading.value = false
  }
})

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<template>
  <span v-if="loading" class="version-badge loading">加载中...</span>
  <span v-else-if="error" class="version-badge error">无法获取版本</span>
  <span v-else-if="versionInfo" class="version-badge">
    v{{ versionInfo.version }}
  </span>
</template>

<style scoped>
.version-badge {
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  border-radius: 12px;
  transition: transform 0.2s;
}

.version-badge:hover {
  transform: translateY(-2px);
}

.version-badge.loading {
  color: var(--vp-c-text-2); 
}

.version-badge.error {
  color: var(--vp-c-danger-1); 
}
</style>