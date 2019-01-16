export interface Event {
    eventEntityID: number;
    eventTitle: string;
    typeOfEvent: string;
    information: string;
    location: string;
    startTime: string;
    price: number;
    isAssigned?: boolean;
    isCompleted?: boolean;
    isPaid?: boolean;
    isExpired?: boolean;


}
