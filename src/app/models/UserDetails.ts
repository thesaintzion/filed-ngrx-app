export interface UserDetails {
first_name:  string,
last_name:   string,
email:       string,
monthly_advert_budget: number,
phone: {
    callingCode: string,
    number: number
} 
}