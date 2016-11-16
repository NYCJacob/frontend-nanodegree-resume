/**
 * Created by jsherman on 11/9/16.
 */

var chart = c3.generate({
    bindto: '#chart',
    data: {
        columns: [
            ['Javascript', 10],
            ['C', 2],
            ['Linux' , 5],
            ['CSS', 3],
            ['Java', 2],
            ['Python', 1],
            ['PHP', 2],
            ['Other', 5]
        ],
        type: 'pie'
    }
});

// add header to chart - method within c3 it seems
var chartTitle = "Computer Books on My Shelf";

var h2Ele = document.createElement('h2');
h2Ele.append(chartTitle);
$('#chart-container').prepend(h2Ele);
