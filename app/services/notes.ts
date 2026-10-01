const notes = [
    { id: 1, content: "next.js utilizes React Server Components", important: true},
    { id: 2, content: "next.js built on top of React", important: true},
    { id: 3, content: "next.js supports both static and dynamic rendering", important: false},
]

let nextId = notes.length + 1

export const getNotes = () => {
    return notes
}

export const addNote = (content: string, important: boolean) => {
    notes.push({ id: nextId++, content, important })
}