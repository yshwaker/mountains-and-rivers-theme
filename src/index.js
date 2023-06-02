import * as fs from 'node:fs/promises'
import getTheme from './theme.js'

const theme = getTheme()

fs.mkdir('./themes', { recursive: true })
  .then(() => {
    fs.writeFile('./themes/light.json', JSON.stringify(theme, null, 2))
  })
  .catch(() => process.exit(1))
