interface Student {
    name: string
    avgMark: number
}

interface Statistics {
    avgMark: number
    highestMark: string
    lowestMark: string
}

function getStatistics(marks: Student[]): Statistics {
    let averageScore: number = 0

    marks.sort(({ avgMark: a }, { avgMark: b }) => a - b)

    for (const { avgMark: score } of marks) {
        averageScore += score
    }

    return {
        avgMark: averageScore / marks.length,
        highestMark: marks[marks.length - 1].name,
        lowestMark: marks[0].name,
    }
}

const testMarks = [
    {
        name: 'Vasya',
        avgMark: 3.75,
    },
    {
        name: 'Lena',
        avgMark: 4.89,
    },
]

console.log(getStatistics(testMarks))
