<template>
  <div>
    <NuxtLink to="entryLink">
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class EntryCard extends Vue {
  link: string = '/#';

  @Prop({ required: true })
  entry!: Object

  get entryLink() {
    return this.link;
  }
}
</script>

<style lang="sass" scoped>
</style>
