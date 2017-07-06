"use strict";

let $ = require('jquery');
let Handlebars = require('hbsfy/runtime');
Handlebars.registerPartial("nav", require("../templates/partials/header.hbs"));
Handlebars.registerPartial("foot", require("../templates/partials/footer.hbs"));
let postTemplate = require("../templates/posts.hbs");

$(document).ready( function(){
	$.ajax({
		url: "data/posts.json",
	}).done( function(post){
		printPosts(post);
	});
});

function printPosts(post) {
	$(".output").append(postTemplate(post));
}