export const generateDateRange = (start, end) => {
    const dates = {}
    const startDate = new Date(start)
    const endDate = new Date(end)

    let current = new Date(startDate)

    while (current <= endDate) {

        const dateString = current.toISOString().split('T')[0]

        if (dateString === start) {
            dates[dateString] = {
                startingDay: true,
                color: '#0a7e8c',
                textColor: 'white'
            }
        } else if (dateString === end) {
            dates[dateString] = {
                endingDay: true,
                color: '#0a7e8c',
                textColor: 'white'
            }
        } else {
            dates[dateString] = {
                color: '#0a7e8c',
                textColor: 'white'
            }
        }
        current.setDate(current.getDate() + 1)
    }
    return dates
}

export const handleDayPress = (day, setSelectedDates) => {

    const date = day.dateString

    setSelectedDates(prev => {

        const first = prev[0]
        const second = prev[1]

        if (!first.filled) {
            return [
                { ...first, date, filled: true },
                second
            ]
        }
        return [
            first,
            { ...second, date, filled: true }
        ]
    })
}