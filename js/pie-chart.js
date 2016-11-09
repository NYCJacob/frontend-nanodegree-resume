/**
 * Created by jsherman on 11/9/16.
 */

var chart = c3.generate({
    bindto: '#chart',
    data: {
        columns: [
            ['Javascript', 10],
            ['c', 2],
            ['linux' , 5],
            ['css', 2]
        ],
        type: 'pie'
    }
});

// add header to chart - method within c3 it seems
var chartTitle = "Computer Books on My Shelf";

var h1Ele = document.createElement('h1');
h1Ele.append(chartTitle);
$('#chart-container').prepend(h1Ele);
