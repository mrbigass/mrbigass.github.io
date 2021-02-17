<template>
  <div class="container">
    <div class="markdown" v-html="compiledMarkdown()"></div>
  </div>
</template>

<script lang="ts">
import marked from 'marked';

export default {
  async asyncData(): Promise<{ markdownText: string }> {
    const importedModule = await import('~/markdowns/about_me.md')
    const markdownText: string = importedModule.default
    return { markdownText }
  },
  data() {
    return {
      markdownText: '' as string
    }
  },
  methods: {
    compiledMarkdown(): string {
      return marked(this.markdownText, {})
    }
  }
}
</script>
