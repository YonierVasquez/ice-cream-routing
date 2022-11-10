import iceCreamList from '../data/ice-creams.json' assert {type: 'json'};

export class IceCreamService {

    /**
     * Retornar lista de helados en orden aleatorio
     * @returns
     */
    getIceCreams() {
        return iceCreamList.sort(() => Math.random() - 0.5);
    }
}