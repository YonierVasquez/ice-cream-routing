import { IceCreamService } from "./services/ice-cream.service.js";

const iceCreamService = new IceCreamService();
const iceCreams = iceCreamService.getIceCreams();
