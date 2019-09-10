function newElement(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function Barrier(reverse = false) {
    this.elem = newElement('div', 'barrier')

    const border = newElement('div', 'border')
    const body = newElement('div', 'body')
    this.elem.appendChild(reverse ? body : border)
    this.elem.appendChild(reverse ? border : body)

    this.setHeight = height => body.style.height = `${height}px`
}

function PairBarrier(height, gap, xPosition) {
    this.elem = newElement('div', 'barrier-pair')
    this.top = new Barrier(true)
    this.bottom = new Barrier(false)

    this.elem.appendChild(this.top.elem)
    this.elem.appendChild(this.bottom.elem)

    this.generateGap = () => {
        const topHeight = Math.random() * (height - gap)
        const bottomHeight = height - gap - topHeight
        this.top.setHeight(topHeight)
        this.bottom.setHeight(bottomHeight)
    }

    this.getX = () => parseInt(this.elem.style.left.split('px')[0])
    this.setX = xPosition => this.elem.style.left = `${xPosition}px`
    this.getWidth = () => this.elem.clientWidth
    this.generateGap()
    this.setX(xPosition)
}

//distance into each barrier
function Barriers(height, width, gap, distance, updatePoints) {
    this.pairs = [
        new PairBarrier(height, gap, width), 
        new PairBarrier(height, gap, width + distance),
        new PairBarrier(height, gap, width + distance * 2),
        new PairBarrier(height, gap, width + distance * 3),
    ]

    const displacement = 3
    this.animation = () => {
        this.pairs.forEach(pair => {
            pair.setX(pair.getX() - displacement)

            //Pairs reuse
            if(pair.getX() < pair.getWidth()) {
                pair.setX(pair.getX() + distance * this.pairs.length)
                pair.generateGap()
            }
            
            const half = width / 2
            const crossedHalf = pair.getX() + displacement >= half
                && pair.getX() < half
            if(crossedHalf) updatePoints()
        })
    }
}

function Bird(gameHeight) {
    let flying = false

    this.elem = newElement('img', 'bird')
    this.elem.src = 'imgs/passaro.png'
    this.getY = () => parseInt(this.elem.style.bottom.split('px')[0])
    this.setY = yPosition => this.elem.style.bottom = `${yPosition}px`

    window.onkeydown = e => flying = true
    window.onkeyup = e => flying = false

    this.animation = () => {
        const newYPosition = this.getY() + (flying ? 8 : -5)
        const maxHeight = gameHeight - this.elem.clientHeight

        if(newYPosition <= 0) {
            this.setY(0)
        } else if(newYPosition >= maxHeight) {
            this.setY(maxHeight)
        } else {
            this.setY(newYPosition)
        }
    }
    this.setY(gameHeight / 2)
}

function Progress() {
    this.elem = newElement('span', 'progress')
    this.updatePoints = points => {
        this.elem.innerHTML = points
    }
    this.updatePoints(0)
}

function isOverlapping(elemA, elemB) {
    const a = elemA.getBoundingClientRect()
    const b = elemB.getBoundingClientRect()

    const horizontal = a.left + a.width >= b.left
        && b.left + b.width >= a.left
    const vertical = a.top + a.height >= b.top
        && b.top + b.height >= a.top
    
    return horizontal && vertical
}

function clashed(bird, barriers) {
    let clashed = false

    barriers.pairs.forEach(pairBarriers => {
        if(!clashed) {
            const top = pairBarriers.top.elem
            const bottom = pairBarriers.bottom.elem
            clashed = isOverlapping(bird.elem, top)
                || isOverlapping(bird.elem, bottom)
        }
    })
    return clashed
}

function FlappyBird() {
    let points = 0;

    const gameArea = document.querySelector('[wm-flappy]')
    const height = gameArea.clientHeight
    const width = gameArea.clientWidth

    const progress = new Progress()
    const barriers = new Barriers(height, width, 200, 400,
            () => progress.updatePoints(++points))
    const bird = new Bird(height)

    gameArea.appendChild(progress.elem)
    gameArea.appendChild(bird.elem)
    barriers.pairs.forEach(pair => gameArea.appendChild(pair.elem))

    this.start = () => {
        const time = setInterval(() => {
            barriers.animation()
            bird.animation()

            if(clashed(bird, barriers)) {
                clearInterval(time)
            }
        }, 20)
    }
}

new FlappyBird().start()