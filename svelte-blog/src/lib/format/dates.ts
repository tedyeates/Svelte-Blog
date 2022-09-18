
function timeToWord(date: Date, today: Date): string {
    let minuteAgo = new Date()
    minuteAgo.setMinutes(minuteAgo.getMinutes() - 1)
    if(date === minuteAgo) return '1 minute ago'

    let hourAgo = new Date()
    hourAgo.setHours(hourAgo.getHours() - 1)
    if(date > hourAgo) return `${date.getMinutes() + 1} minute ago`

    if(date === hourAgo) return '1 hour ago'
    return `${date.getHours() + 1} hours ago`
}


function weekToWord(date: Date): string {
    console.log(date.getDate())
    let twoWeeksAgo = new Date()
    twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14)
    if(date > twoWeeksAgo) return '1 week ago'

    let numberOfWeeksAgo = Math.round((Date.now() - date.getTime()) / (1000*60*60*24*7))
    return `${numberOfWeeksAgo} weeks ago`
}


function monthToWord(date: Date, today: Date): string {
    let twoMonthsAgo = new Date()
    twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 1)
    if(date > twoMonthsAgo) return '1 month ago'

    let numberOfMonthsAgo = today.getMonth() - date.getMonth()
    return `${numberOfMonthsAgo} months ago`
}


export function dateToWord(date: Date): string {
    let today = new Date()
    if(date.getDate() === today.getDate()) return timeToWord(date, today)
    if(date.getDate() === today.getDate() - 1) return 'yesterday'
    if(date.getDate() > today.getDate() - 31) return weekToWord(date)
    if(date.getMonth() > today.getMonth() - 12) return monthToWord(date, today)

    return `on ${date.toDateString()}`
}