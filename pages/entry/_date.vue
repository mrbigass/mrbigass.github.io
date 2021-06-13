<template>
  <div class="container">
    <markdown-loader
      :markdownFilePath="markdownFilePath"
    >
    </markdown-loader>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Entry extends Vue {
  get markdownFilePath() {
    return `entry/${this.$route.params.date}`;
  }
}
</script>
