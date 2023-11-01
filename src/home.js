import { buildContainers } from "./default"
import myImagePath from './images/rest.jpg'

export function buildHome() {
    buildContainers(1)
    placeholderord0.remove()
    spancontainer0.remove()
    description0.style.justifyContent = 'center'
    title0.textContent = 'Welcome to Fruit Bar!'
    text0.innerHTML = '<br><i>&nbsp&nbsp&nbsp&nbsp"Fake place, fake art, real fruit!"</i>'+"<br><br>&nbsp&nbsp&nbsp&nbspFruit is. Just is. It's absolutely amazing. We at Fruit Bar sell you fruit at outrageous prices, because we know, and you know that fruit is the best. It could have been a fruit salad bar, but it isn't. Can you ever have enough of our amazing fruit. You'll never run out of those lemons again. We are a fake restaurant. With a fake location. Check out our menu and fake order whatever fruit comes to your mind.<br>&nbsp&nbsp&nbsp&nbsp Bon appetite!"
    image0.style.backgroundImage = `url(${myImagePath})`
    image0.style.width ='50vw'
    image0.style.minWidth = '300px'
    image0.style.height ='50vh'
    image0.style.minHeight = '600px'


}