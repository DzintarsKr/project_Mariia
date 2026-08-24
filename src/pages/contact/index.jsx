import styles from "./styles.module.css";

import snapchat_contacts from "../../assets/img/logo/snapchat_contacts.svg";
import twitter_contacts from "../../assets/img/logo/twitter_contacts.svg";
import facebook_contacts from "../../assets/img/logo/facebook_contacts.svg";

function Contact() {
    return (
        <section style={{ padding: "0 13.02%" }}>
            <div>
                <h1
                    style={{
                        padding: "50px 0",
                        margin: 0,
                        borderBottom: "1px solid #e5e5e5",
                    }}
                >
                    Контакты
                </h1>

                <div style={{ paddingTop: "115px" }}>
                    <ul
                        style={{
                            listStyle: "none",
                            padding: 0,
                            margin: "0 0 40px 0",
                            color: "#b5b5b5",
                        }}
                    >
                        <li>8 800 000 00 00</li>
                        <li>emailexample@email.com</li>
                    </ul>

                    <div className={styles.contactContent}>
                        <div className={styles.formBlock}>
                            <form>
                                <div className={styles.inputRow}>
                                    <input
                                        type="email"
                                        placeholder="Ваш email"
                                        className={styles.input}
                                    />

                                    <input
                                        type="text"
                                        placeholder="Ваше имя"
                                        className={styles.input}
                                    />
                                </div>

                                <input
                                    type="text"
                                    placeholder="Введите сообщение"
                                    className={styles.messageInput}
                                />
                            </form>
                        </div>

                        <div className={styles.socialBlock}>
                            <p className={styles.socialTitle}>
                                Найдите нас на:
                            </p>

                            <div className={styles.socialLinks}>
                                <a href="#" className={styles.socialLink}>
                                    <img
                                        src={snapchat_contacts}
                                        alt="Snapchat"
                                        className={styles.socialImage}
                                    />
                                </a>

                                <a href="#" className={styles.socialLink}>
                                    <img
                                        src={facebook_contacts}
                                        alt="Facebook"
                                        className={styles.socialImage}
                                    />
                                </a>

                                <a href="#" className={styles.socialLink}>
                                    <img
                                        src={twitter_contacts}
                                        alt="X"
                                        className={styles.socialImage}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.buttonWrapper}>
                        <button
                            type="submit"
                            className={styles.submitButton}
                        >
                            Отправить
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;