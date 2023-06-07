function format(date, str) {
    const fx = new Map(
      [
        ['yyyy', Math.abs(date.getFullYear()).toString().padStart(4, '0')],
        ['y', Math.abs(date.getFullYear())],
        ['MMMM', date.toLocaleString('en-US', { month: 'long' })],
        ['MMM', date.toLocaleString('en-US', { month: 'short' })],
        ['MM', (date.getMonth() + 1).toString().padStart(2, '0')],
        ['M', date.getMonth() + 1],
        ['dd', date.getDate().toString().padStart(2, '0')],
        ['d', date.getDate()],
        ['EEEE', date.toLocaleString('en-US', { weekday: 'long' })],
        ['E', date.toLocaleString('en-US', { weekday: 'short' })],
        ['hh', (date.getHours() % 12).toString().padStart(2, '0')],
        ['h', date.getHours() % 12],
        ['mm', date.getMinutes().toString().padStart(2, '0')],
        ['m', date.getMinutes()],
        ['ss', date.getSeconds().toString().padStart(2, '0')],
        ['s', date.getSeconds()],
        ['a', date.getHours() < 12 ? 'AM' : 'PM'],
        ['HH', date.getHours().toString().padStart(2, '0')],
        ['H', date.getHours()],
        ['GGGG', date.getFullYear() < 0 ? 'Before Christ' : 'Anno Domini'],
        ['G', date.getFullYear() < 0 ? 'BC' : 'AD'],
      ]
    )
  
    for (var [key, value] of fx.entries()) {
      if (str.includes("May")
        && (key.includes("M") || key.includes("a") || key.includes("y"))) {
        continue;
      }
      if (str.includes("September")
        && (key.includes("m"))) {
        continue;
      }
      if (str.includes("Sunday")
        && (key.includes("d") || key.includes("a") || key.includes("y"))) {
        continue;
      }
      if (str.includes("Monday")
        && (key.includes("M") || key.includes("d") || key.includes("a") || key.includes("y"))) {
        continue;
      }
  
      str = str.replace(key, value)
    }
    return str
  }
  
//   console.log(format(eclipse, 'yyyy'))
//   console.log(format(landing, 'yyyy'))