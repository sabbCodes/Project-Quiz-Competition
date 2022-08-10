let score = 0;

let scoreEl = document.getElementById("score-el-18")

function mbbs1801(){
    score += 1
    scoreEl.innerHTML = score
}

function mbbs1802(){
    score += 2
    scoreEl.innerHTML = score
}

function mbbs1803(){
    score += 3
    scoreEl.innerHTML = score
}

function mbbs1804(){
    score -= 2
    scoreEl.innerHTML = score
}

let count = 0

let countEl = document.getElementById("score-el-19")

function mbbs1901(){
    count += 1
    countEl.innerHTML = count
}

function mbbs1902(){
    count += 2
    countEl.innerHTML = count
}

function mbbs1903(){
    count += 3
    countEl.innerHTML = count
}

function mbbs1904(){
    count -= 2
    countEl.innerHTML = count
}

let message = document.getElementById("popup-msg")

let mySeniorClass = "MBBS-18 "

let myClassName = "MBBS-19 "

let drawMsg = "DOING THE BEST AT THIS MOMENT PUTS YOU IN THE BEST PLACE FOR THE NEXT MOMENT! THIS QUIZ HAS ENDED IN A STALEMATE!"

function summary(){
    var a,b;
    a = score;
    b = count;
    if(a>b){
        document.getElementById("end-btn").addEventListener("click", function(){
            message.textContent = mySeniorClass + message.textContent;
            document.querySelector(".popup-main").style.display = "flex";
            document.querySelector("#score-el-18").style.color = "lightgreen";
        })
    }
    else if(a<b){
        document.getElementById("end-btn").addEventListener("click", function(){
            message.textContent = myClassName + message.textContent;
            document.querySelector(".popup-main").style.display = "flex";
            document.querySelector("#score-el-19").style.color = "lightgreen";
        })
        // document.write("MBBS-19 wins with ", b, " points!")
    }
    else {
        document.getElementById("end-btn").addEventListener("click", function(){
            message.textContent = drawMsg;
            document.querySelector(".popup-main").style.display = "flex";
        })
        // document.write("The Quiz has end in a draw!")
    }
}

let newValueA = document.getElementById("score-el-18")
let newValueB = document.getElementById("score-el-19")

function startAfresh(){
    document.getElementById("new-btn").addEventListener("click", function(){
        document.querySelector("#score-el-18").style.color = "red";
            document.querySelector("#score-el-19").style.color = "red";
        document.querySelector(".popup-main").style.display = "none";
        window.location.reload();
    })
    newValueA.textContent = 0
    score = 0;
    newValueB.textContent = 0
    count = 0;
}