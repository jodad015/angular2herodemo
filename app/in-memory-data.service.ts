export class InMemoryDataService{
    createDb(){
        let heroes = [
            {"id": 11, "name": "Mr. Nice the second"},
            {"id": 12, "name": "The Kodad"},
            {"id": 13, "name": "Angry German"},
            {"id": 14, "name": "Scary Stache"},
            {"id": 15, "name": "Dr. IQ"},
            {"id": 16, "name": "Magma"},
            {"id": 17, "name": "Bill"},
            {"id": 18, "name": "Will"},
            {"id": 19, "name": "Paul"},
            {"id": 20, "name": "Alex"}
        ];
        return {heroes};
    }
}