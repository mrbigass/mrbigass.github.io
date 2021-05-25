<template>
  <div class="markdown" v-html="compiledText"></div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import marked from 'marked';

@Component
export default class Markdown extends Vue {
  @Prop()
  markdownRawText!: string

  get compiledText(): string {
    return marked(this.markdownRawText);
  }
}
</script>
