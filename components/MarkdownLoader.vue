<template>
  <div>
    <markdown
      :markdownRawText="markdownRawText"
      >
    </markdown>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Markdown from '~/components/Markdown.vue';

@Component({
  components: {
    Markdown
  }
})
export default class MarkdownLoader extends Vue {
  @Prop()
  markdownFilePath!: string

  get markdownRawText(): string {
    const importedModule = require(`./../markdowns/${this.markdownFilePath}.md`)
    const markdownRawText: string = importedModule.default
    return markdownRawText
  }
}
</script>
