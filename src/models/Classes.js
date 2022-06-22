const knex   = require('../config/database');
const selectClassesOfTeacher = (tenant, teacher_id, unity) => {
    return knex
           .raw(
            `
            SELECT T.CODIGO,
                    T.NOME,
                    T.TIPOCURSO, 
                    CASE 
                        WHEN T.MATRICULA IS NULL THEN 0
                        ELSE 1
                    END AS TURMA_INDIVIDUAL
            FROM SCL${tenant}.SCL.TURMAS T WITH(NOLOCK)
            WHERE T.ESTADO = 1 --turma vigente
                AND T.UNIDADE = ${unity}
                AND T.TERMINO > GETDATE()
                AND (T.PROFESSOR = ${teacher_id} --professor selecionado
                    OR
                    EXISTS (SELECT TP.PROFESSOR 
                            FROM SCL${tenant}.SCL.TU_PLAN TP WITH(NOLOCK) 
                            WHERE TP.PROFESSOR = ${teacher_id} 
                                  AND TP.TURMA = T.CODIGO) )
            ORDER BY 4,2
            `
           )
};



module.exports = {selectClassesOfTeacher}
//selectClassesOfTeacher(4375,28745,2).then(data => console.log(data));
//selectClassesOfTeacher(5301,11761,2).then(data => console.log(data));


