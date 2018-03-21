import {API} from 'aws-amplify'

const path = '/events'

const getAll = async () => {
    try {
        return await API.get('eventsCRUD', path)
    } catch (exception) {
        console.log('Something went wrong when getting events!', exception)
    }
}

const create = async (event) => {
    try {
        return await API.put('eventsCRUD', path, {body: {...event}})
    } catch (exception) {
        console.log('Something went wrong when saving event!', exception)
    }
}

export default {getAll, create}