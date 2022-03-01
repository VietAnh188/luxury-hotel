import data from '../../data/facilitiesItem.js'
import subFooter from '../subFooter/subFooter.js'
import footer from '../footer/footer.js'

const facilities = {
    handleRenderFacilitiesItem: (currentNode, data) => {
        const html = data.map(item => {
            return `<div class="facilities-item ${item.id}">
                        <img
                            src="${item.image}"
                            alt=""
                        />
                        <div class="name">
                            <p>${item.name}</p>
                        </div>
                    </div>`
        })
        currentNode.innerHTML = html.join('')
    },
    handleRenderSubFooter: subFooter,
    handleRenderFooter: footer,
}

const listFacilities = document.querySelector('#facilitiespage .list')
const subFooterFacilities = document.querySelector(
    '#facilitiespage .sub-footer'
)
const footerFacilities = document.querySelector('#facilitiespage .footer')

facilities.handleRenderFacilitiesItem(listFacilities, data)
facilities.handleRenderSubFooter(subFooterFacilities)
facilities.handleRenderFooter(footerFacilities)

export default facilities
