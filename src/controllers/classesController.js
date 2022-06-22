const Classes = require('../models/Classes'); //Model

const getClasses = (req, res) => {
    let tenant     = req.query.tenant;
    let teacher_id = req.query.teacher;
    let unity_id   = req.query.unity;
    Classes
           .selectClassesOfTeacher(tenant, teacher_id, unity_id)
           .then((results) => res.json(results));  
    
};

module.exports = {getClasses};