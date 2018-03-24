import {Storage} from 'aws-amplify'
import axios from 'axios'

const defaultSettings = {
    bloodGlucoseEffectiveness: 2,
    carbohydratesEffectiveness: 10,
    defaultTargetBloodGlucose: 7,
}

const getSettings = async () => {
    try {
        const files = await Storage.vault.list('')
        if (files.filter(f => f.key === 'settings.json').length === 1) {
            const settingsUrl = await Storage.vault.get('settings.json')
            const settings = await axios.get(settingsUrl)
            return settings.data
        }
        await Storage.vault.put('settings.json', JSON.stringify(defaultSettings))
        return defaultSettings
    } catch (exception) {
        console.log('Something went wrong when getting settings!', exception)
        console.log(exception)
        if (exception[0] === 'Error: Request failed with status code 404') {
            return defaultSettings
        }
    }
}

const save = async (settings) => {
    try {
        return await Storage.vault.put('settings.json', JSON.encode(settings))
    } catch (exception) {
        console.log('Something went wrong when saving event!', exception)
    }
}

export default {getSettings, save}