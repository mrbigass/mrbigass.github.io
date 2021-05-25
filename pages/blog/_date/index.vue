<template>
  <markdown-loader
    :markdownFilePath="markdownFilePath"
  >
  </markdown-loader>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Blog extends Vue {
  get markdownFilePath() {
    return `blog/${this.$route.params.date}`;
  }
}
</script>
