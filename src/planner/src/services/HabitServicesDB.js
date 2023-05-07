import Database from './DbServices';

const DB_EXEC = Database.getConnection();

export const getHabit = async () => {
    let results = await DB_EXEC(`select * from habits`);
    //console.log(results);
    return results.rows._array;
}

export const insertHabit = async (param) => {
    let results = await DB_EXEC(`insert into habits(id, habit, day, weekDay )
  values(?,?,?,?)`, [param.id, param.habit, param.day, param.weekDay]);
    //console.log(results);
    return results.rowsAffected;
}

export const updateHabit = async (param) => {
    let results = await DB_EXEC(`update habits set habit=?, day=?, weekDay=?, where id=?`, [param.habit, param.day, param.weekDay, param.id]);
    //console.log(results);
    return results.rowsAffected;
}

export const deleteHabit = async (id) => {
    let results = await DB_EXEC(`delete from habits where id=?`, [id]);
    //console.log(results);
    return results.rowsAffected;
}

