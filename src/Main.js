import React from 'react';
import './styles.css';
import Header from './components/Header';
import Filters from './components/Filters';
import HotelsCard from './components/HotelsCard';
import Footer from './components/Footer';
import Error from './components/Error';
import { hotelsData, today } from './scripts/data';

class Main extends React.Component {

    state = {
        hotelsData,
        byDateFrom: today.valueOf(),
        byDateTo: today.valueOf() + 86400000,
        byCountry: "",
        byPrice: "",
        byRooms: "",
        error: ""
    }

    componentDidMount = () => {
        this.filterByDate();
    }

    // Función que realiza filtro default por fechas.
    filterByDate = () => {
        const byDate = hotelsData.filter(hotel => (this.state.byDateFrom >= hotel.availabilityFrom && this.state.byDateFrom <= hotel.availabilityTo)).filter(hotel => (this.state.byDateTo >= hotel.availabilityFrom && this.state.byDateTo <= hotel.availabilityTo));
        this.setState({
            hotelsData: byDate
        })
    }

    // Convierte fecha seleccionada a formato válido para input tipo date.
    getDate = (date) => {
        const dateSelect = new Date(date);
        let day = dateSelect.getDate();
        let month = dateSelect.getMonth() + 1;
        let year = dateSelect.getFullYear();

        if (day.toString().length === 1) {
            day = "0" + day;
        }
        if (month.toString().length === 1) {
            month = "0" + month;
        }
        return `${year}-${month}-${day}`
    }

    // Valida el resultado de los filtros seleccionados para la reserva de hoteles
    validateData = (data) => {
        data.length !== 0 ? this.setState({ error: "" }) 
        : this.setState({ error: "No hay reservas disponibles para los filtros seleccionados" });
    }

    // Retorna true si la fecha inicial seleccionada es menor a la fecha final
    validateDate = (dateFrom, dateTo) => {
        const dateSelectFrom = new Date(dateFrom);
        const dateSelectTo = new Date(dateTo);
        return dateSelectFrom.getDate()+dateSelectFrom.getMonth() < dateSelectTo.getDate()+dateSelectTo.getMonth();
    }

