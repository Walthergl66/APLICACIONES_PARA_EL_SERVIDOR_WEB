import {insertCultivo} from './crud'
import { iniciar } from './database'

async function main() {
    await iniciar()
    const cultivo = await insertCultivo('Maiz', 'Grano', new Date('2023-01-01'), new Date('2023-06-01'));
    console.log(cultivo);
}

main()