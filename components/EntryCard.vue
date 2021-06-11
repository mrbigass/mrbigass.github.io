<template>
  <div>
    <NuxtLink :to="`/entry/${formattedDate}`">
      {{ title }}
      {{ formattedDate }}
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class EntryCard extends Vue {
  @Prop({ required: true })
  title!: string

  @Prop({ required: true })
  date!: Date

  get formattedDate() {
    let y = this.date.getFullYear();
    let m = ('00' + (this.date.getMonth()+1)).slice(-2);
    let d = ('00' + this.date.getDate()).slice(-2);
    return (y + '-' + m + '-' + d);
  }
}
</script>

<style lang="sass" scoped>
</style>
