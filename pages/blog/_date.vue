<template>
  <div class="markdown" v-html="compiledMarkdown()"></div>
</template>

<script lang="ts">
import marked from 'marked';

export default {
  async asyncData({ params }): Promise<{ markdownText: string }> {
    const importedModule = await import(`~/markdowns/blog/${params.date}.md`)
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
