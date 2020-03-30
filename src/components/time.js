import React from 'react'

class Time extends React.Component {
    constructor() {
        super()
        this.state = {
            date: new Date()
        }
    }

    updatingTime = setInterval(() => {
        let date = new Date()
        this.setState({date})
    }, 1000)

    componentWillUnmount() {
        clearInterval(this.updatingTime)
    }

    render() {
        return (
            <div className='time'>
                <span className='time__hours'>{ (this.state.date.getHours() < 10) ? '0' + this.state.date.getHours() : this.state.date.getHours() }</span>
                <span className='time__space'>:</span>
                <span className='time__minutes'>{ (this.state.date.getMinutes() < 10) ? '0' + this.state.date.getMinutes() : this.state.date.getMinutes() }</span>
                <span className='time__space'>:</span>
                <span className='time__seconds'>{ (this.state.date.getSeconds() < 10) ? '0' + this.state.date.getSeconds() : this.state.date.getSeconds() }</span>
            </div>
        )
    }
}

export default Time