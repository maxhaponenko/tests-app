interface Test {
    id: number | null;
    group: string;
    level: string;
    duration: number;
    questionsAmount: number;
    available: boolean;
}
type Tests = Array<Test>

export const tests: Tests = [
    {
        id: 1,
        group: 'Html',
        level: 'junior',
        duration: 10,
        questionsAmount: 20,
        available: true
    },
    {
        id: 2,
        group: 'Html',
        level: 'middle',
        duration: 10,
        questionsAmount: 20,
        available: false
    },
    {
        id: 3,
        group: 'Css',
        level: 'junior',
        duration: 10,
        questionsAmount: 20,
        available: true
    },
    {
        id: 4,
        group: 'Css',
        level: 'middle',
        duration: 10,
        questionsAmount: 20,
        available: false
    },
    {
        id: 5,
        group: 'JavaScript',
        level: 'junior',
        duration: 10,
        questionsAmount: 20,
        available: true
    },
    {
        id: 6,
        group: 'JavaScript',
        level: 'middle',
        duration: 10,
        questionsAmount: 20,
        available: true
    },
    {
        id: 7,
        group: 'React',
        level: 'middle',
        duration: 10,
        questionsAmount: 20,
        available: true
    },
    {
        id: 8,
        group: 'React',
        level: 'middle',
        duration: 10,
        questionsAmount: 20,
        available: true
    },
]