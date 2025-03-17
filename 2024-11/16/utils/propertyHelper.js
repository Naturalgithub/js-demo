function pick(obj, ...props) {
    if (!obj || typeof obj !== 'object') return obj

    const newobj = {}
    for (const k in obj) {
        if (props.includes(k)) {
            newobj[k] = obj[k]
        }
    }

    return newobj
}

module.exports = {
    pick
}
