import Loading from "./loading"
import Error from "./error";

const ConnectionHandler = (props) => {
    if (props.rates.state === "loading") {
        return Loading(props);
    } else if (props.rates.state === "error") {
        return Error(props);
    }
};

export default ConnectionHandler;
