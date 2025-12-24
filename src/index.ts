import fs from 'fs'
import { parse } from 'csv-parse'

interface Planet {
  [key: string]: string
}

const results: Planet[] = []

fs.createReadStream('kepler_data.csv')
  .pipe(
    parse({
      comment: '#',
      columns: true,
    })
  )
  .on('data', (data: Planet) => {
    results.push(data)
  })
  .on('error', (err) => {
    console.log(err)
  })
  .on('end', () => {
    console.log(results)
    console.log('done')
  })
