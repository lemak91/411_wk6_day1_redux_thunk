const url = "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"

export const addCar = (car) => {
    return {
        type: 'ADD_CAR',
        value: car
    }
}

export const removeCar = (index) => {
    return {
        type: 'REMOVE_CAR',
        value: index
    }
}

export const fetchMakes = () => {
    return (dispatch) => {
        fetch(url)
        .then ((res) => res.json())
        .then ((resp) => {
            const action = {
                type: 'FETCH_MAKES',
                value: resp.Results
            }
            dispatch(action);
        })
    }
}

export const deleteMakes = (index) => {
    return {
        type: 'DELETE_MAKES',
        value: index
    }
}