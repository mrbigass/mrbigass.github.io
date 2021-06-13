<template>
  <NuxtLink :to="`/entry/${formattedDate}`">
    <div class="entry-card">
      <div class="entry-title">
        <div class="title-text">
          {{ title }}
        </div>
      </div>
      <div class="entry-date">
        <div class="date-text">
          {{ formattedDate }}
        </div>
      </div>
    </div>
  </NuxtLink>
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
  height: 120px
  border: 1px solid #999
  border-radius: 10px
  padding: 10px 30px
  margin: 0 0 30px 0
  transition: box-shadow 0.5s

  &:hover
    box-shadow: 10px 10px 30px rgba(18, 47, 61, 0.5), -10px -10px 30px rgba(248, 253, 255, 0.9), inset 10px 10px 30px transparent, inset -10px -10px 30px transparent

  .entry-title, .entry-date
    width: 90%

  .title-text
    font-size: 30px

  .entry-date
    text-align: right

  .date-text
    font-size: 20px
</style>
