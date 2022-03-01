const handleRender = currentNode => {
    currentNode.innerHTML = `<div id="footer">
            <div class="container content">
                <div class="info">
                    <div class="logo">
                        <p>luxury</p>
                        <p>hotels</p>
                    </div>
                    <p>
                        497 Evergreen Rd. Roseville, CA 95673 +44 345 678 903
                        luxury_hotels@gmail.com
                    </p>
                </div>
                <div class="about">
                    <ul>
                        <li>about us</li>
                        <li>contact</li>
                        <li>terms & conditions</li>
                    </ul>
                </div>
                <div class="social">
                    <div>
                        <div class="fb">
                            <i class="fa-brands fa-facebook-f"></i>
                            <p>facebook</p>
                        </div>
                        <div class="twt">
                            <i class="fa-brands fa-twitter"></i>
                            <p>twitter</p>
                        </div>
                        <div class="ins">
                            <i class="fa-brands fa-instagram"></i>
                            <p>instagram</p>
                        </div>
                    </div>
                </div>
                <div class="subscribe">
                    <form>
                        <label for="subscribe"
                            >Subscribe to our news letter</label
                        >
                        <div>
                            <input
                                id="subscribe"
                                type="email"
                                placeholder="Email Address"
                            />
                            <button class="button-primary">OK</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>`
}

export default handleRender
