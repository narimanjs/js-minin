interface Person {
    name: string
    age: number
}
type PersonKeys = keyof Person // 'name' | 'age'


type User = {
    _id: number
    _name: string
    _email: string
    _createdAt: Date
}

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> //'_name' | '_email'
type UserKeysNoMeta2 = Pick<User, '_name' | '_email'> // '_name' | '_emai'

let u1: UserKeysNoMeta1 = '_name'
// u1 = '_id'