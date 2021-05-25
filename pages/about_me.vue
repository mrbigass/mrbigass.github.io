<template>
  <markdown-loader
    :markdownFilePath="markdownFilePath"
  >
  </markdown-loader>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class AboutMePage extends Vue {
  markdownFilePath: string = 'about_me'
}
</script>
