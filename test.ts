const tagsData= ['衣','食','住','行'] as const
type tagProp = typeof tagsData[number] 