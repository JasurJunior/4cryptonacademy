import fs from 'fs'

function started(num: number) {
    let template = Array.from({ length: num * 2 }, (e, i) => {
        if (i + 1 > num) return 0
        return i + 1
    })

    for (let i = 0; i <= num; i++) {
        funName(i, num, template)
    }

    let data = fs.readFileSync('./Result.txt').toString()
    data = 'Line: __ ' + data.split('\n').length

    fs.appendFileSync('./Result.txt', data + '\n', 'utf-8')
}

function funName(num: number, len: number, temp: number[]) {
    temp = [...temp]
    let result: string[],
        n = len * 2

    for (let i = 0, j = 0; i < len ** 3; i++, j++) {
        result = fs.readFileSync('./Result.txt').toString().split('\n')
        temp.splice(temp.indexOf(num), 1)
        temp.splice(j, 0, num)

        if (!result.includes(temp.join(''))) {
            fs.appendFileSync('./Result.txt', temp.join('') + '\n', 'utf-8')
        }

        if (result.length == n) {
            temp.splice(temp.indexOf(num), 1)
            temp.splice(0, 0, num)

            num += num < len ? 1 : 0
            j = -1
            n += n
        }
    }
}
started(2)
