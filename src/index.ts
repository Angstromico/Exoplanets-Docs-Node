import fs from 'fs'
import { parse } from 'csv-parse'

interface Planet {
  [key: string]: string
}

const habitablePlanets: Planet[] = []

function isHabitablePlanet(planet: Planet): boolean {
  return (
    planet['koi_disposition'] === 'CONFIRMED' &&
    parseFloat(planet['koi_insol'] || '') > 0.36 &&
    parseFloat(planet['koi_insol'] || '') < 1.11 &&
    parseFloat(planet['koi_prad'] || '') < 1.6
  )
}

fs.createReadStream('kepler_data.csv')
  .pipe(
    parse({
      comment: '#',
      columns: true,
    })
  )
  .on('data', (data: Planet) => {
    if (isHabitablePlanet(data)) {
      habitablePlanets.push(data)
    }
  })
  .on('error', (err) => {
    console.log(err)
  })
  .on('end', () => {
    console.log(`The amount of habitable planets is: ${habitablePlanets.length}`)
    console.log('done')
  })
