export const objectFilter = (data, filterFor) => {
    return Object.keys(data)
        .filter(key => filterFor.includes(key))
        .reduce((obj, key) => {
            return {
                ...obj,
                [key]: data[key]
            }
        }, {})

}