export function massBuild() {
    let result = []
    Array.from(arguments).forEach(arg => {
        window[arg] = document.createElement('div')
        window[arg].id = arg
        result.push(window[arg])       
    });
    return result
}

export function massAppend() {
    for(let i=1;i<arguments.length;i++) {
        arguments[0].append(arguments[i])
    }
}