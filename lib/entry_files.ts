import fs from 'fs';

const files = fs.readdirSync('./markdowns/blog/')
const fileList = files.map((fileName: string) => {
      return `/blog/${fileName.slice(0, fileName.length - 3)}`
    })

export default fileList
