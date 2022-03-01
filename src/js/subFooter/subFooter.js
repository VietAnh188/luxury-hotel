const handleRender = currentNode => {
    currentNode.innerHTML = `<div id="sub-footer">
                <p class="sub-footer-header">testimonials</p>
                <p class="sub-footer-description">
                    "Calm, Serene, Retro – What a way to relax and enjoy"
                </p>
                <p class="sub-footer-author">Mr. and Mrs. Baxter, UK</p>
                <div class="sub-button">
                    <button class="button-primary">
                        <i class="fa-solid fa-angle-left"></i>
                    </button>
                    <button class="button-primary">
                        <i class="fa-solid fa-angle-right"></i>
                    </button>
                </div>
            </div>`
}

export default handleRender
