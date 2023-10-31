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
        massBuild(arguments[0])
    }

    for(let i=1;i<arguments.length;i++) {
        if (!window[arguments[i]]) {
            massBuild(arguments[i])
        }
        window[arguments[0]].append(window[arguments[i]])
        window[arguments[i]].style.opacity = '0';
        window[arguments[i]].style.transition = '1s'
        setTimeout(() => {
            window[arguments[i]].style.opacity = '100';  
        }, 0);
    }    
}