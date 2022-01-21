export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'In occaecat ea anim do duis et occaecat voluptate anim deserunt. Magna pariatur excepteur et minim est qui sint eiusmod ad. Veniam adipisicing dolor ullamco aliqua dolore commodo reprehenderit labore commodo occaecat quis ipsum ipsum.',
            picture: null,
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Labore sit enim duis ad proident. Ullamco officia dolor exercitation nostrud occaecat proident nostrud cupidatat voluptate commodo irure sit minim. Consequat qui irure id deserunt qui id cupidatat occaecat sunt.',
            picture: null,
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Nisi cupidatat voluptate velit aliquip incididunt consectetur dolore aute reprehenderit. Ipsum mollit tempor amet in aliquip laborum anim veniam ea nulla tempor minim pariatur. Excepteur cupidatat velit sit sit occaecat labore.',
            picture: null,
        }
    ]
})