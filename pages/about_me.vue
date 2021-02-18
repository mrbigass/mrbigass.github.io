<template>
  <markdown
    :markdownRawText="markdownRawText"
  >
  </markdown>
</template>

<script lang="ts">
export default {
  async asyncData(): Promise<{ markdownRawText: string }> {
    const importedModule = await require('~/markdowns/about_me.md')
    const markdownRawText: string = importedModule.default
    return { markdownRawText }
  },
  data() {
    return {
      markdownRawText: ''
    }
  }
}
</script>
