import {API} from 'aws-amplify'

const path = '/events'

const getAll = async () => {
    try {
        const events = await API.get('eventsCRUD', path)
        return events
    } catch (exception) {
        console.log('Something went wrong when getting events!', exception)
    }
}

const saveEvent = async (event) => {
    try {
        const response = await API.put('eventsCRUD', path, event)
        console.log('Saved event with response:', response)
    } catch (exception) {
        console.log('Something went wrong when saving event!', exception)
    }
}

export default {getAll, saveEvent}