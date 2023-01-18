interface Rect {
    readonly id: string
    color?: string
    size: {
        with: number
        height: number
    }
}

const rect1: Rect = {
    id: 'id',
    size: {
        with: 12,
        height: 24,
    },
    color: '#ccc'
}

const rect2: Rect = {
    id: 'id2',
    size: {
        with: 10,
        height: 20
    }
}

rect2.color = 'black'

const rect3 = {} as Rect
const rect4 = <Rect>{} // old

// ****** 

interface ReactWithArea extends Rect {
    getArea: () => number
}

const rect5: ReactWithArea = {
    id: 'id5',
    size: {
        with: 20,
        height: 40
    },
    getArea(): number {
        return this.size.with * this.size.height
    },
}

// ****** **********
interface IClock {
    time: Date;
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void {
        this.time = date
    }
}

// ****** **********
interface Styles {
    [key: string]: string
}
const css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}
