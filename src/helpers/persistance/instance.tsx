import Persistence from "./Persistence";
import AsyncStorage from "@react-native-community/async-storage";


const instance  = new Persistence(AsyncStorage)