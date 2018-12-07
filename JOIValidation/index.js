
const joi = require('joi');

    const schema = {
        a : joi.string().required(),
        
    };

    //causes error
    const result = joi.validate({a:1},schema);
    console.log(result.error);
    console.log(result.value)

    const result1 = joi.validate({a:'gdssg'},schema);
    console.log(result1.error);
    console.log(result1.value);