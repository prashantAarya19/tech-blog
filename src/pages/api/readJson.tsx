import { NextApiRequest, NextApiResponse } from "next";

type Data = {
    title: string,
    description: string
}

export default function handler(request: NextApiRequest, response: NextApiResponse<Data>) {
    const fs = require('fs');
    fs.readFile('jsonFiles/test2.json', 'utf8', (error : any, data : any) => {
        console.log(data);
        response.status(200).json(JSON.parse(data));
    });
}