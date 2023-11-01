import {massBuild,massAppend,massAppendString} from "./aux"

export function buildDefault() {
    massBuild('header','logo','navbar','main','footer')
    massBuild('homebtn','menubtn','orderbtn').forEach(elem => {
        navbar.append(elem)
        elem.className = 'navbtn'
    })
    massAppend(content,header,main,footer)
    massAppend(header,logo,navbar)
    footer.innerHTML = "dlbrptrvc&copy"+new Date().getFullYear()
    menubtn.textContent = 'Menu'
    homebtn.textContent = 'Home'
    orderbtn.textContent = 'Order'
    // build purchase reminder
    massAppendString('orderbtn','reminder')
    reminder.style.visibility = 'hidden'
}

export function buildContainers(n) {
    for(let i=0;i<n;i++) {
        if (i%2==0) {
            massAppendString('container'+i,'maincontainer'+i,'spancontainer'+i)
            massAppendString('innercontainer'+i,'image'+i,'description'+i)
        } else {
            massAppendString('container'+i,'spancontainer'+i,'maincontainer'+i)
            massAppendString('innercontainer'+i,'description'+i,'image'+i)
        }
        massAppendString('main','container'+i)
        massAppendString('placeholderemb'+i,'embellishment1'+i,'embellishment2'+i,'embellishment3'+i)
        massAppendString('maincontainer'+i,'placeholderemb'+i,'bordercontainer'+i)
        massAppendString('bordercontainer'+i,'innercontainer'+i)

        massAppendString('description'+i,'title'+i,'text'+i,'placeholderord'+i)
        massAppendString('placeholderord'+i,'plusbtn'+i,'amount'+i,'minusbtn'+i)
// tweeks
        if (i%2!==0) {
            window['placeholderemb'+i].style.justifyContent = 'end'
        }
    }

}