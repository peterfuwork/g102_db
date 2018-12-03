const db = require('./database-connection');

module.exports = {
    getAll() {
        return db('students');
    },
    getById(id){
        return db.select().from('students').where('id', id);
    },
    createStudent(newStudent){
        return db('students').insert(newStudent).returning('*');
    },
    deleteStudent(id){
        return db.delete().from('students').where('id', id).returning('*');
    },
    updateStudent(id, updateStudentInfo) {
        return db.update(updateStudentInfo).from('students').where('id', id).returning('*');
    }
 }