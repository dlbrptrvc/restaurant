import { massAppendString } from "./aux"
import { buildContainers } from "./default"

export function buildOrder() {
    buildContainers(2)
    container0.remove()
    placeholderord1.replaceChildren()
    if (reminder.style.visibility=='hidden') {
        text1.innerHTML = "You haven't selected anything from the menu yet.<br> Please checkout our menu."

    } else {
        let total = 0
        title1.textContent = 'Your Order:'
        text1.innerHTML = ''
        text1.style.textAlign = 'right'
        for(let i=2;i<8;i++) {
            if (window['amount'+i].textContent!=='0') {
                text1.innerHTML +='<br>'+getFruit(i)+'<i> x </i>'+window['amount'+i].textContent + '<i> = </i>'+window['amount'+i].textContent+'$'
                total = total+(+window['amount'+i].textContent)
            }
        }
        text1.innerHTML += '<br><b>Total: </b>'+total+'$'
        massAppendString('placeholderord1','sendbtn')
        sendbtn.className = 'navbtn'
        sendbtn.innerHTML = 'Send'
        sendbtn.onclick = function() {
            sendbtn.remove()
            title1.textContent = ''
            text1.innerHTML = 'Your order has been sent! Enjoy!'
            reminder.style.visibility = 'hidden'
            for(let i=2;i<8;i++) {
                window['amount'+i].textContent='0'
            }
        }
    }


}

function getFruit(n) {
    switch (n) {
        case 2: return 'Apple'
        case 3: return 'Pear'
        case 4: return 'Tangerine'
        case 5: return 'Grapes'
        case 6: return 'Mellon'
        case 7: return 'Lemon'
    }
}