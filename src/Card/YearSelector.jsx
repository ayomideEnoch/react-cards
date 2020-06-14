import React from 'react';
import YearPicker from 'react-year-picker';

class YearSelector extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        console.log(date);
    }

    render() {
        return (
            <div className='YearSelector'>
                <YearPicker onChange={this.handleChange} />
            </div>
        );
    }
}
export default YearSelector;