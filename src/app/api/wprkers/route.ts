import { NextApiRequest, NextApiResponse } from 'next'
import workersData from '../../../../workers.json' // existing JSON

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        res.status(200).json(workersData)
    } catch (error) {
        console.error('Failed to fetch workers:', error)
        res.status(500).json({ message: 'Failed to fetch workers' })
    }
}
