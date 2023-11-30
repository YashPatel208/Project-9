background_array = [
    'bf5.jpg',
    'deathsdoor.jfif',
    'doometernal.jpg',
    'fable.jpg',
    'halo.jpg',
    'psychonauts2.png',
    'skyrim.jpg',
    'squadrons.jph',
    'trektoyomi.jpg'
]

function get_random_image(){

    random_index = Math.floor(Math.random()*background_array.length);

    selected_background = background_array[random_index]

    document.getElementById('background_image').src = `./images/background/${selected_background}`
}