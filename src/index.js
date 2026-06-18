import * as fs from 'node:fs/promises'
import getTheme from './theme.js'

const theme = getTheme()

try {
  await fs.mkdir('./themes', { recursive: true })
  await fs.writeFile('./themes/light-color-theme.json', `${JSON.stringify(theme, null, 2)}\n`)
} catch {
  process.exit(1)
}
