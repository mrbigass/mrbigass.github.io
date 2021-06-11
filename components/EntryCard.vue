<template>
  <div class="entry-card">
    <NuxtLink :to="`/entry/${formattedDate}`">
      <div class="entry-title">
        {{ title }}
      </div>
      <div class="entry-date">
        {{ formattedDate }}
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class EntryCard extends Vue {
  @Prop({ required: true })
  title!: string

  @Prop({ required: true })
  date!: Date

  get formattedDate() {
    let y = this.date.getFullYear()
    let m = ('00' + (this.date.getMonth()+1)).slice(-2)
    let d = ('00' + this.date.getDate()).slice(-2)
    return (y + '-' + m + '-' + d)
  }
}
</script>

<style lang="sass" scoped>
.entry-card
  width: 100%
  min-width: 500px
  height: 100px
  border: 1px solid #999
  border-radius: 10px
  padding: 50px
  transition: box-shadow 0.5s
  box-shadow: 10px 10px 30px rgba(18, 47, 61, 0.5), -10px -10px 30px rgba(248, 253, 255, 0.9), inset 10px 10px 30px transparent, inset -10px -10px 30px transparent

  &:hover
    box-shadow: 10px 10px 30px transparent, -10px -10px 30px transparent, inset 10px 10px 30px rgba(18, 47, 61, 0.5), inset -10px -10px 30px rgba(248, 253, 255, 0.9)
</style>
