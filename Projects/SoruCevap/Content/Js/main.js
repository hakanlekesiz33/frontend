

var Survey = {

    Actions: {
        init: () => {
            if (questionNo) {
                //soruların olduğu sayfalardayız
                var currentPage = "answer-" + questionNo;
                var currentPageAnswer = localStorage.getItem(currentPage);
                if (currentPageAnswer) {
                    document.getElementById(currentPageAnswer).checked = true;
                }
            }
            else {
                //result sayfasındayız
                var total = 0;
                for (let i = 1; i < 6; i++) {
                    var answer = localStorage.getItem("answer-" + i);
                    total = total + (answer === "yes" ? 10 : 0);
                }
                document.getElementById("result").innerText = total;
            }
        },
        next: () => {
            var answer = document.querySelector("input[type='radio']:checked").value;
            // var answer =  document.getElementById("yes").checked;

            var _qNo = "answer-" + questionNo;
            localStorage.setItem(_qNo, answer);
            var nextPage = parseInt(questionNo) + 1;

            if (nextPage > 5) {
                window.location.href = "/result.html";
            }
            else {
                window.location.href = "/soru" + nextPage + ".html";
            }
        }
    }
};

Survey.Actions.init();