import { buildContainers } from "./default"
import myImagePath from './images/rest.jpg'

export function buildHome() {
    orderbtn.classList.remove('selected')
    menubtn.classList.remove('selected')
    homebtn.classList.remove('selected')
    homebtn.classList.add('selected')
    buildContainers(1)
    placeholderord0.remove()
    description0.style.justifyContent = 'center'
    title0.textContent = 'Welcome to Fruit Bar!'
    text0.textContent = "Fruit is. Just is. It's absolutely amazing. We at Fruit Bar sell you fruit at outrageous prices, because we know, and you know that fruit is the best. It could have been a fruit salad bar, but it isn't. Can you ever have enough of our amazing fruit. You'll never run out of those lemons again. We are a fake restaurant. With a fake location. Check out our menu and fake order whatever fruit comes to your mind. Bon appetite!"
    image0.style.backgroundImage = `url(${myImagePath})`
    image0.style.width = '500px'
    image0.style.height = '500px'
}