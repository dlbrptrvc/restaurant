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

export function massAppendString() {
    if (!window[arguments[0]]) {
        console.log('building',arguments[0])
        massBuild(arguments[0])
    }

    for(let i=1;i<arguments.length;i++) {
        if (!window[arguments[i]]) {
            console.log('building', arguments[i])
            massBuild(arguments[i])
        }
        window[arguments[0]].append(window[arguments[i]])
    }    
}