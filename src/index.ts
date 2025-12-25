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
    const habitablePlanetsData = habitablePlanets.map((planet) => {
      return (
        `Planet: ${planet['kepler_name']}\n` +
        `  - Disposition: ${planet['koi_disposition']}\n` +
        `  - Orbital Period: ${planet['koi_period']} days\n` +
        `  - Insolation Flux: ${planet['koi_insol']} (Earth flux)\n` +
        `  - Planetary Radius: ${planet['koi_prad']} (Earth radii)\n` +
        `  - Equilibrium Temp: ${planet['koi_teq'] || 'N/A'} K\n` +
        `----------------------------------------`
      )
    })

    const header = `HABITABLE PLANETS SUMMARY\nTotal Found: ${habitablePlanets.length}\nGenerated on: ${new Date().toISOString()}\n========================================\n\n`
    fs.writeFile('index.txt', header + habitablePlanetsData.join('\n'), (err) => {
      if (err) {
        console.error('Error writing to index.txt:', err)
      } else {
        console.log('Successfully generated data sheet: index.txt')
      }
    })

    console.log(habitablePlanets.map((planet) => planet['kepler_name']))
    console.log(`The amount of habitable planets is: ${habitablePlanets.length}`)
    console.log('done')
  })
