$.get('https://www.reddit.com/r/aww/.json', function(data) {
  // get top 10 posts (skip 1)
  var listOfPosts = data.data.children; // returns an array

  //go through each post
  for (var i = 1; i < 11; i++) {

  	//gather data
  	var currentArticle = listOfPosts[i];
  	var title = currentArticle.data.title;
  	var thumbnail = currentArticle.data.thumbnail;
  	var link = currentArticle.data.domain;

  	//use that data to generate HTML content

  	var postElement = $("<section>");

  	// larger div to float elements in
  	var flexContainer = $("<div id='flexContainer'>");

  	var imageHolder = $("<div>");
  	imageHolder.append("<img src=" + thumbnail + ">");

  	var textHolder = $("<div id='textContent'>");

  	var articleTitle = $("<h4 class='title'>");
  	articleTitle.append(title);
  	

  	var articleLink = $("<a href=>");
  	articleLink.append(link);

  	textHolder.append(articleTitle);
  	textHolder.append(articleLink);

  	flexContainer.append(imageHolder);
  	flexContainer.append(textHolder);


  	postElement.append(flexContainer);

  	$("#main").append(postElement);

  }

});