const h1 = document.querySelector('h1');
const happyButton = document.querySelector('#happy');
const sadButton = document.querySelector('#sad');
const angryButton = document.querySelector('#angry');
const confusedButton = document.querySelector('#confused');

happyButton.addEventListener('click', () => {
    store.dispatch( {type: 'HAPPY'});
    const state = store.getState();
    console.log(state)
    h1.innerText = state.emoji;
})

sadButton.addEventListener('click', () => {
    store.dispatch( {type: 'SAD'});
    const state = store.getState();
    console.log(state)
    h1.innerText = state.emoji;
}   )

angryButton.addEventListener('click', () => {
    store.dispatch( {type: 'ANGRY'});
    const state = store.getState();
    console.log(state)
    h1.innerText = state.emoji;
}
)

confusedButton.addEventListener('click', () => {
    store.dispatch( {type: 'CONFUSED'});
    const state = store.getState();
    console.log(state)
    h1.innerText = state.emoji;
}
)
