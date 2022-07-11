window.addEventListener("load", () => {
    const selectAmount = document.querySelectorAll("select#cantidad-discos");
    const inputsAmount = document.querySelectorAll("form input.discs");
    const albumNumbersToLoad = document.querySelectorAll("form input.albums-numbers");
    const totalPriceToLoad = document.querySelector("form input.total")
    const albumNumbers = document.querySelectorAll("div p#album-no");
    const allPrices = document.querySelectorAll("p strong#price");
    const totalPrice = document.querySelector("p strong#total-price");
    let newTotal = 0;
    let selectorValue = [];

    selectAmount.forEach((selector, index) => {

        selector.addEventListener("click", () => {
            selectorValue[index] = selector.value;
        });

        selector.addEventListener("change", () => {
            newTotal = (parseFloat(totalPrice.innerText.replace('$','')) - ( ( parseInt(selectorValue[index]) * parseFloat(allPrices[index].innerText.replace('$','')))) + 
                        (parseInt(selector.value) * parseFloat(allPrices[index].innerText.replace('$',''))));

            totalPrice.innerText = `$${newTotal.toFixed(2)}`;

            inputsAmount[index].value = selector.value;
            albumNumbersToLoad[index].value = albumNumbers[index].innerText;
            totalPriceToLoad.value = newTotal;
        });

    });


    // form.addEventListener("click", (e) => {

    //     selectAmount.forEach((selector, index) => {
    //         db.carts.update({ pieces: parseInt(selector.value) }, { where: { user_id_2 : req.session.user.user_id, vinyl_id_4: albums[index] } });
    //     });

    // })  



});