import React from 'react'
import './ChatBotApp.css'

const ChatBotApp = ({ onGoBack }) => {
  return (
    <div className='chat-app'>
      <div className='chat-list'>
        <div className='chat-list-header'>
          <h2>Chat List</h2>
          <i className='bx bx-edit-alt new-chat'></i>
        </div>
        <div className='chat-list-item active'>
          <h4>Chat 10/03/2025 11:44:42 AM</h4>
          <i className='bx bx-x-circle'></i>
        </div>
        <div className='chat-list-item'>
          <h4>Chat 10/03/2025 11:48:27 AM</h4>
          <i className='bx bx-x-circle'></i>
        </div>
        <div className='chat-list-item'>
          <h4>Chat 10/03/2025 11:54:04 AM</h4>
          <i className='bx bx-x-circle'></i>
        </div>
        <div className='chat-list-item'>
          <h4>Chat 10/03/2025 12:15:29 PM</h4>
          <i className='bx bx-x-circle'></i>
        </div>
      </div>
      <div className='chat-window'>
        <div className='chat-title'>
          <h3>Chat with AI</h3>
          <i class='bx  bx-arrow-left arrow' onClick={onGoBack}></i> 
        </div>
        <div className='chat'>
          <div className='prompt'>Hi, how are you? <span>11:44:42 PM</span></div>
          <div className='response'>Hello, I am just a computer program so I don't have feelings.  However, I am here and ready to assist you. How can I help you today? <span>11:44:44 PM</span></div>
          <div className='typing'>Typing...</div>
        </div>
        <form className='msg-form'>
          <i className='fa-solid fa-face-smile emoji'></i>
          <input type='text' className='msg-input' placeholder='Type a message' />
          <i className='fa-solid fa-paper-plane'></i>
        </form>
      </div>
    </div>
  )
}

export default ChatBotApp