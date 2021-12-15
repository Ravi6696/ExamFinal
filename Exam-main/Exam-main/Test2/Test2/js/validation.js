$(function(){
    let usernameValid = false;
    let passwordValid = false;
    let dateOfBirthValid = false;

    $('form').on('submit', function(e){
        //validation code goes here
        if($('#username').val()){
            usernameValid = true;
            $("#uname").find("span").remove();
        }else{
            e.preventDefault();
            $('#uname').append("<span>Invalid</span>");
        }
        if($('#password').val().length >= 12){
            passwordValid = true;
            $("#pass").find("span").remove();
        }else{
            e.preventDefault();
            $('#pass').append("<span>Invalid</span>");
        }
        
        if($('#dateOfBirth').val()){
            dateOfBirthValid = true;
            $("#dob").find("span").remove();
        }else{
            e.preventDefault();
            $('#dob').append("<span>Invalid</span>");
        }

        if (usernameValid && passwordValid && dateOfBirthValid){
            e.preventDefault();
            $('tbody').append(`<tr><td>${$('#username').val()}</td><td>${$('#password').val().length}</td><td>${$('#dateOfBirth').val()}</td></tr>`)
            $('th').removeClass('ascending descending'); //new row added, so the table isn't sorted anymore
        }
    });

    $('th').click(function(){
        var table = $(this).parents('table').eq(0)
        var rows = table.find('td:gt(0)').toArray().sort(comparer($(this).index()))
        this.asc = !this.asc
        if (!this.asc){rows = rows.reverse()}
        for (var i = 0; i < rows.length; i++){table.append(rows[i])}
    })
    function comparer(index) {
        return function(a, b) {
            var valA = getCellValue(a, index), valB = getCellValue(b, index)
            return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB)
        }
    }
    function getCellValue(row, index){ return $(row).children('td').eq(index).text() }

});