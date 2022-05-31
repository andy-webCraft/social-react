import React from "react";
import { Field, reduxForm, reset } from "redux-form";
import { maxLengthCreator, required } from "../../../tools/validators";
import { TextArea } from "../../common/formControl/formControl";
import style from './message.module.scss'

const maxLength100 = maxLengthCreator(100)

const Message = ({ friends, messages, addMessage }) => {
    let dialogs = friends.map(item => {
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

    let messagesList = messages.map(item => {
        if (item.sender === 'in') {
            return (
                <div key={item.id} className={style.message_in}>
                    <p className="message_text">{item.text}</p>
                </div>
            )
        } else if (item.sender === 'out') {
            return (
                <div key={item.id} className={style.message_out}>
                    <p className="message_text">{item.text}</p>
                </div>
            )
        } else return undefined
    })

    const addMessageHandle = (formData, dispatch) => {
        addMessage(formData.newMessageText)
        dispatch(reset("newMessage"))
    }

    return (
        <div className={style.message}>
            <div className={style.dialogs}>
                {dialogs}
            </div>
            <div className={style.content}>
                <div className={style.message_wrap}>
                    {messagesList}
                </div>
                <NewMessageForm onSubmit={addMessageHandle} />
            </div>
        </div>
    )
}

const NewMessage = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className={style.newMessage_wrap}>
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