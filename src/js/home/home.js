import data from '../../data/typesRoom.js'
import footer from '../footer/footer.js'
import subFooter from '../subFooter/subFooter.js'

const home = {
    handleRenderTypeRoom: (currentNode, data) => {
        const html = data.map(item => {
            return `<div class="types-room ${item.id}">
                    <div class="description">
                        <div class="content">
                            <p class="content-title">${item.name}</p>
                            <p class="content-sub-title">
                                ${item.description}
                            </p>
                            <button class="button-primary">explore</button>
                        </div>
                    </div>
                    <div class="image">
                        <img
                            src=${item.image}
                            alt=""
                        />
                    </div>
                </div>`
        })
        currentNode.innerHTML = html.join('')
    },
    handleRenderSubFooter: subFooter,
    handleRenderFooter: footer,
}

const list = document.querySelector('#homepage .container.list')
const subFooterElement = document.querySelector('#homepage .sub-footer')
const footerElement = document.querySelector('#homepage .footer')

home.handleRenderTypeRoom(list, data)
home.handleRenderFooter(footerElement)
home.handleRenderSubFooter(subFooterElement)

export default home
