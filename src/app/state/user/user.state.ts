import { UserDetails } from "../../models/UserDetails";

export const demoUserDetails : UserDetails = {
    first_name: '',
    last_name: '',
    email: '',
    monthly_advert_budget: 0,
    phone: {
        callingCode: '',
        number: 0
    }
   }

export const initialState = {
    userDetails: demoUserDetails,
}

