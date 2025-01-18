import { Application } from "express";
import resourceReoutes from './resource.route'

export default class Routes {
    constructor(app: Application) {
        app.use('/api/resources', resourceReoutes);
    }
}