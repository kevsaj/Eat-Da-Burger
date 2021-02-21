$( () => {

    $('.devour-burger').on('click', (event) => {
        const id = $(event.target).data('id');
        console.log(id);
        const nowDevoured = $(this).data('devoured');
        const devouredState = {
            devoured: nowDevoured,
            id
        };
        $.ajax(`/api/burgers/${id}`, {
            type: 'PUT',
            data: devouredState
        }).then( () => {
            console.log(`Updated state to ${nowDevoured}`)
            location.reload();
        })
    })

    $('.create-form').on('submit', (event) => {
        event.preventDefault();
        const newBurger = {
            burger_name: $('#burg').val().trim(),
        }
        $.ajax('api/burgers', {
            type: 'POST',
            data: newBurger
        }).then( () => {
            location.reload();
        })
    })    
})