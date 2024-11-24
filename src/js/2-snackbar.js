import "izitoast/dist/css/iziToast.min.css";

import iziToast from "izitoast";

const form = document.querySelector(".form");
const inputDelay = document.querySelector("[name='delay']");
const inputFulfilled = document.querySelector("[value='fulfilled']");
const inputRejected = document.querySelector("[value='rejected']");
const btn = document.querySelector(".form button");

form.addEventListener("submit", event => {
    event.preventDefault();
    const promise = inputDelayHandler();

    if(promise) {
        promise
        .then(delay => {
            iziToast.success({ message: `✅ Fulfilled promise in ${delay}ms`, 
            position: "topRight"
        });
        form.reset();
        })

        .catch(delay => {
            iziToast.error({ message: `❌ Rejected promise in ${delay}ms`, position: "topRight"
        });
        form.reset();
        });

}
});


function inputDelayHandler() {
    const delay = Number(inputDelay.value);

     if(!isNaN(delay) && delay > 0) {
        const result = new Promise((resolve, reject) => { 
            
            setTimeout(() => {
                if (inputFulfilled.checked) {
                resolve(delay);
                } 
                else if (inputRejected.checked) {
                reject(delay);
                }
             }, delay)
         });
         return result;
     } 
    }

