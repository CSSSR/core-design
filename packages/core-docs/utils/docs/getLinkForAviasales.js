export default () => {
  const todayDate = new Date()
  const currentDate = todayDate.getDate()
  const currentMonth = todayDate.getMonth() + 1
  const formateNumberToTwoDigets = number => number < 10 ? 0 + '' + number : number
  const formatedTodayDate = `${formateNumberToTwoDigets(currentDate)}${formateNumberToTwoDigets(currentMonth)}`

  return `https://www.aviasales.ru/search/MOW${formatedTodayDate}BER1`
}
