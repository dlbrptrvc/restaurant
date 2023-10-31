import './style.css';
import { buildHome } from './home';
import { buildMenu } from './menu';
import { buildOrder } from './order';
import { buildDefault } from './default'

buildDefault()
buildHome()
homebtn.classList.add('selected')

homebtn.addEventListener('click',()=>{
    if (!Array.from(homebtn.classList).includes('selected')) {
        orderbtn.classList.remove('selected')
        menubtn.classList.remove('selected')
        homebtn.classList.add('selected')
        main.style.opacity = '0'
        setTimeout(() => {
            main.replaceChildren()
            main.style.opacity = '100'
            buildHome() 
        }, 1000);
    }
})

menubtn.addEventListener('click',()=>{
    if (!Array.from(menubtn.classList).includes('selected')) {
        orderbtn.classList.remove('selected')
        homebtn.classList.remove('selected')
        menubtn.classList.add('selected')
        main.style.opacity = '0'
        setTimeout(() => {
            main.replaceChildren()
            main.style.opacity = '100'
            buildMenu() 
        }, 1000);
    }
})

orderbtn.addEventListener('click',()=>{
    if (!Array.from(orderbtn.classList).includes('selected')) {
        menubtn.classList.remove('selected')
        homebtn.classList.remove('selected')
        orderbtn.classList.add('selected')
        main.style.opacity = '0'
        setTimeout(() => {
            main.replaceChildren()
            main.style.opacity = '100'
            buildOrder() 
        }, 1000);
    }
})