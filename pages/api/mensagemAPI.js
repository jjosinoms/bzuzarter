import { connect } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
// import { normalizeConfig } from 'next/dist/next-server/server/config-shared';
import { connectToDatabase } from '../../utils/mongodb';
// import User from '../../models/User'

async function CadastrarUsuario(req, res) {
    const { db } = await connectToDatabase();

    try {
        const { method } = req;
        switch (method) {
            case 'GET':                
                const data = await db.collection('mensagensBarbara').find().toArray();
                console.log("result:", data)
                res.status(200).json(data);

                break;
            case 'POST':
                try{
                   
                    const usuario = await db.collection('mensagensBarbara').insertOne(req.body);
                    res.status(201).json({success: true , data: usuario})

                }catch{
                    res.status(400).json({success: false})
                }
                break;             

            default:
                res.status(400).json({success: false})
        }
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message });
    }
}


export default CadastrarUsuario;


