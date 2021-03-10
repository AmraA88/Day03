function main(){
    var StudlyCapVar;
    var ProperCamelCase;
    var TitleCaseOver;
    StudlyCapVar =10;
    ProperCamelCase = "A String";
    TitleCaseOver =9000;
    return {StudlyCapVar,
        ProperCamelCase,
        TitleCaseOver
    }
    }
    console.log (main());
    module.exports = main;