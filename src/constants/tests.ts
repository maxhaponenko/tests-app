interface Test {
    id: number | null;
    group: string;
    level: string;
    duration: number;
    questionsAmount: number;
    available: boolean;
}
type Tests = Array<Test>

export const groups = {
    html: 'html',
    css: 'css',
    js: 'javascript',
    react: 'react'
}
export const levels = {
    junior: 'junior',
    middle: 'middle'
}

export const tests: Tests = [
    {
        id: 1,
        group: groups.html,
        level: levels.junior,
        duration: 7,
        questionsAmount: 15,
        available: true
    },
    {
        id: 2,
        group: groups.html,
        level: levels.middle,
        duration: 10,
        questionsAmount: 20,
        available: false
    },
    {
        id: 3,
        group: groups.css,
        level: levels.junior,
        duration: 10,
        questionsAmount: 20,
        available: true
    },
    {
        id: 4,
        group: groups.css,
        level: levels.middle,
        duration: 10,
        questionsAmount: 20,
        available: false
    },
    {
        id: 5,
        group: groups.js,
        level: levels.junior,
        duration: 10,
        questionsAmount: 20,
        available: true
    },
    {
        id: 6,
        group: groups.js,
        level: levels.middle,
        duration: 10,
        questionsAmount: 20,
        available: true
    },
    {
        id: 7,
        group: groups.react,
        level: levels.junior,
        duration: 10,
        questionsAmount: 20,
        available: true
    },
    {
        id: 8,
        group: groups.react,
        level: levels.middle,
        duration: 10,
        questionsAmount: 20,
        available: true
    },
]