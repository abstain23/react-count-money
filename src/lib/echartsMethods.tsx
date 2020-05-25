import { recordItemType } from "customHooks/useRecords";
import day from 'dayjs'
// import { useTags } from "customHooks/useTags";

const currentDay = day().format('YYYY-MM-DD')
const currentMonth = day().format('YYYY-MM')
const curretYear = day().format('YYYY')



export const groupByWeek = (records: recordItemType[], type: 0 | 1): Map<string, { value: number, tagsId: number[] }> => {
  const keys = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  const res = new Map<string, { value: number, tagsId: number[] }>()
  let i: number;
  for (i = 0; i < keys.length; i++) {
    res.set(keys[i], { value: 0, tagsId: [] })
  }
  let r: recordItemType
  const newR = records.filter(r => r.category === type)
  for (r of newR) {
    if (day(r.creatAt).format('YYYY-MM-DD') >= currentDay) {
      const key = keys[day(r.creatAt).day()]
      // console.log(day(r.creatAt).day())
      // console.log(r.total)
      // const initVal = res.get(key)
      const total = res.get(key)?.value as number
      const tagsId = res.get(key)?.tagsId as number[]
      res.set(key, { value: parseFloat(r.total) + total, tagsId: [...tagsId, ...r.tagsId] })
    }
  }
  // console.log(res)
  //   console.log(type)
  return res
}

export const getDays = (): number => {
  const [year, month] = [day().year(), day().month()]
  const d = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
    if (month === 1) {
      return 29;
    } else {
      return d[month];
    }
  } else {
    return d[month];
  }
}

export const groupByMonth = (records: recordItemType[], type: 0 | 1): Map<string, { value: number, tagsId: number[] }> => {
  const keys: string[] = []
  const res = new Map<string, { value: number, tagsId: number[] }>()
  let i: number;
  // console.log(getDays())
  for (i = 1; i < getDays() + 1; i++) {
    keys.push(i.toString())
  }
  for (i = 0; i < keys.length; i++) {
    res.set(keys[i], { value: 0, tagsId: [] })
  }
  let r: recordItemType
  const newR = records.filter(r => r.category === type)
  for (r of newR) {
    if (day(r.creatAt).format('YYYY-MM') >= currentMonth) {
      const key = keys[day(r.creatAt).date()]
      // const initVal = res.get(key)
      const total = res.get(key)?.value as number
      const tagsId = res.get(key)?.tagsId as number[]
      res.set(key, { value: parseFloat(r.total) + total, tagsId: [...tagsId, ...r.tagsId] })
    }
  }
  return res
}

export const groupByYear = (records: recordItemType[], type: 0 | 1): Map<string, { value: number, tagsId: number[] }> => {
  const keys = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
  const res = new Map<string, { value: number, tagsId: number[] }>()
  let i: number;
  for (i = 0; i < keys.length; i++) {
    res.set(keys[i], { value: 0, tagsId: [] })
  }
  let r: recordItemType
  const newR = records.filter(r => r.category === type)
  for (r of newR) {
    if (day(r.creatAt).format('YYYY') >= curretYear) {
      const key = keys[day(r.creatAt).month()]
      const total = res.get(key)?.value as number
      const tagsId = res.get(key)?.tagsId as number[]
      res.set(key, { value: parseFloat(r.total) + total, tagsId: [...tagsId, ...r.tagsId] })
    }
  }
  return res
}
