<template>
  <div class="container">
    <div>
      <li v-for="entry in entries" :key="entry.title">
        <entry-card
          :entry="entry"
          ></entry-card>
      </li>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import fs from 'fs';
import yaml from 'js-yaml';

interface entryObject {
  title: string | null,
  subTitle: string | null,
  date: string | null,
}

const splitInput = (str: string): (string | null) => {
	const matcher = /\n-{3}/g;
	const metaEnd = matcher.exec(str);

	return metaEnd && str.slice(0, metaEnd.index);
}

const metaData = (src: string): entryObject => {
  const data: entryObject = yaml.load(splitInput(src)[0])
  return data ? {
    title: data.title,
    subTitle: data.subtitle,
    date: data.date
  } : { title: null, subtitle: null, date: null }
};

@Component
export default class Index extends Vue {
  get entries() {
    return [
      { title: 'hoge', date: '2021' },
      { title: 'fuga', date: '2022' },
    ];
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
