<template>
  <div class="markdown" v-html="compiledText"></div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import marked from 'marked';

function removeMetadata(str: string): string {
  const matcher = /\n-{3}/g;
  const metaEnd = matcher.exec(str);
  if (metaEnd == null) return str

  return str.slice(metaEnd.index, str.length);
}

@Component
export default class Markdown extends Vue {
  @Prop()
  markdownRawText!: string

  get compiledText(): string {
    return marked(removeMetadata(this.markdownRawText));
  }
}
</script>
<style lang="sass">
.markdown
  h1
    font-size: 1.7em
    font-weight: 600
    margin-bottom: 1.1rem
    padding-bottom: 2em
    position: relative
    border-bottom: 1px solid rgba(92,147,187,.17)

  h2
    font-size: 1.5em
    font-weight: 500
    margin: 45px 0 0.8em
    padding-bottom: 0.7em
    border-bottom: 1px solid #ddd

  h3
    font-size: 1.2em
    margin: 45px 0 0.8em
    padding-bottom: 0.7em
    border-bottom: 1px solid #ddd

  p
    line-height: 1.6em
    margin: 1.2em 0 -1.2em
    padding-bottom: 1.2em
    position: relative
    z-index: 1

  pre
    margin: 1.2em 0 -1.2em
    padding-bottom: 1.2em

  ul>li
    list-style: none
    list-style-position: inside
    position: relative
    padding-left: 1.6em

    &::before
      content: ""
      position: absolute
      top: .7em
      left: .35em
      width: 7px
      height: 7px
      border-radius: 50%
      background: rgba(24,30,50,.7)
</style>
