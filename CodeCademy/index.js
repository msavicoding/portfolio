document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#hello').onclick = function () {
        if (document.querySelector('.title').innerHTML === 'Hello, world!') {
            document.querySelector('.title').innerHTML = 'GoodBye';
        } else {
            document.querySelector('.title').innerHTML = 'Hello, world!';
        }
    }

    let hungryLevel = Math.floor(Math.random() * 10);
    let mood = 'happy';

    document.querySelector('#hungry').onclick = function () {
       
            if (hungryLevel > 5 && mood === 'happy') {
                document.querySelector('.hungry').innerHTML = 'Time to eat';
            } else {
                document.querySelector('.hungry').innerHTML = 'Wait';
            }

        
    }

    document.querySelector('#randomnumber').innerHTML = hungryLevel;

})