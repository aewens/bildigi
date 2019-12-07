import React, {useState, useEffect} from "react";

const useFetch = url => {
    const [data, setData] = useState(null);

    async function fetchData() {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
    }

    useEffect(() => {
        const interval = setInterval(fetchData, 1000 * 10);
        return () => clearInterval(interval);
    }, [url]);

    return data;
};

const BotMessage = ({message}) => {
    const [metadata, setMetadata] = useState(false);
    const toggleMetadata = e => setMetadata(!metadata);

    return (
        <div className="BotMessage"
            onClick={e => toggleMetadata(e)}>
            <em>{message.raw}</em>{
            Object.keys(message).map((key, k) => {
                if (!metadata || key === "raw") return;

                const value = message[key];
                if (typeof value === "object" && value !== null) {
                    return (
                        <div key={k}>
                            <strong>{key}</strong>: <ul>{
                                Object.keys(value).map((val, v) => {
                                    return (
                                        <li key={v}>
                                            <p><strong>{val}</strong>: {
                                                JSON.stringify(value[val])
                                            }</p>
                                        </li>
                                    );
                                })
                            }</ul>
                        </div>
                    );
                } else {
                    return (
                        <p key={k}><strong>{key}</strong>: {
                            JSON.stringify(value)
                        }</p>
                    );
                }
            })
        }</div>
    );
}

const Bots = () => {
    const db = useFetch("http://lab.bab.li/api/db");
    const messages = db ? db.irc : [];
    return (
        <div className="Bots">
        {messages.slice(0).reverse().map((message, index) => (
            <BotMessage
                key={index}
                message={message}/>
        ))}
        </div>
    );
}

export default Bots;
