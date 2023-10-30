import {massBuild,massAppend} from "./aux"

export default function buildDefault() {
    massBuild('header','logo','navbar','main','footer')
    massBuild('homebtn','menubtn','contactsbtn').forEach(elem => {
        navbar.append(elem)
        elem.className = 'navbtn'
    })
    massAppend(content,header,main,footer)
    massAppend(header,logo,navbar)

}
