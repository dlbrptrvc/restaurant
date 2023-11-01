import { massAppendString } from "./aux";
import { buildContainers } from "./default"

export function buildMenu() {
    buildContainers(8)
    container0.remove()
    container1.remove()
    title2.innerHTML = 'Apple'
    text2.innerHTML = 'Have a fifth of an apple.<br>Price: 1$'
    title3.innerHTML = 'Pear'
    text3.innerHTML = 'Have a pair of pears.<br>Price: 1$'
    title4.innerHTML = 'Tangerine'
    text4.innerHTML = 'Have a tenth of a tangerine.<br>Price: 1$'
    title5.innerHTML = 'Grapes'
    text5.innerHTML = 'Have a bunch of grapes.<br>Price: 1$'
    title6.innerHTML = 'Mellon'
    text6.innerHTML = 'Have a slice of a mellon.<br>Price: 1$'
    title7.innerHTML = 'Lemon'
    text7.innerHTML = "Don't forget lemons.<br>Price: 1$"
    for(let i=2;i<8;i++) {
        window['plusbtn'+i].textContent = '+'
        window['minusbtn'+i].textContent = '-'
        window['amount'+i].textContent = window['amount'+i].textContent || '0'
        window['minusbtn'+i].onclick = function() {
            if ((+window['amount'+i].textContent)>0) {
                window['amount'+i].textContent = +window['amount'+i].textContent-1
             }
            checkForPurchase()
        }
        window['plusbtn'+i].onclick = function() {
            window['amount'+i].textContent = +window['amount'+i].textContent+1
            reminder.style.visibility = "visible"
        }
    }
}

function checkForPurchase() {
    reminder.style.visibility = "hidden"
    for(let i=2;i<8;i++) {
        if (window['amount'+i].textContent!=='0') {
            reminder.style.visibility = "visible"
        }
    }
}
