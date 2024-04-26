import React, { useState, useReducer } from 'react';

const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return state;
        default:
            return state;
    }
};

const Main = () => {
    // useReducer to manage availableTimes state
    const [availTimes, dispatch] = useReducer(reducer, initializeTimes());

    // Function to update times based on selected date
    const updateTimes = (selectedDate) => {
        dispatch({ type: 'UPDATE_TIMES', selectedDate });
    };

    return (
        <div>
            <BookingForm availableTimes={availTimes} updateTimes={updateTimes} />
        </div>
    );
};

const BookingForm = ({ availableTimes, updateTimes }) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("form submitted");
    };

    console.log("updateTimes" + updateTimes)

    const handleDateChange = (event) => {
        const selectedDate = event.target.value;
        setDate(selectedDate);
        updateTimes(selectedDate); // Dispatch the update times action
    };

    return (
        <>
        <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" name="date" onChange={handleDateChange} />
            <p>{date}</p>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={e => setTime(e.target.value)}>
                {availableTimes && availableTimes.map((time, index) => (
                    <option key={index}>{time}</option>
                ))}
            </select>
            <p>{time}</p>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e => setGuests(e.target.value)}/>
            <p>{guests}</p>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <p>{occasion}</p>
            <input type="submit" value="Make Your reservation" />
        </form>
        </>
    )
}

export { BookingForm, Main };