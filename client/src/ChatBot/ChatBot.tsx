import * as React from "react";
import styles from "./ChatBot.module.scss";

const ChatBot: React.FC = () => {
  return (
    <div className={styles.chatbot}>
      <div className={styles.bot}>
        <div />
      </div>

      <section className={styles.messages}>
        <ol className={styles.conversation}>
          <li>
            <div className={styles.message}>
              <h5>From</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                nec sapien commodo, faucibus turpis eget, imperdiet nibh. Aenean
                ut semper nulla, vel vehicula quam. Morbi gravida mollis
                pharetra. In diam tellus, euismod quis blandit at, dictum vitae
                erat. Aenean imperdiet sodales molestie. Duis venenatis
                consectetur diam, at suscipit lectus. Integer ante nunc,
                venenatis id ipsum sed, vestibulum rutrum nisl. Maecenas quis
                neque sed nulla tempor blandit at ut urna. Nam vitae hendrerit
                ipsum. Vestibulum placerat ligula quis dignissim efficitur.
                Nullam libero mauris, volutpat in dolor id, tempor elementum
                nulla. Etiam viverra porta tellus eu aliquam. Pellentesque nibh
                ante, euismod porttitor elit blandit, elementum consequat justo.
                Maecenas commodo lobortis enim et ultricies. Morbi lacinia, sem
                id rutrum sagittis, lacus nisl bibendum lacus, nec gravida dui
                felis ut massa.
              </p>
            </div>
          </li>

          <li className={styles.incoming}>
            <div className={styles.message}>
              <h5>Yuri</h5>
              <p>Lorem ipsum dolor sit amet, consecte</p>
            </div>
          </li>
        </ol>
      </section>

      <section className={styles.bottomBar}>
        <nav>
          <ul>
            <li>
              <button>Opção 1</button>
            </li>
            <li>
              <button>Opção 2</button>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default ChatBot;
