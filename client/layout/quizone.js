Template.quizone.helpers({
	posts: function(){return Posts.find();}
})

Template.quizone.events({
		"submit #enterInfo": function(event){
		event.preventDefault();

		var name_project = event.target.name_project.value;
		var first_name = event.target.first_name.value;
		var last_name = event.target.last_name.value;
		var meteor_url = event.target.meteor_url.value;
		var github_url = event.target.github_url.value;

		Posts.insert({name_project:name_project, first_name:first_name, last_name:last_name, meteor_url:meteor_url, github_url:github_url});

		Router.go('/quizone');
		
	}
})

Template.postrow.events({
	"click .delete-icon": function(){Posts.remove(this._id);}
})

