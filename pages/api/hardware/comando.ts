import type { NextApiRequest, NextApiResponse } from 'next';
import { sendCommandToHardware } from '../../../lib/hardware';
import { db } from "../../../db";
import { actionLogs } from "../../../db/schema";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const { command } = req.body;

  if (!command) {
    return res.status(400).json({ message: 'Comando é obrigatório' });
  }

  try {
    console.log("Salvando comando:", command);
    const result = await sendCommandToHardware(command);
    await db.insert(actionLogs).values({
      command,
    });
    return res.status(200).json({ success: true, result });
  } catch (error) {
    console.error("Erro ao salvar comando:", error);
    return res.status(500).json({ message: 'Erro ao enviar comando', error: String(error) });
  }
}
