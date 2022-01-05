import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../tools/validators";
import { TextArea } from "../../common/formControl/formControl";
import style from './message.module.css'

const maxLength100 = maxLengthCreator(100)

const Message = (props) => {
    let dialogs = props.friends.map(item => {
        return (
            <div key={item.id} className={style.dialog}>
                <div className={style.avatar}><img src={item.avatar} alt="avatar" className="img" /></div>
                <div className={style.info}>
                    <p className={style.name}>{item.name}</p>
                    <p className={style.last}></p>
                </div>
            </div>
        )
    })

    let messages = props.messages.map(item => {
        if (item.sender === 'in') {
            return (
                <div key={item.id} className={style.message_in}>
                    <p className={style.text}>{item.text}</p>
                </div>
            )
        } else if (item.sender === 'out') {
            return (
                <div key={item.id} className={style.message_out}>
                    <p className={style.text}>{item.text}</p>
                </div>
            )
        } else return undefined
    })

    const addMessage = (formData) => {
        props.addMessage(formData.newMessageText)
    }

    return (
        <div className={style.message}>
            <div className={style.dialogs}>
                {dialogs}
            </div>
            <div className={style.content}>
                <div className={style.message_wrap}>
                    {messages}
                </div>
                <NewMessageForm onSubmit={addMessage} />
            </div>
        </div>
    )
}

const NewMessage = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.newMessage_wrap}>
            <Field
                component={TextArea}
                className={style.newTextField}
                placeholder="Write your message..."
                name="newMessageText"
                rows="5"
                validate={[required, maxLength100]}
            />
            <button className={style.addMessage}>Send</button>
        </form>
    )
}

const NewMessageForm = reduxForm({ form: "newMessage" })(NewMessage)

export default Message