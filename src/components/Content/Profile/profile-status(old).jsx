import React from 'react';
import style from "./profile.module.css"

class ProfileStatus extends React.Component {
    state = {
        statusText: this.props.status,
        placeholder: "press click for change your status...",
        editMode: false,
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                statusText: this.props.status
            })
        }
    }

    toggleeEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
        this.props.updateStatus(this.state.statusText)
    }

    changeStatusText = (event) => {
        this.setState({
            statusText: event.currentTarget.value
        })
    }

    render() {
        return (
            <div className={style.status}>
                {!this.state.editMode
                    ? <p onClick={this.toggleeEditMode}>
                        {this.props.status ? this.props.status : this.state.placeholder}
                    </p>
                    : <input onBlur={this.toggleeEditMode}
                        autoFocus={true}
                        onChange={this.changeStatusText}
                        value={this.state.statusText}
                        type="text" name="status" id="profileStatus" />
                }
            </div>
        )
    }
}

export default ProfileStatus