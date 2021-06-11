<template>
  <div class="container">
    <div>
      <div v-for="entry in entries" :key="entry.title">
        <entry-card
          :title="entry.title"
          :date="entry.date"
          ></entry-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import fs from 'fs';
import yaml from 'js-yaml';
import EntryCard from '~/components/EntryCard.vue';

const files = fs.readdirSync('./markdowns/entry/')
const fileList = files.map((fileName: string) => {
  return `./markdowns/entry/${fileName}`
})

const splitInput = (str: string): string => {
	const matcher = /\n-{3}/g;
	const metaEnd = matcher.exec(str);
  if (metaEnd == null) return ''

	return str.slice(0, metaEnd.index);
}

const metaData = (src: string): { title: string | null, date: Date | null } => {
  const data: object = yaml.load(splitInput(src))

  const returnData = {
    title: data.title,
    date: data.date,
  }

  return returnData
};

@Component({
  components: {
    EntryCard
  }
})
export default class IndexPage extends Vue {
  get entries() {
    return fileList.map((filepath) => { return metaData(fs.readFileSync(filepath, 'utf-8')) })
  }
}
</script>

<style lang="sass" scoped>
.container
  margin: 0 auto
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center
  text-align: center

.title
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
  display: block
  font-weight: 300
  font-size: 100px
  color: #35495e
  letter-spacing: 1px

.subtitle
  font-weight: 300
  font-size: 42px
  color: #526488
  word-spacing: 5px
  padding-bottom: 15px

.links
  padding-top: 15px
</style>
