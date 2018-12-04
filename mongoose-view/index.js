var View = require('mongoose-view');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({  
    first: String,
    last: String
});


var User = mongoose.model('User', UserSchema);
	View.register(User, 'Simple', function(viewer, callback){
		var json = {
			id: this.id,
			displayName: this.displayName,
			profileImageUrl: this.profileImageUrl
		};
        View.render(this.service, 'Enhanced', viewer, (err, serviceView)=>{
            if(err)
            json.service = serviceView;
        })
    });
    

   
    console.log(View.creators);

   



    // View.register(..., function(viewer, callback){
	// 	var json = {
	// 		id: this.id
	// 	}
	// 	View.render(this.service, 'Enhanced', viewer, (err, serviceView)=>{
	// 		if(err)...
	// 		json.service = serviceView;
	// 	})
	// });