    //Se filtra data de hoteles de acuerdo a la categoría seleccionada por el usuario
    handleCategoryChange = (category, value) => {
        const { byCountry, byPrice, byRooms, byDateFrom, byDateTo } = this.state;
        if (category === 'country') {
            const hotels = value ? hotelsData.filter(hotel => hotel.country === value) : hotelsData;
            const filterByPrice = byPrice ? hotels.filter(data => data.price === byPrice) : hotels;
            const filterByRooms = byRooms.length ? filterByPrice.filter(data => data.rooms >= byRooms[0] && data.rooms <= byRooms[1]) : filterByPrice;
            const filterByDateFrom = byDateFrom ? filterByRooms.filter(hotel => (byDateFrom >= hotel.availabilityFrom && byDateFrom <= hotel.availabilityTo)) : filterByRooms;
            const filterByDateTo = byDateTo ? filterByDateFrom.filter(hotel => (byDateTo >= hotel.availabilityFrom && byDateTo <= hotel.availabilityTo)) : filterByDateFrom;
            this.setState({ hotelsData: filterByDateTo, byCountry: value ? value : "" }, () => this.validateData(this.state.hotelsData))
        } else if (category === 'price') {
            const hotels = value ? hotelsData.filter(hotel => hotel.price === +value) : hotelsData;
            const filterByCountry = byCountry ? hotels.filter(data => data.country === byCountry) : hotels;
            const filterByRooms = byRooms.length ? filterByCountry.filter(data => data.rooms >= byRooms[0] && data.rooms <= byRooms[1]) : filterByCountry;
            const filterByDateFrom = byDateFrom ? filterByRooms.filter(hotel => (byDateFrom >= hotel.availabilityFrom && byDateFrom <= hotel.availabilityTo)) : filterByRooms;
            const filterByDateTo = byDateTo ? filterByDateFrom.filter(hotel => (byDateTo >= hotel.availabilityFrom && byDateTo <= hotel.availabilityTo)) : filterByDateFrom;
            this.setState({ hotelsData: filterByDateTo, byPrice: value ? +value : "" }, () => this.validateData(this.state.hotelsData))
        } else if (category === 'rooms') {
            const arrRooms = value ? value.split(",") : [];
            const hotels = arrRooms.length ? hotelsData.filter(hotel => hotel.rooms >= arrRooms[0] && hotel.rooms <= arrRooms[1]) : hotelsData;
            const filterByCountry = byCountry ? hotels.filter(data => data.country === byCountry) : hotels;
            const filterByPrice = byPrice ? filterByCountry.filter(data => data.price === byPrice) : filterByCountry;
            const filterByDateFrom = byDateFrom ? filterByPrice.filter(hotel => (byDateFrom >= hotel.availabilityFrom && byDateFrom <= hotel.availabilityTo)) : filterByPrice;
            const filterByDateTo = byDateTo ? filterByDateFrom.filter(hotel => (byDateTo >= hotel.availabilityFrom && byDateTo <= hotel.availabilityTo)) : filterByDateFrom;
            this.setState({ hotelsData: filterByDateTo, byRooms: arrRooms.length ? arrRooms : [] }, () => this.validateData(this.state.hotelsData))
        } else if (category === 'dateFrom') {
            const dateFrom = new Date(value.replace(/-/g, '\/'));
            if (this.validateDate(dateFrom, byDateTo)) {
                this.setState({ error: "" })
                const hotels = dateFrom ? hotelsData.filter(hotel => (dateFrom.valueOf() >= hotel.availabilityFrom && dateFrom.valueOf() <= hotel.availabilityTo)) : hotelsData;
                const filterByDateTo = byDateTo ? hotels.filter(hotel => (byDateTo >= hotel.availabilityFrom && byDateTo <= hotel.availabilityTo)) : hotels;
                const filterByCountry = byCountry ? filterByDateTo.filter(data => data.country === byCountry) : filterByDateTo;
                const filterByRooms = byRooms.length ? filterByCountry.filter(data => data.rooms >= byRooms[0] && data.rooms <= byRooms[1]) : filterByCountry;
                const filterByPrice = byPrice ? filterByRooms.filter(data => data.price === byPrice) : filterByRooms;
                this.setState({ hotelsData: filterByPrice, byDateFrom: dateFrom ? dateFrom.valueOf() : "" }, () => this.validateData(this.state.hotelsData))
            } else {
                this.setState({ error: "La fecha seleccionada debe ser menor a la fecha final" })
            }
        } else if (category === 'dateTo') {
            const dateTo = new Date(value.replace(/-/g, '\/'));
            if (dateTo.valueOf() > byDateFrom) {
                this.setState({ error: "" })
                const hotels = dateTo ? hotelsData.filter(hotel => (dateTo.valueOf() >= hotel.availabilityFrom && dateTo.valueOf() <= hotel.availabilityTo)) : hotelsData;
                const filterByDateFrom = byDateFrom ? hotels.filter(hotel => (byDateFrom >= hotel.availabilityFrom && byDateFrom <= hotel.availabilityTo)) : hotels;
                const filterByCountry = byCountry ? filterByDateFrom.filter(data => data.country === byCountry) : filterByDateFrom;
                const filterByRooms = byRooms.length ? filterByCountry.filter(data => data.rooms >= byRooms[0] && data.rooms <= byRooms[1]) : filterByCountry;
                const filterByPrice = byPrice ? filterByRooms.filter(data => data.price === byPrice) : filterByRooms;
                this.setState({ hotelsData: filterByPrice, byDateTo: dateTo ? dateTo.valueOf() : "" }, () => this.validateData(this.state.hotelsData))
            } else {
                this.setState({ error: "La fecha seleccionada debe ser mayor a la fecha inicial" })
            }
        }
    }

    render() {
        const { byDateFrom, byDateTo, hotelsData, error } = this.state;
        return (
            <div className="app">
                <Header dateFrom={byDateFrom} dateUntil={byDateTo} />
                <Filters
                    today={this.getDate(today.valueOf())}
                    dateFrom={this.getDate(byDateFrom)}
                    dateTo={this.getDate(byDateTo)}
                    handleCategoryChange={this.handleCategoryChange}
                />
                {error && <Error error={error} />}
                <HotelsCard hostels={hotelsData} error={error} />
                <Footer />
            </div>
        )
    }
}

export default Main;
