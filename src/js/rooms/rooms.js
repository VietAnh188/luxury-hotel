import data from '../../data/rooms.js'
import subFooter from '../../js/subFooter/subFooter.js'
import footer from '../../js/footer/footer.js'

const rooms = {
    handleRenderRooms: (currentNode, data) => {
        const html = data.map(item => {
            return `<div class="rooms-item ${item.id}">
                        <img
                            src="${item.image}"
                            alt=""
                        />
                        <div class="name">
                            <p>${item.name}</p>
                        </div>
                        <div class="detail">
                            <div class="view">
                                <button class="button-primary">
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                                <p>view room details</p>
                            </div>
                            <div class="price">
                                <button class="button-primary">
                                    $${item.price} Avg/night
                                </button>
                            </div>
                        </div>
                    </div>`
        })
        currentNode.innerHTML = html.join('')
    },
    handleRenderSubFooter: subFooter,
    handleRenderFooter: footer,
}

const listRoom = document.querySelector('#roomspage .list')
const subFooterRooms = document.querySelector('#roomspage .sub-footer')
const footerRooms = document.querySelector('#roomspage .footer')

rooms.handleRenderRooms(listRoom, data)
rooms.handleRenderSubFooter(subFooterRooms)
rooms.handleRenderFooter(footerRooms)
