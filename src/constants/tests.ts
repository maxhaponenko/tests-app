
export interface TestData {
    question: string;
    type: string;
    answers: Array<{
        text: string;
        isCorrect: boolean;
    }>
}

interface Test {
    id: number | null;
    group: string;
    level: string;
    duration: number;
    questionsAmount: number;
    available: boolean;
    data?: Array<TestData>;
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
        available: true,
        data: [
            {
                question: "Какие бывают значения у свойства position?",
                type: 'one-correct',
                answers: [
                    {
                        text: "position: absolute, fixed, relative, static, sticky",
                        isCorrect: true,
                    },
                    {
                        text: "position: block, fix, flex",
                        isCorrect: false,
                    },
                    {
                        text: "position: inline, inline-fix, inline flex",
                        isCorrect: false,
                    }
                ]
            },
            {
                question: "Что такое clearfix? Из чего он состоит и для чего он?",
                type: 'one-correct',
                answers: [
                    {
                        text: "Это способ борьбы с проблемой контейнера нулевой высоты для плавающих элементов",
                        isCorrect: true,
                    },
                    {
                        text: "В css нет такого понятия",
                        isCorrect: false,
                    },
                    {
                        text: "Тоже самое что и position: fixed",
                        isCorrect: false,
                    }
                ]
            },
        ]
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