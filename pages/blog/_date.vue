<template>
  <markdown
    :markdownRawText="markdownRawText"
  >
  </markdown>
</template>

<script lang="ts">
import { Context } from 'node-sass';

export default {
  async asyncData(context: Context): Promise<{ markdownRawText: string }> {
    const { params } = context
    const importedModule = await require(`~/markdowns/blog/${params.date}.md`)
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
