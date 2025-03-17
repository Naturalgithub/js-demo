export function applyStyles(dom, ...styles) {
    let targetStyles = {}
    for (const style of styles) {
        targetStyles = {
            ...targetStyles,
            ...style
        }
    }

    for (const key in targetStyles) {
        const value = targetStyles[key]
        dom.style[key] = value
    }
}