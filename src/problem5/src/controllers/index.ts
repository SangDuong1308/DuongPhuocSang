import { Request, Response } from 'express';
import { Op } from 'sequelize';
import Resource from '../models/resource.model';

export default class ResourceController {
    async create(req: Request, res: Response) {
        try {
            const resource = await Resource.create(req.body);
            res.status(201).json(resource);
        } catch (error) {
            res.status(400).json({ message: 'Error creating resource', error });
        }
    }

    async findAll(req: Request, res: Response): Promise<void> {
        try {
            const { status, search } = req.query;
            const where: any = {};

            if (status) {
                where.status = status;
            }

            if (search) {
                where[Op.or] = [
                    { title: { [Op.like]: `%${search}%` } },
                    { description: { [Op.like]: `%${search}%` } }
                ];
            }

            const resources = await Resource.findAll({ where });
            res.json(resources);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving resources', error });
        }
    }

    async findOne(req: Request, res: Response): Promise<void> {
        try {
            const resource = await Resource.findByPk(req.params.id);
            if (resource) {
                res.json(resource);
            } else {
                res.status(404).json({ message: 'Resource not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving resource', error });
        }
    }

    async update(req: Request, res: Response): Promise<void> {
        try {
            const resource = await Resource.findByPk(req.params.id);
            if (resource) {
                await resource.update(req.body);
                res.json(resource);
            } else {
                res.status(404).json({ message: 'Resource not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error updating resource', error });
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const resource = await Resource.findByPk(req.params.id);
            if (resource) {
                await resource.destroy();
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Resource not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error deleting resource', error });
        }
    }
}