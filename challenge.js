let counter = document.querySelector('#counter')

let incCounter = function() {
    counter.innerHTML = parseInt(counter.innerHTML) + 1
}
let counting = setInterval(incCounter,1000)

let decreaseButton = document.querySelector('#subtract')
let increaseButton = document.querySelector('#add')
let likeButton = document.querySelector('#like');
let pauseButton = document.querySelector('#pause')
let submitButton = document.querySelector('#submit')


decreaseButton.addEventListener('click', function(){
    counter.innerHTML = parseInt(counter.innerHTML) - 1
})

increaseButton.addEventListener('click', function(){
    counter.innerHTML = parseInt(counter.innerHTML) + 1
})

let likeList = document.querySelector('.likes')
let count = 0
likeButton.addEventListener('click',function(){
    count = count + 1
    let previouslyLiked = document.querySelector(`#number${counter.innerHTML}`)
    console.log(previouslyLiked)
    if(previouslyLiked)
        return previouslyLiked.innerHTML = `${counter.innerHTML} has been liked ${count + 1} times`
    else
    count = 0
    listItem = document.createElement("li")
    listItem.setAttribute("id", `number${counter.innerHTML}`)
    likeList.append(listItem)
    listItem.innerHTML = `${counter.innerHTML} has been liked ${count + 1} time`
})
    
pauseButton.addEventListener('click', function(){
    if(pauseButton.innerHTML == ' pause '){
        clearInterval(counting)
        pauseButton.innerHTML = 'resume'
        likeButton.disabled = true
        increaseButton.disabled = true
        decreaseButton.disabled = true
        submitButton.disabled = true
    }else{
        counting = setInterval(incCounter,1000)
        pauseButton.innerHTML = ' pause '
        likeButton.disabled = false
        increaseButton.disabled = false
        decreaseButton.disabled = false
        submitButton.disabled = false
    }
})

let comments = document.querySelector('.comments')

document.addEventListener('submit',function(e){
    e.preventDefault()
    let userInput = document.querySelector('#hack')
    newComment = document.createElement("p")
    comments.append(newComment)
    newComment.innerHTML = userInput.value
    userInput.value = ''

})
