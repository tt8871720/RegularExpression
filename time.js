// 現在時間 yyyy-mm-dd hh-mm:ss
function dateFormatter() {
    const d = new Date()
    const date = d.toISOString().split('T')[0].replace(/\//g, '-');
    const time = d.toTimeString().split(' ')[0].replace(/:/g, '-');
    return `${date} ${time}`
}

// 日期加減
function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}