<template>
  <div class="container">
    <div class="entry-list">
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

const metaData = (src: string): ({ title: string, date: Date } | null) => {
  let data = <any>{}
  data = yaml.load(splitInput(src))

  return {
    title: data.title,
    date: data.date
  }
};

@Component({
  components: {
    EntryCard
  }
})
export default class IndexPage extends Vue {
  get entries() {
    return fileList.map((filepath) => { return metaData(fs.readFileSync(filepath, 'utf-8')) }).filter((e) => { return e }).reverse()
  }
}
</script>
