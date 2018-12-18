import React from 'react';
import { Link } from 'react-router-dom';

class EventListing extends React.Component {
  constructor(props) {
    super(props);
  }

  extractStartMon(datetime) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dateObject = new Date(datetime);
    return months[dateObject.getMonth()]
  }

  extractStartDay(datetime) {
    const dateObject = new Date(datetime);
    return dateObject.getDate();
  }

  formatStartDatetime(datetime) {
    const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const dateObject = new Date(datetime);
    const hours = dateObject.getHours()%12 === 0 ? "12" : dateObject.getHours()%12;
    let minutes;
    if (dateObject.getMinutes() < 10) {
      minutes = "0" + dateObject.getMinutes();
    } else {
      minutes = dateObject.getMinutes();
    }
    const ampm = hours > 0 && hours < 12 ? "am" : "pm";
    return days[dateObject.getDay()] + ", " + this.extractStartMon(datetime) + " " +
      this.extractStartDay(datetime) + ", " + hours + ":" + minutes + ampm;
  }

  // question for Liz: should I add price to my events table or get the data from the tickets table later
  // Need to pull from database later
  formatPrice(price) {
    return price = 0 ? "Free" : "Starts at $" + price.toFixed(2);
  }

  render() {
    const event = this.props.event;
    return (
      <li className="eventListingContainer">
        <Link to={"/event/" + event.id}>
          <img className="eventListingImage" src={event.image_url} />
          <div className="eventListingDetails">
            <div className="eventListingDateContainer">
              <div className="eventListingMonth">{this.extractStartMon(event.start_datetime)}</div>
              <div className="eventListingDay">{this.extractStartDay(event.start_datetime)}</div>
            </div>
            <div className="eventListingDescriptionContainer">
              <div className="eventListingName">{event.name}</div>
              <div className="eventListingInfo">
                {this.formatStartDatetime(event.start_datetime)}
                <br/>
                {event.address + ", " + event.city + ", " + event.state}
                <br/>
                {this.formatPrice(3.00)}
              </div>
            </div>
          </div>
        </Link>
      </li>
    );
  }


}

export default EventListing;
