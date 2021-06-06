import fs from 'fs';

const files = fs.readdirSync('./markdowns/entry/')
const fileList = files.map((fileName: string) => {
      return `/entry/${fileName.slice(0, fileName.length - 3)}`
    })

export default fileList
