const mongoose = require("mongoose");

const studentAttendenceSchema = new mongoose.Schema({
  session:{
    type: String,
    require: true,

    attendence:{
      type: Boolean,
      
    }
    month:{
        name: String,
        present: {
            type: Boolean,
            require: false,
          },
    }
  }
});
