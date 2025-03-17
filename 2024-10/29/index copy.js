require('./init')

const studyServer = require('./services/studentService')

// studyServer.addStudent({
//     name: 'John222',
//     birthday: '2001-1-1',
//     sex: true,
//     mobile: '133424567890',
//     ClassId: '1',
//     deletedAt: '2020-01-012'
// }).catch(e => {
//     console.log(e)
// })

studyServer.getStudents().then(res => {
    console.log(res)
})