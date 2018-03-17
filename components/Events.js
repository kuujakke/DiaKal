import React, { Component } from 'react'

import { Calendar, LocaleConfig } from 'react-native-calendars'

LocaleConfig.locales['fi'] = {
    monthNames: [
        'Tammikuu',
        'Helmikuu',
        'Maaliskuu',
        'Huhtikuu',
        'Toukokuu',
        'Kesäkuu',
        'Heinäkuu',
        'Elokuu',
        'Syyskuu',
        'Lokakuu',
        'Marraskuu',
        'Joulukuu'],
    monthNamesShort: [
        'Tamm.',
        'Helm.',
        'Maal.',
        'Huht.',
        'Touk.',
        'Kesä.',
        'Hein.',
        'Elok.',
        'Syys.',
        'Loka.',
        'Marr.',
        'Joul.'],
    dayNames: [
        'Maanantai',
        'Tiistai',
        'Keskiviikko',
        'Torstai',
        'Perjantai',
        'Lauantai',
        'Sunnuntai'],
    dayNamesShort: ['Ma', 'Ti', 'Ke', 'To', 'Pe', 'La', 'Su'],
}

LocaleConfig.defaultLocale = 'fi'

export default class Events extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <Calendar current={'2018-01-01'}/>
        )
    }
}