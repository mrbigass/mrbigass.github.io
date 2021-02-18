<template>
  <div class="markdown" v-html="compiledText"></div>
</template>

<script lang="ts">
import Vue from 'vue';
import marked from 'marked';

export default Vue.extend({
  props: {
    markdownRawText: {
      type: String,
      required: true
    }
  },
  computed: {
    compiledText(): string {
      return marked(this.markdownRawText)
    }
  },
})
</script>
