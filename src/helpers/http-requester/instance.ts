import HttpRequester from "./HttpRequester";
import axios from 'axios'

const instance = new HttpRequester({
    library: axios
});

export default instance