import React from 'react';
import { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import styles from './ChatBot.module.scss';
import { IVertex, IOption } from '../Types';
// import brasilnu from '../brasilnu.svg';
// @ts-ignore
import Typewriter from 'typewriter-effect';

const socket = socketIOClient('http://localhost:3000');

interface IConversation {
  from: string;
  content: string;
}

const ChatBot: React.FC = () => {

  const {
    conversation,
    currentQuestion,
    finished,
    handleOption,
    loadConversation,
  } = useChatBot();

  useEffect(() => {
    console.log('useeffect');
    loadConversation();
  }, [loadConversation]);

  const MessageItem = (props: { message: IConversation }) => {
    const { message } = props;
    const incoming = message.from !== 'Bot';
    
    return (
      <li className={incoming ? styles.incoming : ''}>
        <div className={styles.message}>
          <h5>{message.from}</h5>
          {!incoming ? (
            <Typewriter
              options={{
                strings: message.content,
                autoStart: true,
                loop: false,
                delay: 30,
                cursor: '',
              }}
            />
          ) : (
            <p>{message.content}</p>
          )}
        </div>
      </li>
    )
  }

  return (
    <div className={styles.chatbot}>
      <div className={styles.bot}>
        {/* <img src={brasilnu} alt="Brasil Nu - LiberBot" /> */}
      </div>

      <section className={styles.messages}>
        <ol className={styles.conversation}>
          {conversation.map((message, idx) => 
            <MessageItem key={idx} message={message} />  
          )}
        </ol>
      </section>
      
      {!finished && currentQuestion.options ? (
        <section className={styles.bottomBar}>
          <nav>
            <ul>
              {currentQuestion.options.map((opt, idx) => 
                <li key={idx}>
                  <button onClick={() => handleOption(opt)}>{opt.text}</button>
                </li>
              )}
            </ul>
          </nav>
        </section>
      ) : (
        <p>Terminado</p>
      )}
    </div>
  );
};

const useChatBot = () => {
  const [conversation, setConversation] = useState<IConversation[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<IVertex>({ _id: '', question: '', options: [] });
  const [finished, setFinished] = useState<boolean>(false);

  function handleOption(opt: IOption) {
    setConversation(conversation.concat({ from: 'Yuri', content: opt.text }));
    socket.emit('ANSWER', opt);
  }

  function loadConversation() {
    socket.on('QUESTION', (data: string) => {
      const question: IVertex = JSON.parse(data);
      setConversation(conversation.concat({ from: 'Bot', content: question.question }));
      setCurrentQuestion(question);
    });
    
    socket.on('FINISH', (data: string) => {
      const parsed = JSON.parse(data);
      if (parsed.finished) {
        setFinished(true);
      }
    });
  }

  return {
    conversation,
    currentQuestion,
    finished,
    handleOption,
    loadConversation,
  }
}

export default ChatBot;
