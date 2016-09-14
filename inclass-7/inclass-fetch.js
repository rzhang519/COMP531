// Inclass Fetch Exercise
// ======================
//
// Navigate to https://webdev-dummy.herokuapp.com/sample
//
// This endpoint returns a list of articles.  Your assignment is to
// write a function countWords that uses fetch() to query the endpoint,
// and return a map from the article id to the number of words in the
// article's text.
//
// Also write two "helper" functions that call this initial function.
//
// If there are any exceptions then fetch() will throw an error.
// Provide a "safe" version of the countWords function that always
// returns a map, which will be empty in the case of errors.
//
// Finally, write a function that returns the article id with the
// most number of words.
//
// Below I have provided you a template, you just need to fill in
// the implementation.
//
// Navigate to mocha-inclass-fetch.html to see if your implementation
// provides the expected results.
//
(function(exports) {

    console.log("getting in");

    var jsonObj = fetch("http://webdev-dummy.herokuapp.com/sample")
                .then(r => r.json())
                .then(r => console.log(r.articles["0"]._id))

    // $.getJSON("http://webdev-dummy.herokuapp.com/sample", function(data){
    //     console.log(data.text);
    // })


    'use strict'

    function countWords(url) {
        var map = {}

        for (i = 0; i < 15; i++){
            console.log(i);
            var index = "\"" + i + "\"";
            var jsonObj = fetch("http://webdev-dummy.herokuapp.com/sample")
                .then(r => r.json())
                .then(r => map["\"" + r.articles[index]._id + "\""] = r.articles[index].text)
        }

        // console.log(map)
        // var jsonObj = fetch(url)
        //                 .then(r => r.json())
        return map;
        // throw new Error('Implement me!')
    }

    function countWordsSafe(url) {
        throw new Error('Implement me!')
    }

    function getLargest(url) {
        throw new Error('Implement me!')
    }

    exports.inclass = {
        author: "Rui Zhang",
        countWords, countWordsSafe, getLargest
    }

    console.log("getting out");
})(this);
