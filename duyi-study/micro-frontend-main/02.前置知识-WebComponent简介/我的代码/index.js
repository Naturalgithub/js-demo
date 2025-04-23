class MyButton extends HTMLButtonElement {
    constructor() {
        // 必须加上 super 否则 this 无法指向 button
        super();
        this.addEventListener('click', () => {
            alert("hello my button");
        })
    }
}


window.customElements.define('my-button', MyButton, {
    extends:"button"
})