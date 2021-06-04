export const state = () => ({
	cars : [
		{
			"color": "purple",
			"name": "minivan",
			"type": "minivan.jpg",
			"link": "",
			"registration": new Date('2017-01-03'),
			"capacity": 7
		},
		{
			"color": "red",
			"name": "moving truck",
			"type": "movingtruck.jpg",
			"registration": new Date('2018-03-03'),
			"capacity": 5
		},
		{
			"color": "red",
			"name": "station wagon",
			"type": "stationwagon.jpg",
			"registration": new Date('2018-03-03'),
			"capacity": 4
		},
		{
			"color": "red",
			"name": "lambogini",
			"type": "lambogini.jpg",
			"registration": new Date('2018-03-03'),
			"capacity": 2
		},
		{
			"color": "red",
			"name": "truck",
			"type": "truck.jpg",
			"registration": new Date('2018-03-03'),
			"capacity": 11
		}
	]
})

// export const mutations = {
//     addItem(state, id){
//         let item = state.products.find(product => product.id == id)
//         state.myRentals.push(item)
//     },
// }

export const getters = {
    getCarById: (state) => (id) => {
        return state.cars.find(car => car.type == id)
    } 
}